import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register.JSX";
import Login from "../Pages/Login/Login.JSX";
import Details from "../Pages/Details/Details";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import UserHome from "../Dashboard/UserHome/UserHome";
import UpdateProduct from "../Dashboard/UpdateProduct/UpdateProduct";
import ManageProduct from "../Dashboard/ManageProduct/ManageProduct";
import PrivateRoute from "./PrivateRoute";




const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
            {
                path:"addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path:'useHome',
                element: <UserHome></UserHome>
            },
            {
                path:'updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params})=> fetch(`http://localhost:5000/updateProduct/${params.id}`)
            },
            {
                path:'manageProduct',
                element: <ManageProduct></ManageProduct>
            },
        ]
    }
])

export default Routes;