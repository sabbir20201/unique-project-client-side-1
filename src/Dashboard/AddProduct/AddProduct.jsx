
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart/UseCart";


const AddProduct = () => {
    const axiosSecure = UseAxiosSecure()
    const [cart,refetch] = UseCart()

    const handleAddProduct = (e) => {
        console.log(e);
        e.preventDefault()
        const form = e.target;
        const productName = form.productName.value;
        const productImg = form.productImg.value;
        const productPrice = form.productPrice.value;
        console.log(productName, productImg, productPrice);
        const product = {
            productName: productName,
            productImg: productImg,
            productPrice: productPrice

        }
        // console.log(product);
        axiosSecure.post('/addProduct', product)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: " card added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                    
                }
            })
        // fetch('http://localhost:5000/addProduct', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(product)
        // })
        // .then(data => {
        //     console.log(data);
        // })
        // .catch( error =>{
        //     console.error(error)
        // })


    }

    return (
        <div>
            <h1>this is add product {cart.length}</h1>

            <form onSubmit={handleAddProduct} className="max-w-sm ml-10 mt-10">

                <div className="mb-3">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input type="text" name="productName" placeholder="enter product name" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Img</label>
                    <input type="text" name="productImg" placeholder="img link" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-3">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product price</label>
                    <input type="text" name="productPrice" placeholder="enter amount" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                {/* <input className="b" type="submit" value='submit' /> */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add a product</button>

            </form>

        </div >
    );
};

export default AddProduct;