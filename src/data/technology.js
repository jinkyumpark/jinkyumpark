// Language
import javaIcon from '../images/technology/language/java.png';
import kotlinIcon from '../images/technology/language/kotlin.png';
// Front
import reactIcon from '../images/technology/frontend/reactjs.png';
import bootstrapIcon from '../images/technology/frontend/bootstrap.png';
import jqueryIcon from '../images/technology/frontend/jquery.ico';
// Backend
import springIcon from '../images/technology/backend/spring.png';
import jpaIcon from '../images/technology/backend/jpa.png';
import springSecurityIcon from '../images/technology/backend/spring-security.png';
import springCloudIcon from '../images/technology/backend/spring-cloud.png';
// DevOps
import dockerIcon from '../images/technology/devops/docker.png';
import k8sIcon from '../images/technology/devops/k8s.png';
import junit5Icon from '../images/technology/devops/junit.png';
import gitIcon from '../images/technology/devops/git.png';
import awsIcon from '../images/technology/devops/aws.jpeg';
// App
import swiftuiIcon from '../images/technology/app/swiftui.png';
// Tools
import vimIcon from '../images/technology/tools/vim.png';
import intellijIcon from '../images/technology/tools/intellij.png';
// Db
import mysqlIcon from '../images/technology/db/mysql.png';
import oracleIcon from '../images/technology/db/oracle.png';
import postgresIcon from '../images/technology/db/postgres.png';
import redisIcon from '../images/technology/db/redis.png';

export const technologies = {
    // 1-9
    language: [
        {
            id: 1,
            icon: javaIcon,
            name: 'Java',
            category: 'language',
            features: [
                'Stream을 활용한 함수형 프로그래밍',
                'Collection API와 그 내장함수를 적절하게 활용한 효율적이고 읽기 쉬운 알고리즘 설계',
                'GC 특정을 고려한 메모리 관리',
            ],
            featured: true,
            blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/Java',
        },
        {
            id: 2,
            icon: kotlinIcon,
            name: 'Kotlin',
            category: 'language',
            features: [],
            featured: true,
            blogUrl: '',
        },
    ],
    // 10-19
    front: [
        {
            id: 9,
            icon: reactIcon,
            name: 'React',
            category: 'front',
            features: [
                'useState, useEffect, useRef 등의 hook등의 특성을 이해하고 활용',
                'UI를 컴포넌트로 분리하고 hook을 써서 관리',
                'React Router 등의 외부 라이브러리를 활용',
            ],
            featured: false,
            blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/React',
        },
        {
            id: 12,
            icon: bootstrapIcon,
            name: 'Bootstrap',
            category: 'front',
            features: [],
            featured: false,
            blogUrl: '',
        },
        {
            id: 13,
            icon: jqueryIcon,
            name: 'jQuery',
            category: 'language',
            features: [],
            featured: false,
            blogUrl: '',
        },
    ],
    // 20-29
    back: [
        {
            id: 2,
            icon: springIcon,
            name: 'Spring',
            category: 'back',
            features: ['OOP SOLID 원칙을 잘 지킨 REST API 개발'],
            featured: true,
            blogUrl:
                'https://jinkpark.tistory.com/category/프로그래밍/Spring%20Boot',
        },

        {
            id: 3,
            icon: jpaIcon,
            name: 'JPA',
            category: 'back',
            features: ['DB 특성을 고려한 JPA 활용'],
            featured: true,
            blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/JPA',
        },
        {
            id: 4,
            icon: springSecurityIcon,
            name: 'Spring Security',
            category: 'back',
            features: [
                'PasswordEncoder 등을 사용한 Authentication',
                'Authorization',
                'CSRF 등 일반적인 보안위협에 대응',
            ],
            featured: true,
            blogUrl:
                'https://jinkpark.tistory.com/category/프로그래밍/Spring%20Security',
        },
        {
            id: 5,
            icon: springCloudIcon,
            name: 'Spring Cloud',
            category: 'back',
            features: [],
            featured: true,
            blogUrl:
                'https://jinkpark.tistory.com/category/프로그래밍/Spring%20Cloud',
        },
        {
            id: 8,
            icon: junit5Icon,
            name: 'Java Testing',
            category: 'back',
            features: [
                // 'JUnit의 다양한 기능을 활용한 Unit Testing 작성',
                // 'Mockito로 의존성 없는 Unit Test',
                // 'Integration Test',
            ],
            featured: true,
            blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/Testing',
        },
    ],
    //30-39
    devops: [
        {
            id: 6,
            icon: dockerIcon,
            name: 'Docker',
            category: 'devops',
            features: [],
            featured: true,
            blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/Docker',
        },
        {
            id: 7,
            icon: k8sIcon,
            name: 'Kubernetes',
            category: 'devops',
            features: [],
            featured: true,
            blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/K8S',
        },
        {
            id: 11,
            icon: awsIcon,
            name: 'AWS',
            category: 'devops',
            features: [],
            featured: false,
            blogUrl: '',
        },
        {
            id: 10,
            icon: gitIcon,
            name: 'Git',
            category: 'devops',
            features: [
                'Gitflow Branch 전략을 사용해 Branch 관리',
                '다양한 git command의 특성을 알고 활용',
            ],
            featured: false,
            blogUrl: '',
        },
    ],
    //40-49
    tools: [
        {
            id: 15,
            icon: vimIcon,
            name: 'VIM',
            features: [],
            featured: false,
            blogUrl: '',
        },
        {
            id: 16,
            icon: intellijIcon,
            name: 'IntelliJ',
            features: [],
            featured: false,
            blogUrl: '',
        },
    ],
    // 50-59
    apps: [
        {
            id: 14,
            icon: swiftuiIcon,
            name: 'Swift UI',
            features: [],
            featured: false,
            blogUrl: '',
        },
    ],
    // 60-69
    db: [
        {
            id: 60,
            icon: oracleIcon,
            name: 'Oracle DB',
            features: [],
            featured: false,
            blogUrl: '',
        },
        {
            id: 61,
            icon: mysqlIcon,
            name: 'MySQL',
            features: [],
            featured: false,
            blogUrl: '',
        },
        {
            id: 62,
            icon: postgresIcon,
            name: 'Postgres DB',
            features: [],
            featured: false,
            blogUrl: '',
        },
        {
            id: 63,
            icon: redisIcon,
            name: 'Redis',
            features: [],
            featured: false,
            blogUrl: '',
        },
    ],
};
