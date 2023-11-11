import Technology from "../model/Technology";
import TechnologyCategory from "../model/TechnologyCategory";

import swiftui from '../images/technology/app/swiftui.png'

import jpa from '../images/technology/backend/jpa.png'
import spring from '../images/technology/backend/spring.png'
import springCloud from '../images/technology/backend/spring.png'
import springSecurity from '../images/technology/backend/spring-security.png'

import mysql from '../images/technology/db/mysql.png'
import oracle from '../images/technology/db/oracle-db.png'
import redis from '../images/technology/db/redis.png'
import postgres from '../images/technology/db/postgres.png'

import docker from '../images/technology/devops/docker.png'
import git from '../images/technology/devops/git.png'
import github from '../images/technology/devops/github.png'
import junit from '../images/technology/devops/junit.png'
import k8s from '../images/technology/devops/k8s.png'
import linux from '../images/technology/devops/linux.png'
import maven from '../images/technology/devops/maven.png'
import gradle from '../images/technology/devops/gradle.png'

import bootstrap from '../images/technology/frontend/bootstrap.png'
import css from '../images/technology/frontend/css.png'
import html from '../images/technology/frontend/html.png'
import jquery from '../images/technology/frontend/jquery.png'
import js from '../images/technology/frontend/js.png'
import reactjs from '../images/technology/frontend/reactjs.png'
import redux from '../images/technology/frontend/redux.png'

import java from '../images/technology/language/java.png'
import kotlin from '../images/technology/language/kotlin.png'
import node from '../images/technology/language/node.png'
import python from '../images/technology/language/python.png'

import intellij from '../images/technology/tools/intellij.png'
import vim from '../images/technology/tools/vim.png'
import vscode from '../images/technology/tools/vscode.png'

import swift from '../images/technology/language/swift.png'
import cloudkit from '../images/technology/app/cloudkit.png'
import xcodeCloud from '../images/technology/app/xcodecloud.png'
import coreData from '../images/technology/app/coredata.png'
import swiftData from '../images/technology/app/swiftdata.png'
import swiftCharts from '../images/technology/app/swiftcharts.png'

const technologyList: Technology[] = [
	{
		id: 'coredata',
		name: 'Core Data',
		icon: coreData,
		category: TechnologyCategory.MOBILE,
	},
	{
		id: 'xcodecloud',
		name: 'Xcode Cloud',
		icon: xcodeCloud,
		category: TechnologyCategory.MOBILE,
	},
	{
		id: 'swiftdata',
		name: 'Swift Data',
		icon: swiftData,
		category: TechnologyCategory.MOBILE,
	},
	{
		id: 'swiftcharts',
		name: 'Swift Charts',
		icon: swiftCharts,
		category: TechnologyCategory.MOBILE,
	},
	{
		id: 'swift',
		name: 'Swift',
		icon: swift,
		category: TechnologyCategory.MOBILE,
	},
	{
		id: 'cloudkit',
		name: 'CloudKit',
		icon: cloudkit,
		category: TechnologyCategory.MOBILE,
	},
	{
		id: 'swiftui',
		name: 'Swift UI',
		icon: swiftui,
		category: TechnologyCategory.MOBILE,
	},
	{
		id: 'jpa',
		name: 'JPA',
		icon: jpa,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'spring',
		name: 'Spring',
		icon: spring,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'springcloud',
		name: 'Spring Cloud',
		icon: springCloud,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'springsecurity',
		name: 'Spring Security',
		icon: springSecurity,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'mysql',
		name: 'MySQL',
		icon: mysql,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'postgres',
		name: 'Postgres',
		icon: postgres,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'oracledb',
		name: 'Oracle DB',
		icon: oracle,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'redis',
		name: 'Redis',
		icon: redis,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'docker',
		name: 'Docker',
		icon: docker,
		category: TechnologyCategory.DEVOPS,
	},
	{
		id: 'git',
		name: 'Git',
		icon: git,
		category: TechnologyCategory.DEVOPS,
	},
	{
		id: 'github',
		name: 'Github',
		icon: github,
		category: TechnologyCategory.DEVOPS,
	},
	{
		id: 'junit',
		name: 'JUnit',
		icon: junit,
		category: TechnologyCategory.BACKEND,
	},
	{
		id: 'k8s',
		name: 'K8S',
		icon: k8s,
		category: TechnologyCategory.DEVOPS,
	},
	{
		id: 'linux',
		name: 'Linux',
		icon: linux,
		category: TechnologyCategory.DEVOPS,
	},
	{
		id: 'maven',
		name: 'Maven',
		icon: maven,
		category: TechnologyCategory.DEVOPS,
	},
	{
		id: 'gradle',
		name: 'Gradle',
		icon: gradle,
		category: TechnologyCategory.DEVOPS,
	},
	{
		id: 'bootstrap',
		name: 'Bootstrap',
		icon: bootstrap,
		category: TechnologyCategory.FRONTEND,
	},
	{
		id: 'css',
		name: 'Css',
		icon: css,
		category: TechnologyCategory.FRONTEND,
	},
	{
		id: 'html',
		name: 'Html',
		icon: html,
		category: TechnologyCategory.FRONTEND,
	},
	{
		id: 'jquery',
		name: 'jQuery',
		icon: jquery,
		category: TechnologyCategory.FRONTEND,
	},
	{
		id: 'js',
		name: 'JS',
		icon: js,
		category: TechnologyCategory.FRONTEND,
	},
	{
		id: 'react',
		name: 'React',
		icon: reactjs,
		category: TechnologyCategory.FRONTEND,
	},
	{
		id: 'redux',
		name: 'Redux',
		icon: redux,
		category: TechnologyCategory.FRONTEND,
	},
	{
		id: 'java',
		name: 'Java',
		icon: java,
		category: TechnologyCategory.LANGUAGE,
	},
	{
		id: 'kotlin',
		name: 'Kotlin',
		icon: kotlin,
		category: TechnologyCategory.LANGUAGE,
	},
	{
		id: 'node',
		name: 'Node',
		icon: node,
		category: TechnologyCategory.LANGUAGE,
	},
	{
		id: 'python',
		name: 'Python',
		icon: python,
		category: TechnologyCategory.LANGUAGE,
	},
	{
		id: 'intellij',
		name: 'IntelliJ',
		icon: intellij,
		category: TechnologyCategory.TOOLS,
	},
	{
		id: 'vim',
		name: 'Vim',
		icon: vim,
		category: TechnologyCategory.LANGUAGE,
	},
	{
		id: 'vscode',
		name: 'VS Code',
		icon: vscode,
		category: TechnologyCategory.LANGUAGE,
	},
]

const TechnologyData = {
    get: (id: string) => {
        const candidate = technologyList.filter((technology) => technology.id === id.toLowerCase())

        if (candidate.length === 0) {
            return null
        }

        return candidate[0]
    },
    default: {
        id: '',
        name: '',
        icon: '',
        category: TechnologyCategory.BACKEND
    }
}

export default TechnologyData