import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const AllToys = () => {
    // const [toys] = useAllToys();
    const [alltoys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");
   
    // console.log(toys);

    useEffect(() => {
        fetch('https://assignment-11-server-iota-five.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllToys(data);
            })
    }, [])

    const handleSearch = () => {
        if(!searchText){
            return;
        }
        fetch(`https://assignment-11-server-iota-five.vercel.app/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllToys(data);
            });
    };


    return (
        <>
            <Helmet>
                <title>ToyVerse | All Toys</title>
            </Helmet>
            <div className="pt-28 flex items-center justify-center gap-5">
               <div>
               <input onChange={(e) => setSearchText(e.target.value)}
                    type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs pb-2" />
             
               </div>
                <button onClick={handleSearch}
                    className="bg-1 hover:bg-[#c05077] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Search
                </button>
            </div>
            <div className="overflow-x-auto pt-10 my-container mb-20">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alltoys.map((toy, index) => <tr
                            key={toy._id}
                        >
                            <th>
                                {
                                    index + 1
                                }
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={toy?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {toy.seller_name}
                            </td>
                            <td>
                                {
                                    toy.name
                                }
                            </td>
                            <td>
                                {
                                    toy.category
                                }
                            </td>
                            <td className="">
                                {
                                    toy.price
                                }
                            </td>
                            <td>
                                {
                                    toy.quantity
                                }
                            </td>

                            <td>
                                <Link to={`/toydetails/${toy._id}`}>
                                    <button
                                        className="bg-1 hover:bg-[#c05077] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        View Details
                                    </button>
                                </Link>

                            </td>


                        </tr>)}

                    </tbody>


                </table>
            </div>
        </>
    );
};

export default AllToys;