import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import UseCart from "../../Hooks/UseCart/UseCart";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";


const ManageProduct = () => {
    const [cart, refetch] = UseCart()
    // const [userData, setData] = useState([]);
    const axiosSecure = UseAxiosSecure()
    // useEffect(()=>{
    //     fetch('http://localhost:5000/getProduct')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
    // const handleDelete = (_id) => {
    //     console.log(_id);
    //     fetch(`http://localhost:5000/deleteProduct/${_id}`, {
    //         method:'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.deletedCount > 0){
    //             console.log('user deleted successfully');
    //             const remainingUser = userData.filter(item => item._id !== _id);
    //             setData(remainingUser)
    //         }
    //     })
    // }
    const handleDelete = (_id)=>{
        axiosSecure.delete(`http://localhost:5000/deleteProduct/${_id}`)
        .then(response => {
            console.log(response.data);
            if (response.data.deletedCount > 0) {
                console.log('Product deleted successfully');
                refetch()
            }
        })
        .catch(error => {
            console.error('Error deleting product:', error);
        });

    }
    // console.log(userData);
    return (
        <div>

            <h1>manage product {cart.length}</h1>
            <div>
                {
                    cart.map(item => <ProductCard 
                        key={item._id} 
                        item={item}
                        handleDelete={handleDelete}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;