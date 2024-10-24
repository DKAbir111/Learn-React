import { useState } from "react"

export default function Count() {
    const btn = {
        border: "2px solid red",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "5px",
        margin: "5px",
        backgroundColor: "orange",

    }

    const [count, setCount] = useState(0)
    return (
        <div style={{ border: "5px solid orange", padding: "2rem", borderRadius: "15px", backgroundColor: "bisque" }} >
            <h2>Count:{count}</h2>
            <button style={btn} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={btn} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}