import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex max-w-6xl mx-auto">
            <div className="flex min-h-screen w-80 bg-orange-300">
                <ul className="menu p-4 ">
                    <li className="mb-3"><NavLink to="/dashboard/useHome">User Home</NavLink></li>

                    <li className="mb-3"><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
                    <li className="mb-3"><NavLink to="/dashboard/manageProduct">Manage Product</NavLink></li>
                    <div className="divider"></div>
                    <li className="mb-3"><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;