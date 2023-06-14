import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddToys = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        const { name, image, price, quantity, rating, details, category} =data;
        const newToy = { name, image, price, quantity, rating, category, details, seller_name: user?.displayName, seller_email: user?.email };
        console.log(newToy);

        fetch('http://localhost:5000/toys/', {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy),
            
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                reset();
                toast.success('Added successfully', {
                    duration: 1500,
                    style: {
                        background: '#F8E8EE',
                        fontWeight: '700'
                    },
                });
            }
        })
    };
    return (
      <>
      <Helmet>
        <title>ToyVerse | AddToys</title>
      </Helmet>
        <div className="px-8 pt-28 font-Poppins my-container bg-pink-50">
            <div className="border-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-75 shadow-lg">

                    <div className="px-8 pt-6 pb-4 mb-2">

                        <div className="flex items-center gap-4">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Toy Name
                                </label>
                                <input
                                    {...register('name', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="text"
                                    placeholder="Enter Toy Name"
                                />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>

                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                    Image
                                </label>

                                <input
                                    {...register('image', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="text"
                                    placeholder="Enter Toy ImageURL"
                                />
                                {errors.image && <span className="text-red-500">Image URL is required</span>}
                            </div>
                        </div>

                        <div className="flex gap-4 mb-2">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sname">
                                    Seller Name
                                </label>
                                <input
                                    // {...register('instructor_name')}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="text"
                                    defaultValue={user?.displayName}
                                    // readOnly
                                    disabled
                                />

                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semail">
                                    Seller Email
                                </label>
                                <input
                                    // {...register('instructor_email')}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="email"
                                    defaultValue={user?.email}
                                    // readOnly
                                    disabled

                                />

                            </div>
                        </div>

                        <div className="flex gap-4 mb-2">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                    Sub-category
                                </label>
                                <input
                                    {...register('category', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="text"
                                    placeholder="Sub-category of the Toy"

                                />
                                {errors.category && <span className="text-red-500">Required</span>}
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    Price
                                </label>
                                <input {...register('price', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="number"
                                    placeholder="Enter Price"

                                />
                                {errors.price && <span className="text-red-500">Required</span>}
                            </div>
                        </div>

                        <div className="flex gap-4 mb-2">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                    Rating
                                </label>
                                <input
                                    {...register('rating', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="number"
                                    placeholder="Enter toy rating"
                                />
                                {errors.rating && <span className="text-red-500">Required</span>}
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                    Quantity
                                </label>
                                <input
                                    {...register('quantity', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="number"
                                    placeholder="Enter Toy Quantity"
                                />
                                {errors.quantity && <span className="text-red-500">Required</span>}
                            </div>
                        </div>

                        <div className="mb-7">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                Detail Description
                            </label>
                            <textarea {...register('details', { required: true })}
                            className="textarea textarea-bordered w-full" placeholder="Detail Description"></textarea>
                             {errors.details && <span className="text-red-500">Required</span>}
                        </div>


                        {/* add button */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-1 hover:bg-[#b45274] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-white"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </div>


                </form>

            </div>
        </div>
      </>
    );
};

export default AddToys;