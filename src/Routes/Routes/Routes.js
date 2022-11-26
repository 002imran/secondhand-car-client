import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog.js/Blog';
import Category from '../../Pages/Category/Category';
import CategoryItem from '../../Pages/Category/CategoryItem';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                element: <CategoryItem></CategoryItem>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`),

            }
        ]
        
    }
]);

export default router;