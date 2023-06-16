import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateToys = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const toy = useLoaderData();
    const navigate = useNavigate();
    // console.log(toy.price);


    const onSubmit = data => {
        // console.log(data);

        const { price, quantity, details} = data;
        const updatedToy = {price, quantity, details};

        fetch(`https://assignment-11-server-iota-five.vercel.app/toys/${toy._id}`, {
            method: "PATCH",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedToy),
            
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                reset();
                toast.success('Updated successfully', {
                    duration: 1500,
                    style: {
                        background: '#F8E8EE',
                        fontWeight: '700'
                    },
                });
                navigate('/mytoys');
            }
        })
       
    };



    return (
        <div className="px-8 pt-28 font-Poppins my-container bg-pink-50 pb-16">
            <div className="border-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-75 shadow-lg">

                    <div className="px-8 pt-6 pb-4 mb-2">

                       
                        <div className="flex gap-4 mb-2">
                            
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    Price
                                </label>
                                <input {...register('price', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="number"
                                    defaultValue={toy.price}

                                />
                                {errors.price && <span className="text-red-500">Required</span>}
                            </div>

                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                    Quantity
                                </label>
                                <input
                                    {...register('quantity', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    type="number"
                                    defaultValue={toy.quantity}
                                />
                                {errors.quantity && <span className="text-red-500">Required</span>}
                            </div>
                        </div>

                        <div className="mb-7">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                                Detail Description
                            </label>
                            <textarea {...register('details', { required: true })}
                                className="textarea textarea-bordered w-full" defaultValue={toy.details}></textarea>
                            {errors.details && <span className="text-red-500">Required</span>}
                        </div>


                        {/* add button */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-1 hover:bg-[#b45274] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-white"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default UpdateToys;