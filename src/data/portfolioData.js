import simplyJournal from '../images/portfolio/simply-journal.png';
import springfeed from '../images/portfolio/springfeed.png';

import { portfolioUrl } from './urlData';

export const portfolios = [
    {
        image: simplyJournal,
        title: 'Simply Journal (1인)',
        subtitle: '매일 일기쓰기',
        url: `${portfolioUrl}/simply-journal`,
    },
    {
        image: springfeed,
        title: 'Springfeed (3인)',
        subtitle: '인스타그램을 참고한 SNS',
        url: `${portfolioUrl}/springfeed`,
    },
];
