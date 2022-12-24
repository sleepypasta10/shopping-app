import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const { cart } = useSelector(state => state.productState)

    return (
        <>
            <div className='header'>          
                    <div className='d-flex justify-content-start align-items-center gap-3'>
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/new-arrival" className='nav-link'>New Arrival</NavLink>
                    </div>
                    <div className='brand'>
                        <h2 className=''>Beauty.ID</h2>
                    </div>
                        <>
                            <Link to='/cart'>
                                <div className='position-relative'>
                                    <FaShoppingCart className='fs-4 text-black mt-2'/>
                                    {cart.length > 0 && (
                                        <span className='position-absolute top-0 start-100 translate-middle-y rounded-circle w-100 text-center text-sm text-black mt-2' style={{background: "#ef975f"}}>
                                            {cart.length}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </>
                </div>   
        </>
    )
}

export default Navbar
