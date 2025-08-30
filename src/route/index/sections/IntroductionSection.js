import React from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components';
import WebLink from "../../../common/WebLink";
import Images from "../../../images/Images";

const IntroductionSection = ({introduction, websites}) => {
    const imageStyle = {
        width: '200px',
    }

    return (
        <Container>
            <div className='row justify-content-center mb-3'>
                <img src={Images.profile} alt='jinkyumpark-profile' className='img-responsive rounded-circle mb-4'
                     style={imageStyle}/>
                <h2 className='force-1-line'>{parse(introduction.title)} </h2>

                <p className='lead col-xs-12 col-lg-10 mt-3 text-start text-md-center'>
                    <div className='d-none d-md-block'>
                        {
                            introduction.summaries.map((summary) => <li>{parse(summary)}</li>)
                        }
                    </div>

                    <div className='d-md-none'>
                        <ul>
                            {
                                introduction.summaries.map((summary) => <li className='mt-1'>{parse(summary)}</li>)
                            }
                        </ul>
                    </div>
                </p>
            </div>

            {
                websites.map((website) => <WebLink website={website} border={website.border}/>)
            }
        </Container>
    )
}

const Container = styled.header.attrs({
    className: 'container text-center pt-5 pb-5',
})`
    overflow: hidden;
`

export default IntroductionSection
