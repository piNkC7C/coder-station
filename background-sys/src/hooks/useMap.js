import { useState, useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

const useMap = (apiKey, address) => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const loadMap = async () => {
            try {
                await AMapLoader.load({
                    key: apiKey,
                    version: '2.0',
                    plugins: ['AMap.Driving']
                });
                const AMap = window.AMap;

                const mapInstance = new AMap.Map('map', {
                    zoom: 15,
                    viewMode: '3D',
                    zooms: [2, 22],
                });

                setMap(mapInstance);
            } catch (error) {
                console.error('加载地图失败：', error);
            }
        };

        loadMap();
    }, [apiKey]);

    useEffect(() => {
        if (map && address) {
            const { origin, destination } = address
            const AMap = window.AMap;
            let driving = new AMap.Driving({
                // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
                policy: AMap.DrivingPolicy.LEAST_TIME,
                // map 指定将路线规划方案绘制到对应的AMap.Map对象上
                map: map,
                // panel 指定将结构化的路线详情数据显示的对应的DOM上，传入值需是DOM的ID
                panel: 'panel'
            })

            let points = [
                { keyword: origin, city: '宁波' },
                { keyword: destination, city: '宁波' }
            ]

            // 搜索完成后，将自动绘制路线到地图上
            driving.search(points, function (status, result) {
                // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                if (status === 'complete') {
                    console.log('绘制驾车路线完成')
                } else {
                    console.log('获取驾车数据失败：' + result)
                }
            })
        }
    }, [map, address]);

    return [map];
};

export default useMap;