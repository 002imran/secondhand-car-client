import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import signupImg from '../../../src/assets/images/images/signup.jpg';
import { AuthContext } from '../../contexts/AuthProvider';
const SignUp = () => {
        const { createUser } = useContext(AuthContext);
        const [error, setError] = useState('');
        const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(name, email, password, confirmPassword);

        if (password.length < 6) {
            setError("Password should be at least 6 Characters");
            return;
        }
        if (password !== confirmPassword) {
            setError("Password did not match");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully');
                setError('');
                form.reset();

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }
    

    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-46 w-full md:h-auto md:w-1/2">
                        <img
                            className="object-cover w-full h-full"
                            src={signupImg}
                            alt="img"
                        />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <div className="flex justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-20 h-20 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                    Sign up
                                </h1>
                                <div>
                                    <label className="block text-sm">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <label className="block mt-4 text-sm">Password</label>
                                    <input
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                    />
                                </div>
                                <div>
                                    <label className="block mt-4 text-sm">Confirm Password</label>
                                    <input
                                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Confirm Password"
                                        type="password"
                                        name="confirmPassword"
                                    />
                                </div>
                                <button
                                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                    href="#"
                                    type='submit'
                                >
                                    Sign up
                                </button>
                                <p className='text-red-600'>{error} </p>
                            </form>

                            <div className="mt-4 text-center">
                                <h3 className="text-sm">
                                    Already have an account?
                                    <span>
                                        <Link to="/login" className="text-blue-600 hover:underline">
                                            LogIn Here.
                                        </Link>
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;