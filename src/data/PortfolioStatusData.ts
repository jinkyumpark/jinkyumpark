import ProductStatus from "../model/ProductStatus";

const PORTFOLIO_STATUS_COLOR = new Map([
    [ProductStatus.PLANNED, 'RGB(157, 26, 26)'],
    [ProductStatus.GIVE_UP, 'RGB(157, 26, 26)'],

    [ProductStatus.STARTED, ' RGB(188, 157, 26)'],
    
    [ProductStatus.RELEASED, 'RGB(188, 157, 26)'],
    [ProductStatus.PRODUCTION, 'RGB(26, 157, 61)'],
])

const PORTFOLIO_STATUS_LABEL = new Map([
	[ProductStatus.PLANNED, '준비중'],
	[ProductStatus.STARTED, '개발중'],
	[ProductStatus.GIVE_UP, '개발중지'],
	[ProductStatus.RELEASED, '베포됨'],
	[ProductStatus.PRODUCTION, '출시됨'],
])

export { PORTFOLIO_STATUS_COLOR, PORTFOLIO_STATUS_LABEL }
