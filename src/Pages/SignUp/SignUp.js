import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import signupImg from '../../../src/assets/images/images/signup.jpg';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const { providerLogin } = useContext(AuthContext);

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if(token){
        navigate('/')
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email) 
                    })
                    .catch(err => console.log(err));
            })
            .catch((error => {
                console.error(error);
                setSignUPError(error.message)
            }))

    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                // getUserToken(email);

            })
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
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is Required",
                            })}
                            placeholder=""
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && (
                            <p className="text-red-600">{errors.name?.message}</p>
                        )}
                    </div>

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
                        value="sign up"
                        className="block w-full  max-w-xs px-4 py-2 mt-4 text-sm font-medium leading-5 text-center
                      text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg
                       active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                 
                                    />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className="p-2 text-sm text-center">
                    Already have an account?
                    <Link to="/login" className="text-primary">
                        Login
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

export default SignUp;