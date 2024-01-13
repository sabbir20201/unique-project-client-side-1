import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";


const UseCart = () => {
    // tan stack query 
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/getProduct')
            return res.data  
        }
    })
    return [cart, refetch]
};

export default UseCart;