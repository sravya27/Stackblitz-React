import React, { useState, useEffect } from "react";

export default function DataFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/coffee/hot')
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            console.log(data);
            setLoading(false);
        })
    },[]);

    return (
        <div>
            {loading ? 
                (<p>loading...</p>)
                :
                <div>
                {data.map((item,index)=> (
                    <div key={index}>
                        {item.title}
                        <p>Description: {item.description}</p>
                        <ul>
                            {item.ingredients.map((ing, j)=>(
                                <li key={j}>
                                    {ing}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
            }
        </div>
    );
}