import React, { useContext } from 'react';
import logo from '../../../assets/images/logo-car.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(err => console.log(err))
    }
    
    const menuItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
           
            <li>
                <Link className="dropdown dropdown-end">
                <Link>Options</Link>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/signup'>User Account</Link></li>
                        <li><Link to='/selleraccount'>Seller Account</Link></li>
                    </ul>
                </Link>
            </li>

            {user?.uid ? (
                <>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/addproduct'>Add Product</Link>
                    </li>
                    <li>
                        <Link onClick={handleLogOut}>SignOut</Link>
                    </li>
                </>

            ):(
                    <li>
                        <Link to="/login">Login</Link>
                       
                        
                    </li>
                

                
            ) }
           
           
            
           
        </>
    )

    return (
        <div>
            <div className="navbar bg-base-100 text-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          {menuItems}
                        </ul>
                    </div> 
                    <div className='hidden md:flex items-center'>
                       <Link>
                         <img className='w-48 h-36 rounded-lg'  src={logo} alt=''/>
                       </Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-2xl font-semibold">
                        {menuItems}
                    </ul>
                </div>
                    <div className='flex items-center justify-end sm:hidden ml-24'>
                        <Link>
                            <img className='w-48 h-36 rounded-lg' src={logo} alt='' />
                        </Link>
                    </div>
                
            </div>
        </div>

        
    );
};

export default Navbar;