// Simply Journal
import simplyJournal from '../images/portfolio/simply-journal.png';
// Springfeed
import springfeed from '../images/portfolio/springfeed.png';
import springfeedErDiagram from '../images/portfolio/er-diagram/springfeed-er.png';

import { portfolioUrl } from './url';

export const portfolios = [
    {
        id: 2,
        name: 'simply-journal',
        title: 'Simply Journal',
        subtitle: '매일 간단하게 한 줄씩 일기를 쓰게 도와주는 사이트',
        introduction: `
        우연히 옛날 일기를 발견해 읽었는데, 너무 즐거워 일기를 쓰기로 했습니다. 
        하지만 의외로 마땅한 서비스가 없어 직접 만들었습니다.
        `,
        participants: 1,
        image: simplyJournal,

        primaryFeatures: [
            '일기 작성/수정/삭제',
            '기간별로 일기 조회, 키워드로 일기 검색',
            '카카오/네이버로 로그인',
            '공유를 허용한 내 일기를 공유',
            '다른 사람을 팔로우해서 서로 일기 공유',
        ],
        difficulties: [],

        url: `${portfolioUrl}/simply-journal`,
        githubLink: 'https://github.com/jinkyumpark/simply-journal',
        siteLink: 'http://journal.jinkyumpark.com',

        technologiesUsed: [1, 2, 3, 4, 5, 6, 7, 8],

        db: {
            erDiagram: springfeedErDiagram,
            used: [61, 63],
            query: '',
        },

        challenges: [
            {
                name: '보안이슈',
                description: '',
            },
        ],
    },
    {
        id: 1,
        name: 'springfeed',
        title: 'Springfeed',
        subtitle: '인스타그램을 참고한 SNS',
        introduction: `
        국비지원학원에서 조별로 진행한 프로젝트입니다.<br/><br/>
        일정에 맞춰 개발해 보면서 처음 요구사항 분석이나 API 명세서를 잘 작성하는 것의 중요성에 대해 느꼈고,
        다른 분이 만든 코드를 수정하면서 단순히 동작하기만 하는 코드가 아닌 읽기 쉬운 코드의 중요성을 체감했습니다.</br><br/>
        또, 개발 도구 자동화나 CI/CD가 생산성에 미치는 영향을 보면서 DevOps 직군에 대한 관심이 생겼습니다.
        `,
        participants: 3,
        image: springfeed,

        primaryFeatures: [],
        difficulties: [
            '소통 : 더 나은 방법이 있어도, 효과적으로 소통하는 방법을 몰라 말하지 못 한적이 있었다',
        ],

        url: `${portfolioUrl}/springfeed`,
        githubLink: 'https://github.com/kxmjxnjoo/springfeed',
        siteLink: 'http://springfeed.jinkyumpark.com',

        technologiesUsed: [2, 3, 6, 8],

        db: {
            erDiagram: springfeedErDiagram,
            used: [60],
            query: '',
        },

        challenges: [],
    },
];
