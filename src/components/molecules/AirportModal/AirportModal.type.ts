export interface AirportModalType {
    isVisible?: boolean;
    onClose?: () => void;
    onSelection?: (item: any) => void;
}

export interface AirportItemType {
    item: AirportDataType
}

export interface AirportDataType {
    cityCode: string;
    cityName: string;
    airportName: string;
}