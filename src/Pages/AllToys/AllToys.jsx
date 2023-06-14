import { Helmet } from "react-helmet-async";
import useAllToys from "../../Hooks/useAllToys";

const AllToys = () => {
    const [toys] = useAllToys();
    console.log(toys);
    return (
        <>
            <Helmet>
                <title>ToyVerse | All Toys</title>
            </Helmet>
            <div className="overflow-x-auto pt-28 my-container">
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
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => <tr
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
                               k
                            </td>
                          
                            
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </>
    );
};

export default AllToys;