import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";


const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logOut } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogOUt = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const navOptions = <>
        <li className="font-medium text-lg tracking-wider lg:text-white"><NavLink to='/' className={({ isActive }) => (isActive ? 'nav-text' : '')}>Home</NavLink></li>

        <li className="font-medium text-lg tracking-wider lg:text-white"><NavLink to='/' className={({ isActive }) => (isActive ? 'nav-text' : '')}>All Toys</NavLink></li>

        {
            user && <li className="font-medium text-lg tracking-wider lg:text-white"><NavLink to='/' className={({ isActive }) => (isActive ? 'nav-text' : '')}>My Toys</NavLink></li>
        }

        {
            user && <li className="font-medium text-lg tracking-wider lg:text-white"><NavLink to='/' className={({ isActive }) => (isActive ? 'nav-text' : '')}>Add A Toy</NavLink></li>

        }

        <li className="font-medium text-lg tracking-wider lg:text-white"><NavLink to='/' className={({ isActive }) => (isActive ? 'nav-text' : '')}>Blogs</NavLink></li>

    </>;

    return (
        <div className={`navbar bg-1 fixed z-10 ${isScrolled ? "opacity-50" : ""}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-sm lg:text-2xl text-white">ToyVerse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navOptions
                    }
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-full" title={user.displayName}>
                                <img src={user?.photoURL} className="object-cover object-center"/>

                            </div>

                        </label>
                        <ul tabIndex={0} className="mt-3 p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="hidden">
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li className="hidden"><a>Settings</a></li>
                            <li>{user?.displayName} <br /> {user.email}</li>
                            <div className="divider pt-0"></div>
                            <button onClick={handleLogOUt} className="btn btn-sm">Logout</button>
                        </ul>
                    </div>
                        : <Link to='login' className="btn">LogIn</Link>
                }

            </div>
        </div>

    );
};

export default NavBar;