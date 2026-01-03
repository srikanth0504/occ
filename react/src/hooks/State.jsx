import { useEffect, useState } from "react"
const State = () => {
    const [count, setCount] = useState(0)
    const[like,setlike]=useState(0)
    useEffect(()=>{
        console.log("from useEffect")
    },[])
    return (
        <div>
            <h1>Use State Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            <h1>Likes:{}</h1>
            <button onClick={() => setCount(count + 1)}>❤️</button>
            <button onClick={()=> setCount(count-1)}>💔</button>
        </div>
    )
}
export default State