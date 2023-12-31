import React, { useState } from "react";
import withList from "./withList";
import PureComponent from "./PureComponent";
const OrderedList = (props) => {
    const [input, setInput] = useState("");
    return (
        <div>
            <div>{props.name}</div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />

            <button onClick={() => {
                props.addTodo(input)
                setInput("")
            }
            }>Add Todo</button>

            <PureComponent name={"som"}/>
            <ol>
                {props.todo.map(item=>{
                    return (
                        <li>{item}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default withList(OrderedList);
