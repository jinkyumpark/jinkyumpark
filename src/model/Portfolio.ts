import PortfolioStatus from "./PortfolioStatus"
import Technology from "./Technology";

interface Portfolio {
    id: number
    status: PortfolioStatus
    name: PortfolioName
    icon: string
    link: PortfolioLink[]

    thumbnailImage: string
    detailImage: string

    description: PortfolioDescription
    features: string[]
    demoImages: string[]

    technologyUsed: Technology[]
    challenges: string[]
    participants: PortfolioParticipant[]

    developmentStartDate?: Date

    db: PortfolioDb

    explanations: string[]
}

interface PortfolioName {
    korean: string
    english: string
    url: string
}

interface PortfolioDescription {
    short: string
    medium: string
    long: string
}

interface PortfolioLink {
    link: string
    icon: any
    border: boolean
}

interface PortfolioParticipant {
    name: string
    url: string
    position: string
}

interface PortfolioDb {
    images: string[]
    explanations: string[]
}

export default Portfolio