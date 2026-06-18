import React, { useState } from 'react'
import { Link,NavLink } from "react-router-dom"
import logo from '../assets/Brand-Name-removebg.png'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='flex items-center justify-between px-6 md:px-20 lg:px-40py-0 fixed top-0 w-full
        bg-white shadow-md h-16 z-9999'>

            <NavLink to="/">  <img src={logo} alt="Brand Logo" className='h-12 w-auto' /> </NavLink>

            <ul className='hidden md:flex gap-6'>
                <NavLink to="/" className="nav-link" ><li>Home</li></NavLink>
                <NavLink to="/products" className="nav-link"> <li>Products</li></NavLink>
                <NavLink to="/ordernow" className="nav-link"> <li>Order Now</li></NavLink>
                <NavLink to="/about" className="nav-link"> <li>About</li></NavLink>
                <NavLink to="/contact" className="nav-link"> <li>Contact</li></NavLink>


            </ul>

            {/* Hamburger button - only shows on mobile */}
            <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* Mobile dropdown - only shows when isOpen is true */}
            {isOpen && (
                <ul className='md:hidden flex flex-col absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 gap-4'>

                    <NavLink to="/" className="nav-link"  onClick={() => setIsOpen(false)}><li>Home</li></NavLink>
                    <NavLink to="/products" className="nav-link"  onClick={() => setIsOpen(false)}> <li>Products</li></NavLink>
                    <NavLink to="/ordernow" className="nav-link"  onClick={() => setIsOpen(false)}> <li>Order Now</li></NavLink>
                    <NavLink to="/about" className="nav-link"  onClick={() => setIsOpen(false)} > <li>About</li></NavLink>
                    <NavLink to="/contact" className="nav-link"  onClick={() => setIsOpen(false)}> <li>Contact</li></NavLink>



                </ul>
            )}
        </nav>
    )
}

export default NavBar
