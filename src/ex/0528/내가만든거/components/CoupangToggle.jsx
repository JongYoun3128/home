import { FaList,FaTh } from "react-icons/fa";

function CoupangToggle({setIsGridView,isGridView}) {
    return (
        <div className="flex space-x-2">
                    <button
                    onClick={() => setIsGridView(true)}
                    className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${isGridView ? 'bg-blue-300 text-white' : 'bg-gray-200'}`}
                    aria-label="Grid View"
                    >
                    <FaTh />
                </button>
                <button
                    onClick={() => setIsGridView(false)}
                    className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${!isGridView ? 'bg-blue-300 text-white' : 'bg-gray-200'}`}
                    aria-label="List View"
                    >
                    <FaList />
                </button>
                </div>
);
}

export default CoupangToggle;