import React from 'react';
import { BiErrorCircle as ErrorIcon } from 'react-icons/bi';

const Error = ({
    mainErrorMessage,
    subErrorMessage,
    subStyle = 'text-muted',
}) => {
    const errorIconStyle = {
        width: '150px',
        height: '100px',
    };

    return (
        <div className='text-center'>
            <ErrorIcon className='text-danger' style={errorIconStyle} />
            <h1 className='mt-3'>{mainErrorMessage} </h1>
            <h3 className={subStyle}>{subErrorMessage}</h3>
        </div>
    );
};

export default Error;
