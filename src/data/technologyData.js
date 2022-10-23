import javaIcon from '../images/technology/java-icon.png';
// Spring
import springIcon from '../images/technology/spring-icon.png';
import jpaIcon from '../images/technology/jpa-icon.png';
import springSecurityIcon from '../images/technology/spring-security-icon.png';
import springCloudIcon from '../images/technology/spring-cloud-icon.png';
// DevOps
import dockerIcon from '../images/technology/docker-icon.png';
import k8sIcon from '../images/technology/k8s-icon.png';
import junit5Icon from '../images/technology/junit-icon.png';

export const technologies = [
    {
        icon: javaIcon,
        name: 'Java',
        features: [
            'Stream을 활용한 함수형 프로그래밍',
            'Collection API와 그 내장함수를 적절하게 활용한 효율적이고 읽기 쉬운 알고리즘 설계',
            'GC 특정을 고려한 메모리 관리',
        ],
        featured: true,
        blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/Java',
    },
    {
        icon: springIcon,
        name: 'Spring Boot',
        features: ['OOP SOLID 원칙을 잘 지킨 REST API 개발'],
        featured: true,
        blogUrl:
            'https://jinkpark.tistory.com/category/프로그래밍/Spring%20Boot',
    },
    {
        icon: jpaIcon,
        name: 'JPA',
        features: ['DB 특성을 고려한 JPA 활용'],
        featured: true,
        blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/JPA',
    },
    {
        icon: springSecurityIcon,
        name: 'Spring Security',
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
        icon: springCloudIcon,
        name: 'Spring Cloud',
        features: [],
        featured: true,
        blogUrl:
            'https://jinkpark.tistory.com/category/프로그래밍/Spring%20Cloud',
    },
    {
        icon: dockerIcon,
        name: 'Docker',
        features: [],
        featured: true,
        blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/Docker',
    },
    {
        icon: k8sIcon,
        name: 'Kubernetes',
        features: [],
        featured: true,
        blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/K8S',
    },
    {
        icon: junit5Icon,
        name: 'Java Testing',
        features: [
            'JUnit의 다양한 기능을 활용한 Unit Testing 작성',
            'Mockito로 의존성 없는 Unit Test',
            'Integration Test',
        ],
        featured: true,
        blogUrl: 'https://jinkpark.tistory.com/category/프로그래밍/Testing',
    },
];
