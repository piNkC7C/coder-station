import useAmap from '../../hooks/useAmap';

const MapComponent = () => {
  const loaded = useAmap();

  if (!loaded) {
    return <div>Loading map...</div>;
  }

  // 在这里编写使用高德地图的业务逻辑

  return <div>Map is ready!</div>;
};

export default MapComponent;
