import React, { useState, useEffect } from "react";
import "./APICalling.css";
import Description from "./Description";
import Thumbnail from "./Thumbnail";

const APICalling = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        const getData = () => {
            fetch("https://dummyjson.com/products")
                .then((response) => response.json())
                .then((jsonResponse) => {
                    setData([...jsonResponse.products]);
                })
                .catch((err) => {
                    console.log('ERR in post', err);
                });
        };
        getData();
    }, []);

    if (data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div id="container">

            <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} style={{ position: "absolute", top: "30px",right:"30px" }} />
            {
                data.filter(({ title }) => {
                    return title.indexOf(term) >= 0
                }).map((data) => {
                    return (
                        <div className="card" key={data.id}>
                            <Thumbnail img={data["images"]} title={data["title"]} />
                            <Description
                                desc={data["description"]}
                                rating={data["rating"]}
                                stock={data["stock"]}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default APICalling;
