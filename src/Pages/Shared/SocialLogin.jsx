import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                // const loggedUser = result.user;
                // console.log(loggedUser.photoURL);

                toast.success('Singed up successfully', {
                    duration: 3000,
                    style: {
                        background: '#F8E8EE',
                        fontWeight: '700'
                    },
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);

            })
    }
    return (
        <div>
            <div className="pt-7 pb-4 text-center">
                <button type="button" onClick={handleGoogleSignIn} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="flex items-center justify-center gap-10 pr-10">
                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className=" w-5" alt="google logo" />
                        <p className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;