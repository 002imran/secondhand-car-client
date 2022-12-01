import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../Layout/Dashboard';
import Main from '../../Layout/Main';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import Blog from '../../Pages/Blog.js/Blog';
import Category from '../../Pages/Category/Category';
import CategoryItem from '../../Pages/Category/CategoryItem';
import AllSeller from '../../Pages/Dashboard/AllUsers/AllSeller';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import MyProduct from '../../Pages/MyProduct/MyProduct';
import SellerAccount from '../../Pages/SignUp/SellerAccount';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
               path: '/selleraccount',
               element:<SellerAccount></SellerAccount>  
            },
            {
                path: '/category/:id',
                element: <PrivateRoute> <CategoryItem></CategoryItem></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`),

            }
            // {
            //     path:'/addproduct',
            //     element: <AddProduct></AddProduct>
            // },
            // {
            //     path:'/myproduct',
            //     element: <MyProduct></MyProduct>
            // }
        ]
        
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/dashboard/myproducts',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/allsellers',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            }
        ]
    }
]);

export default router;