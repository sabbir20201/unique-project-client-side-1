import { useEffect, useState } from "react";
import TeaSingleCard from "../TeaSingleCard/TeaSingleCard";
import axios from "axios";
import UseCart from "../../Hooks/UseCart/UseCart";


const TeaCard = () => {
    const [cart, refetch] = UseCart();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/getProduct')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])
    const handleDelete = (_id)=>{
        axios.delete(`http://localhost:5000/deleteProduct/${_id}`)
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
    return (
        <div className="py-20">
            <h1 className="text-center font-bold text-4xl mb-5">Bestselling Teas</h1>
            <div className="grid sm:ml-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cart?.map(item => <TeaSingleCard 
                        key={item._id} 
                        item={item}
                        handleDelete={handleDelete}
                        ></TeaSingleCard>)
                }
            </div>
        </div>
    );
};

export default TeaCard;