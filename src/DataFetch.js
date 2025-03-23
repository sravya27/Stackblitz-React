import React, { useState, useEffect } from "react";
import './style.css';

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
                        <h5>{item.title}</h5>
                        <h6>
                            <h5 className="description">Description:</h5> 
                            <p>{item.description}</p>
                        </h6>
                        <ul>
                            <h5 className="ingredients">Ingredients:</h5>
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