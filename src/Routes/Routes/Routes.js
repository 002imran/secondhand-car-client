import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog.js/Blog';
import Home from '../../Pages/Home/Home/Home';
import SignUp from '../../Pages/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            }
        ]
        
    }
]);

export default router;