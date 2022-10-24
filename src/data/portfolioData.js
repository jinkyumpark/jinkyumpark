import simplyJournal from '../images/portfolio/simply-journal.png';
import springfeed from '../images/portfolio/springfeed.png';

import { portfolioUrl } from './urlData';

export const portfolios = [
    {
        id: 2,
        name: 'simply-journal',
        title: 'Simply Journal',
        subtitle: '매일 일기쓰기',
        introduction: `
        TEST
        `,
        participants: 1,
        image: simplyJournal,

        url: `${portfolioUrl}/simply-journal`,
        githubLink: '',

        technologiesUsed: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
        id: 1,
        name: 'springfeed',
        title: 'Springfeed',
        subtitle: '인스타그램을 참고한 SNS',
        introduction: `
        국비지원학원에서 조별로 진행한 프로젝트입니다. 
        일정에 맞춰 개발해 보면서 처음 요구사항 분석이나 API 명세서를 잘 작성하는 것의 중요성에 대해 느꼈고,
        다른 분이 만든 코드를 수정하면서 단순히 동작하기만 하는 코드가 아닌 읽기 쉬운 코드의 중요성을 체감했습니다.
        또, 개발 도구 자동화나 CI/CD가 생산성에 미치는 영향을 보면서 DevOps 직군에 대한 관심이 생겼습니다.
        `,
        participants: 3,
        image: springfeed,

        url: `${portfolioUrl}/springfeed`,
        githubLink: 'https://github.com/kxmjxnjoo/springfeed',

        technologiesUsed: [2, 3, 6, 8],
    },
];
