import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.jpeg";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-none">
                    <div className="w-auto md:max-w-7xl flex flex-wrap items-center justify-between md:mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-32 md:mx-12" alt="Flowbite Logo" />
                        </a>
                        <div className="flex md:order-2 space-x-4 rtl:space-x-reverse text-red-900 dark:text-white text-xl mx-5 md:mx-14">
                            <button className="bg-red-900 py-3 px-8 rounded-lg normal-case font-sans font-thin hover:bg-white border border-red-900 text-white hover:text-red-900 transition duration-300 hover:underline cursor-pointer">
                                Donate
                            </button>
                            <button
                                data-collapse-toggle="navbar-sticky"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-sticky"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white bg-white rounded-sm md:bg-transparent md:text-red-900 md:p-0 md:dark:text-red-900" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-red-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 md:p-0 md:dark:hover:text-red-500">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-red-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 md:p-0 md:dark:hover:text-red-500">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-red-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 md:p-0 md:dark:hover:text-red-500">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;