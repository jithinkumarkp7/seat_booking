import React, { useState } from "react";
import { SummaryProps } from "../interfaces";
import Popup from "./Popup";

const Summary: React.FC<SummaryProps> = ({ selectedSeats }) => {
    const [showPopup, setShowPopup] = useState(false);

    const totalCost = selectedSeats.reduce((sum, seat) => {
        const price = seat.startsWith("A") || seat.startsWith("B")
            ? 100
            : seat.startsWith("C") || seat.startsWith("D")
                ? 150
                : 200;
        return sum + price;
    }, 0);

    const handleBooking = () => {
        setShowPopup(true);
    };

    return (
        <div className="p-4 rounded bg-white shadow-md">
            <h2 className="text-lg font-bold mb-4">Booking Summary</h2>
            <div>
                <p className="text-gray-600">
                    Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(", ") : "0"}
                </p>
                <p className="text-gray-600">Total Cost: ₹{totalCost}</p>
            </div>
            {selectedSeats.length > 0 && (
                <button
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={handleBooking}
                >
                    Book Now
                </button>
            )}
            {showPopup && <Popup message="Booking Confirmed!" onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default Summary;
