import React from 'react';

const WebLink = ({ website }) => {
    return (
        <a
            target='_blank'
            rel='noreferrer'
            href={website.url}
            className='ms-3 me-3'
        >
            <img
                src={website.icon}
                alt={`${website.url}-icon`}
                className='img-responsive rounded-circle'
                style={{
                    width: '40px',
                }}
            />
        </a>
    );
};

export default WebLink;
