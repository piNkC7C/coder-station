import { useEffect, useState } from 'react';
import { AmapJsApiLoader } from '@amap/amap-jsapi-loader';

const apiKey = '78562d56932fb172e935e75c353590ef';

const useAmap = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadMap = async () => {
            const loader = new AmapJsApiLoader({
                key: apiKey,
                version: '2.0',
                plugins: ['AMap.Geolocation']
            });

            await loader.load();
            setLoaded(true);
        };

        loadMap();
    }, []);

    return loaded;
};

export default useAmap;