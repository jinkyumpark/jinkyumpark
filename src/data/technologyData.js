import javaIcon from '../images/technology/java-icon.png';
import springIcon from '../images/technology/spring-icon.png';
import jpaIcon from '../images/technology/jpa-icon.png';
import springSecurityIcon from '../images/technology/spring-security-icon.png';

export const technologies = [
    {
        icon: javaIcon,
        name: 'Java',
        features: [
            'Stream을 활용한 함수형 프로그래밍',
            'Collection API와 그 내장함수를 적절하게 활용한 효율적이고 읽기 쉬운 알고리즘 설계',
            'GC 특정을 고려한 메모리 관리',
        ],
    },
    {
        icon: springIcon,
        name: 'Spring Boot',
        features: ['OOP SOLID 원칙을 잘 지킨 REST API 개발'],
    },
    {
        icon: jpaIcon,
        name: 'JPA',
        features: ['DB 특성을 고려한 JPA 활용'],
    },
    {
        icon: springSecurityIcon,
        name: 'Spring Security',
        features: [
            'PasswordEncoder 등을 사용한 Authentication',
            'Authorization',
            'CSRF 등 일반적인 보안위협에 대응',
        ],
    },
];
