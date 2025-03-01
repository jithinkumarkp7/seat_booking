import { useState } from "react";
import SeatGrid from "../components/SeatGrid";
import Summary from "../components/Summary";
import Popup from "../components/Popup";


const Home: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectSeat = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      if (selectedSeats.length >= 8) {
        setShowPopup(true);
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-bold mb-6 text-gray-600">
        Seat Booking System
      </h1>
      <div className="flex flex-col gap-10">
        <SeatGrid selectedSeats={selectedSeats} onSelect={handleSelectSeat} />
        <Summary selectedSeats={selectedSeats} />
      </div>
      {showPopup && <Popup message="You can only select up to 8 seats" onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Home;
