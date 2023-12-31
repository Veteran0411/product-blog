import React from "react";
import "./APICalling.css"
const Description = (props) => {
    return (
        <div className="description">
            <div className="productInfo">
                {props.desc}
            </div>
            <div className="review">
                <div className="rating">Rating: {props.rating}</div>{/*&#9733;*/}
                <div className="stock">Stock: {props.stock}</div>
            </div>
        </div>
    )
}
export default Description;