import { useEffect, useState } from "react";
import TeaSingleCard from "../TeaSingleCard/TeaSingleCard";


const TeaCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alltea')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="my-10">
            <h1 className="text-center font-bold text-4xl my-6">Bestselling Teas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data?.map(item => <TeaSingleCard key={item.id} item={item}></TeaSingleCard>)
                }
            </div>
        </div>
    );
};

export default TeaCard;