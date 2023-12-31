import React, { useEffect, useState } from 'react'
import Hoc from './Hoc'

const TodoList=({data})=>{
//     const [users,setUsers]=useState([]);
//     const [term,setTerm]=useState("");

// useEffect(()=>{
//     const fetchUsers=async ()=>{
//         const res=await fetch("https://jsonplaceholder.typicode.com/users");
//         const json=await res.json();
//         setUsers(json);
//         console.log(json,"data");
//     }
//     fetchUsers();
// },[])


// let filterUser=users.filter(({name})=>{
//     return name.indexOf(term)>=0
// }).map((user)=>{
//     return(
//         <div key={user.id}>
//             <p>{(user.name)}</p>
//             <p>{user.email}</p>
//         </div>
//     )
// })

let renderUsers=data.map((user)=>{
    return(
        <div key={user.userid}>
            <p>
                <strong>{user.title}</strong>
            </p>
        </div>
    )
}).slice(0,10);
    return (
        <>
        <div>{renderUsers}</div>
        </>
    )
}

const SearchTodo=Hoc(TodoList,"todos");
export default SearchTodo;