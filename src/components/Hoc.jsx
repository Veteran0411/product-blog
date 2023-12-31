import React, { useEffect, useState } from 'react';

const Hoc = (WrappedComponent, entity) => {
    return function NewHoc() {
        const [data, setData] = useState([]);
        const [term, setTerm] = useState("");

        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();  
                setData(json);
                console.log(json, "data");
                console.log("props",entity);
            }
            fetchData();
        }, [])

        let filteredData = data.filter((d) => {
            if (entity === "users") {
                const { name } = d;
                return name.indexOf(term) >= 0;
            }
            if (entity === "todos") {
                const { title } = d;
                return title.indexOf(term) >= 0;
            }
        });

        return (
            <>
                <h2>{entity}</h2>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value) } />
                <WrappedComponent data={filteredData}></WrappedComponent>
            </>
        );
    }

}

export default Hoc;

// import React from 'react'

// const Hoc = (WrappedComponent, entity) => {
//     return class extends React.Component {
//         state = {
//             data: [],
//             term: ""
//         }
//         componentDidMount() {
//             const fetchData = async () => {
//                 const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
//                 const json = await res.json();
//                 this.setState({ ...this.state, data: json });
//                 console.log(json, "data");
//             }
//             fetchData();
//         }
//         render() {
//             let {term,data}=this.state;
//             let filteredData=data.filter((d)=>{
//                 if(entity==="users"){
//                     const {name}=d;
//                     return name.indexOf(term)>=0;
//                 }
//                 if(entity==="todos"){
//                     const {title}=d;
//                     return title.indexOf(term)>=0;
//                 }
//             })
//             return(
//                 <>
//                 <h2>{entity}</h2>
//                 <input type="text" value={term} onChange={(e)=>this.setState({...this.state,term:e.target.value})}/>
//                 <WrappedComponent data={filteredData}></WrappedComponent>
//                 </>
//             );
//         }
//     }
// }

// export default Hoc;