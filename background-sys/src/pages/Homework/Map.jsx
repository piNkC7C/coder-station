import useSize from '@/hooks/useSize';
import AMapLoader from '@amap/amap-jsapi-loader';
import { Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
window._AMapSecurityConfig = {
  securityJsCode: '78562d56932fb172e935e75c353590ef',
};
const Map = () => {
  const [aMap, setAMap] = useState();
  const mapRef = useRef(null);
  useEffect(() => {
    initMap();
  }, []);
  const { handleSetMapAttr, computeWidthHeight, mapAttr } = useSize(mapRef.current);
  const initMap = () => {
    AMapLoader.load({
      key: '0c78460d8579eebb232d7908aa833ab9',
      version: '2.0',
      plugins: ['AMap.Driving', 'AMap.ToolBar'],
      AMapUI: {
        version: '1.1',
      },
      Loca: {
        version: '2.0',
      },
    }).then((AMap) => {
      let aMap = new AMap.Map('map', {
        zoom: 12,
        viewMode: '3D',
        zooms: [2, 22],
      });
      let driving = new AMap.Driving({
        map: aMap,
        autoFitView: true,
        policy: AMap.DrivingPolicy.LEAST_TIME,
      });
      let points = [
        { keyword: '浙江飞扬旅游广场', city: '宁波' },
        { keyword: '宁波大学', city: '宁波' },
      ];
      driving.search(points, function (status, result) {
        if (status === 'complete') {
          console.log('绘制驾车路线完成', result);
        } else {
          console.error('获取驾车数据失败');
        }
      });
      setAMap(aMap);
      computeWidthHeight();
    });
  };

  return (
    <>
      <div ref={mapRef} id="map" style={{ width: '100%', height: '400px' }}></div>
      <Input
        onChange={handleSetMapAttr}
        onBlur={computeWidthHeight}
        name="width"
        value={mapAttr.width}
        placeholder="宽"
        style={{
          width: '100px',
          display: 'flex',
          position: 'fixed',
          right: '50px',
          bottom: '160px',
        }}
      />
      <Input
        onChange={handleSetMapAttr}
        onBlur={() => computeWidthHeight}
        name="height"
        value={mapAttr.height}
        placeholder="高"
        style={{
          width: '100px',
          display: 'flex',
          position: 'fixed',
          right: '50px',
          bottom: '120px',
        }}
      />
    </>
  );
};
export default Map;
