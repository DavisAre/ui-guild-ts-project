
export interface Item {
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
    items: Item[]
}