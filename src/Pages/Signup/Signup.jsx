import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(() => {

                // const user = result.user;
                // console.log(user);
                updateUserProfile(data.name, data.PhotoUrl)
                    .then(() => {
                        reset();
                        toast.success('Logged in successfully', {
                            duration: 1500,
                            style: {
                                background: '#F8E8EE',
                                fontWeight: '700'
                            },
                        });
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error.message);
            });
    };


    return (
        <>
        <Helmet>
            <title>ToyVerse | Sign Up</title>
        </Helmet>
            <div className="pt-28 pb-10">
                <div className="w-full px-2 lg:p-0 lg:w-96 mx-auto border-4 rounded-lg">

                    <SocialLogin></SocialLogin>
                    <div className="divider px-3">OR</div>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-75 shadow-lg">
                        <div className="px-8 pt-6 pb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Name
                                </label>
                                <input
                                    {...register('name', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your Name"

                                />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input {...register('email', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"

                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>

                            {/* passoword field */}
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <div className="flex">
                                    <input
                                        {...register('password',
                                            {
                                                required: true,
                                                minLength: 6,
                                            }
                                        )}

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"

                                    />

                                </div>
                                {errors.password?.type === 'required' && <p className="text-red-500">Password is requied</p>}
                                {
                                    errors.password?.type === 'minLength' && <p className="text-red-500">Password should be minimum six length</p>
                                }


                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Photo URL
                                </label>
                                <input
                                    {...register('PhotoUrl', { required: true })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    id="photo"
                                    type="text"
                                    placeholder="Enter Photo URL"

                                />
                                {errors.PhotoUrl && <span className="text-red-500">PhotoURL is required</span>}
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-1 hover:bg-[#c05077] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <p className="ml-8 pb-7 pt-2">Already have and account? <Link to='/login'><span className="text-1 hover:text-blue-500">Login</span></Link></p>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Signup;