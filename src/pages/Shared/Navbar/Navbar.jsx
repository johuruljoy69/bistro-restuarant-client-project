import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems =
        <>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/menu">Our Menu</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/order/salad">Order Food</NavLink>
            {
                isAdmin ? <Link to="/dashboard/adminhome">Dashboard</Link> : (user ? <Link to="/dashboard/userhome">Dashboard</Link> : <Link to="/login" state={{ from: location }}>Dashboard</Link>)
            }

            {
                isAdmin ? "" : (user ? <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/dashboard/mycart"><span className='flex items-center'><FaShoppingCart /><div className="badge badge-secondary ml-1">+{cart?.length || 0} </div></span></NavLink> : <Link to="/login" state={{ from: location }}><span className='flex items-center'><FaShoppingCart /><div className="badge badge-secondary ml-1">+{cart?.length || 0} </div></span></Link>)
            }

            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : '')} to="/contact">Contact</NavLink>
            {
                user ? <> <Link><button onClick={handleLogOut} className="btn btn-ghost">Logout</button> <span>{user?.disPlayName}</span></Link> </> :
                    <><Link to='/login'>Login</Link></>
            }



        </>
    return (
        <div className="navbar container mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-gray-800 space-y-2  rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case my-2 text-xl font-semibold">BISTRO BOSS<br />Restaurant </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-semibold flex gap-5 items-center">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn"><Link to="/menu">Order Now</Link></button>
                
            </div>
        </div>
    );
};

export default Navbar;