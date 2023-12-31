import React from "react";
import "./APICalling.css"
const Thumbnail = (props) => {
    return (
        <>
            <div className="thumbnail" >
                <div className="images" style={{ overflow: "hidden" }}>
                    <div className="productImages"><img src={props.img[0]} alt="" /></div>
                    <div className="productImages"><img src={props.img[1]} width={100} height={100} alt="" /></div>
                    <div className="productImages"><img src={props.img[2]} width={100} height={100} alt="" /></div>
                    <div className="productImages"><img src={props.img[3]} width={100} height={100} alt="" /></div>
                </div>
                <div className="title">
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default Thumbnail;