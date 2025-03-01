export interface SeatProps {
    seatId: string;
    isSelected: boolean;
    onSelect: (seatId: string) => void;
    color?: string;
}
export interface SeatGridProps {
    selectedSeats: string[];
    onSelect: (seatId: string) => void;
}
export interface SeatPrice {
    price: number;
    label: string;
    color?: string
}
export interface SummaryProps {
    selectedSeats: string[];
}

export interface popUpProps {
    message: string;
    onClose: () => void;
}