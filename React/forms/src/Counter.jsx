import { useState, useEffect } from "react"

export default function Counter(){
    let [count, setCount] = useState(0);

    function incCount(){
        setCount((prevCount)=>{
            return prevCount+1;
        });
    }

    useEffect(()=>{
       console.log('useEffect called'); 
    }, [count]);

    return (
        <div>
            <h1>useEffect</h1>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>+1</button>
        </div>
    )
}