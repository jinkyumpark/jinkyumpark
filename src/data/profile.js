import profileImage from '../images/main-profile.jpg';

export const profile = {
    koreanName: '박진겸',
    englishName: 'Jinkyum Park',
    image: profileImage,
    birthDate: '1999년 10월 25일',
    address: '서울특별시 영등포구',
    phone: '-',
    email: 'jinpark1025@gmail.com',
    university: '뉴욕주립대 스토니브룩 수학과 휴학 (4학년)',
    education: '국비지원학원 자바 웹개발자 과정수료 (7개월)',

    title: `확장성과 Clean Code를 중요시하는 서버 개발자, 박진겸입니다`,
    summary: `
    기술을 단순히 피상적으로 사용하지 않고 원리를 이해하는걸 좋아합니다.
    기초를 중요하게 생각해 많은 기술 서적과 유튜브에서 제공하는 강의들을 틈틈히 공부합니다.
    항상 어떻게 하면 더 읽기 쉬운 코드를 쓸 수 있을까 고민하고 습관적으로 refactoring합니다.
    `,
    experience: [
        {
            id: 1,
            startDate: '21년 2월',
            endDate: '21년 12월',
            name: '🧑‍🏫 영어 학원 교사',
            descriptions: [
                '운정 큐이엠 학원에 학원 설립 직후 중학생 교사로 참여',
                '문법, 독해 수업 진행',
                '학부모 상담, 홍보 보조 등 여러가지 직무도 적극 참여함',
            ],
        },
        {
            id: 2,
            startDate: '19년 10월',
            endDate: '19년 12월',
            name: '🏫 대학교 수학 Tutor',
            descriptions: [
                'Calculus 1, 2 수강생 대상으로 Tutoring 진행',
                '특정 시간에 학생들이 자유롭게 예약해 방문가능',
                '질문에 답해주거나, Assignments에 도움 제공',
            ],
        },
    ],
    language: [
        {
            id: 1,
            name: '🇺🇸 영어',
            score: 'TOEIC 970',
            reading: '독서 많이 해(22년 기준 78권) 수준급',
            writing: '미국 대학 3년 재학 중 리포트 작성 경험 많아 자유로움',
            talking: '의사소통 자유로움',
        },
        {
            id: 2,
            name: '🇯🇵 일본어',
            score: 'JLPT N1',
            reading: '독서 많이 해(22년 기준 44권) 수준급',
            writing: '취미로 일기와 에세이 쓰고 있으나 부족함',
            talking: '특정 전문분야가 아니라면 어느정도 자유로움',
        },
        {
            id: 3,
            name: '🇨🇳 중국어',
            score: 'HSK 3급 (기간 만료)',
            reading: '-',
            writing: '-',
            talking: '일상회화 가능',
        },
    ],
    introductions: [
        `Java Spring Framework를 바탕으로 확장성 좋은 웹 서비스를 설계하기 위해 좋은 Architecutre를 설계할 수 있습니다. 
        <br/><br/>
        Testing 작성을 중요시 합니다. Mocking Library를 사용한 dependency 없는 Unit Test와, Integration Test를 CI/CD에 점목해 본 경험이 있습니다.`,

        `기술의 본질은 문제를 해결하는 것이라 믿습니다. 
        그래서 기술스택에 추가하기만을 위해 필요없는 기술을 억지로 쓰려고 하지는 않았습니다. 
        <br/><br/>
        대신, 프로젝트를 진행하면서 마주치는 현실적인 고민들(유지보수, 자동화)을 깊게 고민했고, 그러다 보니 자연스럽게 고가용성과 확장성이 좋은 설계에 관심이 생겼고, 이를 해결하고자 하는 기술에 대한 이해도 깊어졌습니다.`,

        `기초를 중요하게 생각하고 수학 전공이라 그런지 
        컴퓨터의 이론적 측면에 관심이 많습니다.
        <br/> <br/> 
        반드시 직무와 관련되지 않더라도 여러 컴퓨터 과학 대학 강의를 유튜브에서 보거나 책을 읽는 것을 좋아합니다.`,

        `Clean Code에 진심입니다. 
        <br/><br/>
        읽기 쉽고 이해하기 쉬운 코드를 쓰기 위해 Refactoring을 습관적으로 하고 공식문서를 틈틈히 읽습니다.`,

        `Apple 제품을 경험하고 좋은 UI/UX가 단순히 치장이 아니라 제품의 핵심 가치가 될 수 있고,
        사용자를 팬으로 만들 수 있음에 충격을 받았습니다.
        <br/><br/>
        Apple, 비바리퍼블리카, 우아한형제들 같은 회사의 UI/UX를 사랑하고 알고싶어 WWDC, Simplicity(토스의 디자인 컨퍼런스), 우아한 테크 컨퍼런스를 항상 챙겨 봅니다.`,
    ],
};
