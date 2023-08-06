import PortfolioStatus from "../model/PortfolioStatus";

const PORTFOLIO_STATUS_COLOR = new Map([
    [PortfolioStatus.PLANNED, 'RGB(157, 26, 26)'],
    [PortfolioStatus.GIVE_UP, 'RGB(157, 26, 26)'],

    [PortfolioStatus.STARTED, ' RGB(188, 157, 26)'],
    
    [PortfolioStatus.RELEASED, 'RGB(188, 157, 26)'],
    [PortfolioStatus.PRODUCTION, 'RGB(26, 157, 61)'],
])

const PORTFOLIO_STATUS_LABEL = new Map([
	[PortfolioStatus.PLANNED, '준비중'],
	[PortfolioStatus.STARTED, '개발중'],
	[PortfolioStatus.GIVE_UP, '개발중지'],
	[PortfolioStatus.RELEASED, '베포됨'],
	[PortfolioStatus.PRODUCTION, '출시됨'],
])

export { PORTFOLIO_STATUS_COLOR, PORTFOLIO_STATUS_LABEL }
