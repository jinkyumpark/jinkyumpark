import ProductStatus from "./ProductStatus"
import Technology from "./Technology";

interface Product {
    id: number
    status: ProductStatus
    name: ProductName
    icon: string
    link: ProductLink[]

    thumbnailImage: string
    detailImage: string

    description: ProductDescription
    features: string[]
    demoImages: string[]

    technologyUsed: Technology[]
    challenges: string[]
    participants: ProductParticipant[]

    developmentStartDate?: Date

    db: ProductDb

    explanations: string[]
}

interface ProductName {
    korean: string
    english: string
    url: string
}

interface ProductDescription {
    short: string
    medium: string
    long: string
}

interface ProductLink {
    link: string
    icon: any
    border: boolean
}

interface ProductParticipant {
    name: string
    url: string
    position: string
}

interface ProductDb {
    images: string[]
    explanations: string[]
}

export default Product