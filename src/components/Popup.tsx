import { popUpProps } from "../interfaces";

const Popup: React.FC<popUpProps> = ({ message, onClose }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ">
        <div className="bg-white p-6 rounded shadow-lg w-[500px] h-[200px] flex flex-col justify-center items-center">
            <p className="mb-4">{message}</p>
            <button
                className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);
export default Popup;