import { Rating } from "@smastrom/react-rating";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'



const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    const {  details, image, name, price, quantity, rating, seller_email, seller_name } = toy;
    return (
        <>
            <Helmet>
                <title>ToyVerse | Toy Details</title>
            </Helmet>


            <div className="pt-24 my-container lg:flex gap-10 pb-20">
                <div className="w-1/2">
                    <img src={image} className="object-cover object-center rounded" alt="" />
                </div>
                <div className="space-y-5 flex flex-col justify-center">
                    <h1 className="text-6xl font-bold font-serif pt-4">{name}</h1>
                    <p className="pb-3 font-mono">{details}</p>
                    <div className="flex gap-5 items-center pb-3">
                        <div>
                            <span className="text-2xl font-bold text-white bg-1 px-5 py-2 rounded-full">${price}</span>
                        </div>
                        <div>
                            <p className="pb-1"><span className="font-semibold">Seller:</span> {seller_name}</p>
                            <p><span className="font-semibold">Seller Email:</span> {seller_email}</p>
                        </div>
                    </div>

                    <div>
                        <p className="pb-2"><span className="font-extrabold">Available Quantity:</span> {quantity}</p>
                        <div className="flex items-center gap-2">
                            <p><span className="font-semibold">Rating:</span>  </p>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToyDetails;