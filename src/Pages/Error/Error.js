import React from "react";
import { Link } from "react-router-dom";
import errorImg from '../../assets/images/error.png';

const Error = () => {
    return (
        <div className="flex items-center justify-center">

            <div className="max-w-md text-center justify-content-center align-items-center">
                <img src={errorImg} alt="error" className="w-25 h-50" />
                <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl mb-8">
                    Sorry, we couldn't find this page.
                </p>
                <Link
                    to="/"
                    className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
                >
                    Back to homepage
                </Link>
            </div>

        </div>
    );
};

export default Error;
