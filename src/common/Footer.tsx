import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components';
import WebsiteIcon from '../data/websiteIcon';

const Footer = () => {
    return (
        <Container className='w-100'>
            <footer className="d-flex justify-content-between py-3 my-4">
                <div className="col-6 col-md-4 d-flex align-items-start flex-column">
                    <span className="text-muted">박진겸, Jinkyum Park</span>
                    <a className="text-muted text-decoration-none"
                       href="mailto:jinkyumpark@naver.com">jinkyumpark@naver.com</a>
                </div>

                <div className="d-flex justify-content-end col-6 col-md-4">
                    <a className="text-muted ms-1 me-1 hover-effect" href="https://booksitout.com" target='_blank'
                       rel="noreferrer">
                        <Image src={WebsiteIcon.booksitout} alt=''/>
                    </a>

                    <a className="text-muted ms-1 me-1 hover-effect"
                       href="https://apps.apple.com/us/app/substrack-bills-tracker/id6451234943"
                       target='_blank' rel="noreferrer">
                        <Image src={WebsiteIcon.substrackIcon} alt=''/>
                    </a>

                    <a className="text-muted ms-1 me-1 hover-effect"
                       href="https://apps.apple.com/app/purrfit-tracker/id6458539987" target='_blank' rel="noreferrer">
                        <Image src={WebsiteIcon.purrfitTracker} alt=''/>
                    </a>

                    <a className="text-muted ms-1 me-1 hover-effect"
                       href="https://apps.apple.com/us/app/featured-days/id6523433258"
                       target='_blank' rel="noreferrer">
                        <Image src={WebsiteIcon.featuredDays} alt=''/>
                    </a>

                    <a className="text-muted ms-1 me-1 hover-effect"
                       href="https://apps.apple.com/us/app/pianoman/id6456449788"
                       target='_blank' rel="noreferrer">
                        <Image src={WebsiteIcon.pianoman} alt='' className={'border'}/>
                    </a>
                </div>
            </footer>
        </Container>
    )
}

export default Footer

const Image = styled.img.attrs({
    className: `img-fluid rounded`,
})`
    width: 50px;
    height: 50px;

    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
    }
`