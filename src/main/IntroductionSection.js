import React from 'react';
// Components
import WebLink from '../common/WebLink';
// Images
import profile from '../images/main-profile.jpg';

import parse from 'html-react-parser';

const IntroductionSection = ({ introduction, websites }) => {
    const imageStyle = {
        width: '200px',
    };

    return (
        <header class='container text-center pt-5 pb-5'>
            <div class='row justify-content-center'>
                <img
                    src={profile}
                    alt='jinkyumpark-profile'
                    className='img-responsive rounded-circle mb-4'
                    style={imageStyle}
                />
                <h1>{introduction.title} </h1>
                <p class='lead col-xs-12 col-lg-9'>
                    {parse(introduction.summary)}
                </p>
            </div>

            {websites.map((website) => {
                return <WebLink website={website} />;
            })}
        </header>
    );
};

export default IntroductionSection;
