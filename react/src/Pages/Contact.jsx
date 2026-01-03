import{ useEffect, useState }from "react"
const Contact = () => {
    const[users,setusers]=useState([])
    useEffect(()=>{
       const fetchUsers=async()=>{
       const res = await fetch("https://jsonplaceholder.typicode.com/users")
       const data = await res.json()
       setusers(data)
       }
       fetchUsers()
    },[])
    return (
        <div>
            <h1>Datas from API</h1>
            <ol>
               {users.map((u)=>(
                 <li>{u.name}</li>
             
                ))}
            </ol>
        </div>
    )
}
export default Contact