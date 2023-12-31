import React, { useEffect, useState } from 'react'
import Hoc from './Hoc'

const UserList=({data})=>{
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
        <div key={user.id}>
            <p>
                <strong>{user.name}</strong>
            </p>
        </div>
    )
})
    return (
        <>
        {/* <h2>Users</h2>
        <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/> */}
        <div>{renderUsers}</div>
        </>
    )
}

const SearchUser=Hoc(UserList,"users");
export default SearchUser;