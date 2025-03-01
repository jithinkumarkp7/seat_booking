import { SeatGridProps, SeatPrice } from "../interfaces";
import Seat from "./Seat";

const seatPrices: Record<string, SeatPrice> = {
    A: { price: 200, label: "Platinum", color: "bg-[#FAFAFA] border border-[#E6759E] text-[#E6759E]" },
    B: { price: 200, label: "Platinum", color: "bg-[#FAFAFA] border border-[#E6759E] text-[#E6759E]" },
    C: { price: 150, label: "Gold", color: "bg-[#FAFAFA] border border-[#FC9F1B] text-[#FC9F1B]" },
    D: { price: 150, label: "Gold", color: "bg-[#FAFAFA] border border-[#FC9F1B] text-[#FC9F1B]" },
    E: { price: 100, label: "Silver", color: "bg-[#FAFAFA] border border-[#616C7B] text-[#616C7B]" },
    F: { price: 100, label: "Silver", color: "bg-[#FAFAFA] border border-[#616C7B] text-[#616C7B]" },
};

const SeatGrid: React.FC<SeatGridProps> = ({ selectedSeats, onSelect }) => {
    const rowGroups = [
        { rows: ["A", "B"], label: "Platinum", price: 200 },
        { rows: ["C", "D"], label: "Gold", price: 150 },
        { rows: ["E", "F"], label: "Silver", price: 100 },
    ];
    const columns = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className="space-y-6 p-8 rounded bg-white shadow-md">
            {rowGroups.map(({ rows, label, price }) => (
                <div key={label}>
                    <div className="text-sm mb-2 text-left">
                        {`${rows.join(",")} - ${label} - ₹${price}`}
                    </div>
                    {rows.map((row) => (
                        <div key={row} className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 mb-4">
                            {columns.map((col) => {
                                const seatId = `${row}${col}`;
                                return (
                                    <Seat
                                        seatId={seatId}
                                        isSelected={selectedSeats.includes(seatId)}
                                        onSelect={onSelect}
                                        color={seatPrices[row]?.color}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SeatGrid;