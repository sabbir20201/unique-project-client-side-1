import { useEffect, useState } from "react";
import TeaSingleCard from "../TeaSingleCard/TeaSingleCard";


const TeaCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://unique-project-server-1.vercel.app/alltea')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="py-20">
            <h1 className="text-center font-bold text-4xl mb-5">Bestselling Teas</h1>
            <div className="grid sm:ml-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data?.map(item => <TeaSingleCard key={item.id} item={item}></TeaSingleCard>)
                }
            </div>
        </div>
    );
};

export default TeaCard;