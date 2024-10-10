"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const GoogleLogin = () => {
    const router = useRouter();

    const googleLogin = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    };

    const handleLogin = () => {
        googleLogin();
        // Add logic to check if user is authenticated and then redirect
        router.push('/home'); // Assuming '/home' is the path to your home page
    };

    return (
        <div className="relative flex flex-col justify-center items-center h-screen bg-black text-white">
            {/* Logo Section */}
            <ul className="absolute top-0 left-0 p-4">
                <li>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text">
                        Furniture Assembly
                    </h1>
                </li>
            </ul>

            {/* Statement Above Button */}
            <ul className="mb-4 text-xl font-semibold">
                <li>
                    Press here to assemble your dream furniture!!!!
                </li>
            </ul>

            {/* Hand SVG Below Button */}
            <ul>
                <li>
                    <svg
                        className="mt-4 w-10 h-10 animate-bounce"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19V6m0 13l-7-7m7 7l7-7"
                        />
                    </svg>
                </li>
            </ul>

            {/* Google Login Button */}
            <ul>
                <li>
                    <button
                        onClick={handleLogin}
                        className="flex items-center px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                        >
                            <path d="M23.49 12.27c0-.9-.08-1.76-.23-2.58H12v5.04h6.38c-2.73 2.54-6.45 4.23-10.54 4.23-6.78 0-12.32-5.53-12.32-12.32s5.54-12.32 12.32-12.32c7.03 0 12.76 5.59 12.76 12.5z" />
                        </svg>
                        Sign in with Google
                    </button>
                </li>
            </ul>

            {/* Additional Statement */}
            <ul className="mt-8 text-2xl font-bold">
                <li>
                    Transforming Spaces with Expert Craftsmanship.
                </li>
            </ul>
        </div>
    );
};

export default GoogleLogin;
