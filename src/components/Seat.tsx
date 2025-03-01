import { SeatProps } from "../interfaces";

const Seat: React.FC<SeatProps> = ({ seatId = '', isSelected = false, onSelect = () => { }, color = '' }) => (
    <div
        onClick={() => onSelect(seatId)}
        className={`cursor-pointer w-12 h-12 flex items-center justify-center rounded-md  
                ${isSelected ? "bg-green-500 text-white" : `${color}`
            }`}
    >
        {seatId}
    </div>
);

export default Seat;
