
const Friend = ({ friend }) => {
    const { name, email } = friend;
    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <h4>Email: {email.toLowerCase()}</h4>
        </div>
    )
}

export default Friend
