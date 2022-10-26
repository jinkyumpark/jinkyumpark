import React from 'react';
import { Button } from 'react-bootstrap';

const MoreButton = ({ style = {}, url, showing = true }) => {
    return (
        <>
            {showing === true && (
                <div className='row justify-content-center mt-3'>
                    <div className='d-grid col-xs-12 col-lg-5'>
                        <Button variant='light' style={style} href={url}>
                            더 보기
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MoreButton;
