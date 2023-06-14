import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const { register, handleSubmit, reset, } = useForm();
    const { signIn } = useAuth();
    const [error, setError] = useState("");


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(() => {
                reset();
                setError("");
                toast.success('Logged in successfully', {
                    duration: 1500,
                    style: {
                        background: '#F8E8EE',
                        fontWeight: '700'
                    },
                });

                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setError("Invalid Email or Wrong Password");
            });

    };

    return (
        <>
            <Helmet>
                <title>ToyVerse | Login</title>
            </Helmet>
            <div className="pt-10 pb-10">
                <div className="w-full px-2 lg:p-0 lg:w-96 mx-auto border-4 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white bg-opacity-75 shadow-lg">
                        <SocialLogin></SocialLogin>
                        <div className="divider px-3">OR</div>
                        <div className="px-8 pt-6 pb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    {...register('email')}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"

                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <div className="flex">
                                    <input
                                        {...register('password')}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                        id="password"
                                        type="password"

                                    />

                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <button

                                    className="bg-1 text-white hover:bg-[#bc567a] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        {
                            error && <p className="ml-8 pb-1 pt-2 text-red-500 font-semibold">{error}</p>
                        }
                        <p className="ml-8 pb-7 pt-2">New Here? <Link to='/signup'><span className="text-1 hover:text-blue-500">Create an ToyVerse account</span></Link></p>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Login;