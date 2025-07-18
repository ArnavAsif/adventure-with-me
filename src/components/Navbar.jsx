import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import noUser from '../assets/noUser.jpg'



const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('sign out success')
            })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                // console.log(error)
            }
               
            )
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
                <li><NavLink to='/userProfile'>User Profile</NavLink></li>

            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Adventure With Us</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div>
                                {
                                    user.photoURL ? <img className="btn btn-ghost btn-circle mr-2" src={user.photoURL} alt="" /> 
                                    : <img className="btn btn-ghost btn-circle mr-2" src={noUser} alt="" />
                                }

                            </div>

                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                        </>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;