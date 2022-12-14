import React, { useContext, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../src/assets/images/images/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider';
import { FcGoogle} from 'react-icons/fc'
import { BsGithub} from 'react-icons/bs'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast'
import useToken from '../../hooks/useToken';
import { useForm } from 'react-hook-form';


const Login = () => {
    
        const { signIn, providerLogin } = useContext(AuthContext);
        const googleProvider = new GoogleAuthProvider();
        const githubProvider = new GithubAuthProvider();
        const { register, formState: { errors }, handleSubmit } = useForm();
        const [loginError, setLoginError] = useState('');
        const [loginUserEmail, setLoginUserEmail] = useState('');
        const [token] = useToken(loginUserEmail);

        const location = useLocation();
        const navigate = useNavigate();

        const from = location.state?.from?.pathname || '/';

        if (token) {
            navigate(from, { replace: true })
        }


        const handleLogin = (data) => {
            console.log(data);
            setLoginError('');
            signIn(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setLoginUserEmail(data.email);

                })
                .catch(error => {
                    console.log(error.message);
                    setLoginError(error.message);
                });
        }

       

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

    

    return (
       

        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-46 w-full md:h-auto md:w-1/2">
                        <img
                            className="object-cover w-full h-full"
                            src={loginImg}
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
                            <form onSubmit={handleSubmit(handleLogin)}>
                                

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",

                                        })}
                                        placeholder=""
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                    {errors.email && (
                                        <p className="text-red-600">{errors.email?.message}</p>
                                    )}
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: "Password must be 6 characters long" },
                                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Must be Stronng" }
                                        })}
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>

                                {errors.password && (
                                    <p className="text-red-600">{errors.password?.message}</p>
                                )}

                                <input
                                    type="submit"
                                    value="login"
                                    className="block w-full  max-w-xs px-4 py-2 mt-4 text-sm font-medium leading-5 text-center
                      text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg
                       active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"

                                />
                                {loginError && <p className='text-red-600'>{loginError}</p>}
                            </form>
                            <p className="p-2 text-sm text-center">
                                Don't have an account?
                                <Link to="/signup" className="text-primary">
                                    Signup
                                </Link>
                            </p>
                            <div className="divider">OR</div>
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