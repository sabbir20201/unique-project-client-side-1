import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(signIn);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email,  password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/")
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }
    return (
        <div className="my-10">
            <h1 className="text-center font-bold text-3xl mb-4">Login Here</h1>
            <form onSubmit={handleRegister} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password here' required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <p className="mt-4 ">New here? <Link to='/register' className="text-green-500">Register</Link></p>

            </form>
        </div>
    );
};

export default Login;