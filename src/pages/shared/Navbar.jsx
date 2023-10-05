import { NavLink } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {

    const links = <>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </>

    return (
        <div className="w-11/12 mx-auto mt-8 z-30 relative bg-transparent">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-32 h-14" src="logo.png" alt="" />
                    <div className="form-control ml-14 relative">
                        <input type="text" placeholder="       Search your destination..." className="input input-bordered w-24 md:w-96" />
                        <BsSearch className="text-xl absolute bottom-3 left-3"></BsSearch>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal text-white px-1 w-full flex justify-between">
                        {links}
                    </ul>
                </div>
                <NavLink to="/login" className="btn btn-warning ml-10 px-8 capitalize font-medium">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;