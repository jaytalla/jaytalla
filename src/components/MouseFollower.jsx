import React, { useState } from 'react';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseClick = () => {
        console.log('Div clicked');
    };

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                border: '1px solid black',
                width: '50px',
                height: '50px'
            }}
            onMouseMove={handleMouseMove}
            onClick={handleMouseClick}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'red',
                    borderRadius: '50%'
                }}
            />
        </div>
    );
};

export default MouseFollower;
