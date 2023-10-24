// import useMap from '@/hooks/useMap';
import { Input, Tabs } from 'antd';
import { useState } from 'react';
window._AMapSecurityConfig = {
  securityJsCode: '78562d56932fb172e935e75c353590ef',
};

function Map() {
  const apiKey = '0c78460d8579eebb232d7908aa833ab9';

  const [destination, setDestination] = useState({
    origin: '宁波站',
    destination: '樱花公园',
  });

  const [map] = useMap(apiKey, destination);

  const handleDes = (e) => {
    console.log(e);
    const setValue = { ...destination };
    switch (e.target.name) {
      case 'origin':
        setValue.origin = e.target.value;
        setDestination(setValue);
        break;
      case 'destination':
        setValue.destination = e.target.value;
        setDestination(setValue);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Input
        placeholder="起点"
        name="origin"
        value={destination.origin}
        onChange={(e) => {
          handleDes(e);
        }}
      ></Input>
      <div style={{ height: '10px' }}></div>
      <Input
        placeholder="终点"
        name="destination"
        value={destination.destination}
        onChange={(e) => {
          handleDes(e);
        }}
      ></Input>
      <div
        id="map"
        style={{ width: '500px', height: '500px', marginTop: '20px' }}
      ></div>
      <div
        id="panel"
        style={{ width: '500px', height: '500px', marginTop: '20px' }}
      ></div>
    </>
  );
}

export default Map;
