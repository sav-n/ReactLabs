import 'react';

// eslint-disable-next-line react/prop-types
const Region = ({ name, x, y, width, height, onClick }) => (
    <rect
        width={width}
        height={height}
        x={x}
        y={y}
        fill="rgba(0, 0, 255, 0.5)"
        stroke="black"
        strokeWidth="2"
        onClick={() => onClick(name)}
        style={{ cursor: 'pointer' }}
    />
);

export default Region;
