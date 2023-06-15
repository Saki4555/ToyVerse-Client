import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const ToyCard = ({ item }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="toys" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.name}
                    <div className="badge bg-1 text-white">NEW</div>
                </h2>
                <p className="pb-3">If a dog chews shoes whose shoes does he choose?</p>
                <div>
                    <span className="font-medium text-white bg-1 px-4 py-2 rounded-full">${item.price}</span>
                </div>
                <div className="pt-3">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={item.rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-end">
                <Link to={`/toydetails/${item._id}`}>
                                    <button
                                        className="bg-1 hover:bg-[#c05077] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        View Details
                                    </button>
                                </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;