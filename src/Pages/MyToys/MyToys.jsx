import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const MyToys = () => {
    const [userToys, setUserToys] = useState([]);
    const [sortOption, setSortOption] = useState('Ascending');
    const [control, setControl] = useState(false);
   const { user } = useAuth();

    useEffect(() => {
        fetch(`https://assignment-11-server-iota-five.vercel.app/mytoys/${user?.email}?toSort=${sortOption}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUserToys(data);
          });
      }, [sortOption, user?.email, control]);



    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
        
      };

    const handleDelete = toy => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-iota-five.vercel.app/mytoys/${toy._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            // refetch()
                            setControl(!control);
                            toast.success('Deleted successfully', {
                                duration: 1500,
                                style: {
                                    background: '#F8E8EE',
                                    fontWeight: '700'
                                },
                            });
                        }
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>ToyVerse | My Toys</title>
            </Helmet>
            <div className="pt-28 text-end my-container">
                <select defaultValue="Sort" onChange={handleSortChange}  className="select select-secondary w-full max-w-xs">
                    <option disabled value="Sort">Sort</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                    
                </select>
            </div>
            <div className="overflow-x-auto pt-10 my-container pb-20">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Available Quantity</th>
                            <th>Description</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userToys.map((toy, index) => <tr
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
                                {toy.name}
                            </td>
                            <td>
                                {
                                    toy.price
                                }
                            </td>
                            <td>
                                {
                                    toy.category
                                }
                            </td>
                            <td className="">
                                {
                                    toy.quantity
                                }
                            </td>
                            <td>
                                {
                                    toy.details
                                }
                            </td>
                            <td>
                                {
                                    <Link to={`/updatetoys/${toy._id}`}>
                                        <button className="btn btn-outline btn-sm btn-primary">Update</button>
                                    </Link>
                                }
                            </td>
                            <td>
                                {
                                    <button onClick={() => handleDelete(toy)} className="btn btn-error btn-sm bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                }
                            </td>
                        </tr>)}

                    </tbody>


                </table>
            </div>
        </>
    );
};

export default MyToys;