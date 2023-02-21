import {GetListOfVehiclesResponse} from 'types'


export interface MainCardPropInterface {
    title?: string,
    count?: number,
    color?: string,
    direction?: string,
    spacing?: string | number,
    variant?: string,
    description?: string,
    chipColor?: string,
    icon?: any,
}

export interface BasicInfoStackInterface {
    title?: string,
    description?: string | number,
    icon?: any,
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface VehicleListProps {
    vehicles: GetListOfVehiclesResponse;
    onVehiclesChange: () => void
}