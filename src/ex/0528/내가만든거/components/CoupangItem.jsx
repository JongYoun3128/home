import { Link } from "react-router";
import { FaTrash } from "react-icons/fa";
import './styles/style.css'

function CoupangItem({id, title, price, category,onDelete,image,star}) {
    return (
    <Link
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 relative"
                to={`/canvases/${id}`}
                >
                <div className="p-6">
                    <p className="flex justify-center mb-3">
                        {image}
                    </p>
                    <h2 className="text-xl font-bold h-13 mb-2 text-gray-800">
                    {title}
                    </h2>
                    <p className="text-base text-gray-600 mb-4">
                    가격 : {price}
                    </p>
                    <p className="text-yellow-400 text-center mb-4">
                        {star}
                    </p>
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${category === '로켓배송' ? 'bg-sky-600 text-white' : 'bg-green-500 text-white' }`}>
                    {category}
                    </span>
                </div>
                    <button
                    onClick={onDelete}
                        aria-label="Delete"
                        className="absolute top-7 right-7  text-gray-400 rounded-full"
                    >
                        <FaTrash className="trash" />
                    </button>
                </Link>
    );
}

export default CoupangItem;