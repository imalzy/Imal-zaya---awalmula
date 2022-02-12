import * as React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { faAlignRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    const [showSidebar, setShowSidebar] = React.useState(false);

    return (
        <>
            <nav className="container bg-white shadow-lg h-20 w-screen max-w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">

                        {/* Header */}
                        <div className="flex space-x-7">
                            <div className="flex items-center py-4 px-2">
                                <h3 className="text-2xl font-medium text-green-500">LOGO</h3>
                            </div>
                            <div className="hidden md:flex items-center space-x-8 lg:flex">
                                <NavLink to={'/'} style={({ isActive }) => ({
                                    color: isActive ? '#22C55E' : '#6B7280',
                                    borderBottom: isActive ? '4px solid' : 'none',
                                    borderColor: isActive ? '#22C55E' : 'unset'
                                })} className='py-4 px-2 font-semibold hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300'>Home</NavLink>
                                {/* <Link to={'/catalog'} className='py-4 px-2 font-semibold hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300'>Catalog</Link> */}
                                <NavLink to={'/about'} style={({ isActive }) => ({
                                    color: isActive ? '#22C55E' : '#6B7280',
                                    borderBottom: isActive ? '4px solid' : 'none',
                                    borderColor: isActive ? '#22C55E' : 'unset'
                                })} className='py-4 px-2 font-semibold hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300'>About</NavLink>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-3">
                            <button className="px-4 py-2 text-green-100 bg-green-800 rounded-md">
                                Sign in
                            </button>
                            <button className="px-4 py-2 text-gray-200 bg-gray-400 rounded-md">
                                Sign up
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            {showSidebar ? (
                                <button
                                    className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                                    onClick={() => setShowSidebar(!showSidebar)}
                                >
                                    <FontAwesomeIcon icon={faXmark} color="white" size={70} />

                                </button>
                            ) : (
                                <button className="outline-none mobile-menu-button text-2xl" type='button' onClick={() => setShowSidebar(!showSidebar)}>
                                    <FontAwesomeIcon icon={faAlignRight} color="green" size={70} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className={`top-0 right-0 w-[75vw] bg-green-600 pl-10 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                        }`}
                >
                    <ul className="mt-20 text-4xl font-semibold text-white">
                        <li className="active"><a href="index.html" className="block text-sm px-2 py-4 bg-green-500 font-semibold">Home</a></li>
                        <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Catalog</a></li>
                        <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About Us</a></li>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Header;