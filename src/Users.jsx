import { useEffect, useState } from "react"
import "./App.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))


    }, [])
    return (
        <div>
            {
                users.map(user => {
                    return (
                        <div key={user.id} className="user">
                            <h3 >{user.name}</h3>
                            <h4>{user.email.toLowerCase()}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users
