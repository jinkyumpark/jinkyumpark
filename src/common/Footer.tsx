import React from 'react'
import styled from 'styled-components';
import WebsiteIcon from '../data/websiteIcon';
import breakpoints from "./breakpoints";

const Footer: React.FC<{ compact?: boolean }> = ({compact = false}) => {
    return (
        <Container $compact={compact}>
            <div className="col-12 col-sm-6 col-md-8 p-0">
                <div className="text-muted">박진겸, Jinkyum Park</div>

                <a className="text-muted text-decoration-none"
                   href="mailto:jinkyumpark@naver.com">jinkyumpark@naver.com</a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 p-0 pt-4 pt-md-0 text-end" style={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-end', alignItems: 'center'}}>
                <a className="text-muted ms-1 me-1 hover-effect" href="https://minion.toss.im/BjYRPHFt" target='_blank'
                   rel="noreferrer">
                    <Image src={WebsiteIcon.lostThings} alt=''/>
                </a>

                <a className="text-muted ms-1 me-1 hover-effect"
                   href="https://apps.apple.com/us/app/substrack-bills-tracker/id6451234943"
                   target='_blank' rel="noreferrer">
                    <Image src={WebsiteIcon.substrackIcon} alt=''/>
                </a>

                <a className="text-muted ms-1 me-1 hover-effect" href="https://booksitout.com" target='_blank'
                   rel="noreferrer">
                    <Image src={WebsiteIcon.booksitout} alt=''/>
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
        </Container>
    )
}

export default Footer

const Container = styled.footer.attrs({
    className: 'row'
})<{ $compact?: boolean }>`
    padding: 50px ${props => props.$compact ? '0' : '100px'};
    margin: 0;

    @media (max-width: ${breakpoints.md}) {
        padding: 50px ${props => props.$compact ? '0' : '20px'};
    }
`

const Image = styled.img.attrs({
    className: `rounded`,
})`
    width: 50px;
    height: 50px;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
    }
`