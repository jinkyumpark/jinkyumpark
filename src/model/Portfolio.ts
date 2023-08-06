import PortfolioStatus from "./PortfolioStatus"

interface Portfolio {
    id: number
    status: PortfolioStatus
    name: PortfolioName
    icon: string
    link: PortfolioLink[]

    thumbnailImage: string

    description: PortfolioDescription
    features: string[]
    demoImages: string[]

    technologyUsed: string[]
    challenges: string[]
    participants: PortfolioParticipant[]

    developmentStartDate?: Date
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

export default Portfolio