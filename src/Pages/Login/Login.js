import React, { useContext, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../src/assets/images/images/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle} from 'react-icons/fc'
import { BsGithub} from 'react-icons/bs'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast'


const Login = () => {
    
    const { signIn, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                toast('Logged In Successfully')
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error('error:', error))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true})
              
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
             });
    };

    return (
        <div class="flex items-center min-h-screen bg-gray-50">
            <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div class="flex flex-col md:flex-row">
                    <div class="h-46 w-full md:h-auto md:w-1/2">
                        <img class="object-cover w-full h-full" src={loginImg} alt="img" />
                    </div>
                    <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div class="w-full">
                            <div class="flex justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-20 h-20 text-blue-600"
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
                                <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                                    LogIn
                                </h1>

                                <div class="mt-4">
                                    <label class="block text-sm">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div>
                                    <label class="block mt-4 text-sm">Password</label>
                                    <input
                                        class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                    />
                                    <p className='text-sm mt-2'>Forget Password?</p>
                                </div>

                                <button
                                    class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                    href="#"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <p className="text-red-500">{error}</p>
                            </form>

                            <div class="mt-4  text-center">
                                <h3 class="text-sm">
                                    Don't have an account?
                                    <span className="text-blue-500">
                                        <Link to="/signup">SignUp.</Link>
                                    </span>
                                </h3>
                            </div>
                            <div className="text-3xl flex justify-center mt-2 gap-3">
                                <FcGoogle title="Google" onClick={handleGoogleSignIn} />
                                <BsGithub title="Github" onClick={handleGithubSignIn} />

                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;