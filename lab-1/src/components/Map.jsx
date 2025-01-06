import { useState } from 'react';
import Region from './Region';
import SelRegion from './SelRegion';
import './Map.css';

const Map = () => {
    const [selRegion, setSelRegion] = useState(null);

    const regions = [
        { name: 'Київ', x: 325, y: 110, width: 63, height: 54 },
        { name: 'Житомир', x: 255, y: 120, width: 63, height: 54 },
        { name: 'Вінниця', x: 255, y: 190, width: 63, height: 54 },
        { name: 'Тернопіль', x: 140, y: 155, width: 63, height: 54 },
        { name: 'Полтава', x: 485, y: 150, width: 74, height: 63 },
        { name: 'Сімферополь', x: 490, y: 440, width: 63, height: 54 },
    ];

    const handleRegionClick = (name) => {
        setSelRegion(name);
    };

    return (
        <div className="map-container">
            <div className="map">
                <svg width="789" height="527">
                    {/* Фонове зображення карти України */}
                    <image href="/src/assets/map.jpg" x="0" y="0" width="789" height="527" />

                    {/* Додавання областей */}
                    {regions.map((region) => (
                        <Region
                            key={region.name}
                            name={region.name}
                            width={region.width}
                            height={region.height}
                            x={region.x}
                            y={region.y}
                            onClick={handleRegionClick}
                        />
                    ))}
                </svg>
            </div>
            {selRegion && <SelRegion region={selRegion} />}
        </div>
    );
};

export default Map;
