import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import UseCart from "../../Hooks/UseCart/UseCart";


const Navbar = () => {
    // const { user, logOut,updatedProfile } = useContext(AuthContext)
    const { user, logOut, updatedProfile } = useContext(AuthContext);
    console.log(updatedProfile);
    const [cart] = UseCart();
    console.log(cart);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                console.log('logout successfully');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "logOut in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">dashboard</Link></li>
        <li><Link to="/">{cart.length}</Link></li>



    </>
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className="w-20 rounded-2xl" src="https://i.ibb.co/bmDGyQR/images-1.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <p>{user?.email}</p> */}
                    <p>{user?.displayName}</p>
                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="coming soon" src={user?.photoURL} />
                            </div>
                            <p>
                                {user?.email}
                            </p>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                {
                                    user ? <>
                                        <button className="btn" onClick={handleLogOut}>LogOut</button>
                                    </>
                                        :
                                        <>
                                        <Link to="/login">
                                        <button>login</button>
                                        </Link>
                                        </>
                                }
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;