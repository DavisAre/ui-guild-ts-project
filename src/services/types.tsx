
interface Items {
    country: [string],
    dataProvider: [string],
    edmPreview: [string],
    edmIsShownBy: [string],
    timestamp: number,
    title: [string]
}

export interface ApiResponse {
    success: boolean,
    itemsCount: number,
    items: [Items]
}