import "./App.css"
export default function Condition({ Person }) {

    return (
        <div className="card1">
            <h3>Hello! {Person.name}</h3>
            <h3>Your Age: {Person.age}</h3>
            <h3>Your Gender: {Person.gender}</h3>
        </div>
    )
}