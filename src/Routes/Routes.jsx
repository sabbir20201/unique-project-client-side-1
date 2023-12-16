import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register.JSX";
import Login from "../Pages/Login/Login.JSX";
import Details from "../Pages/Details/Details";
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
                path:'/details',
                element: <PrivateRoute><Details></Details></PrivateRoute> 
            }
        ]
    }
])

export default Routes;