import React, { useState } from "react";
import withList from "./withList";

const UnorderedList = (props) => {
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

export default withList(UnorderedList);
