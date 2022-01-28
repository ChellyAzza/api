import {Link} from "react-router-dom";

const UserCard=({cart}) => {
    return <div>
        <h1> {cart.name}</h1>
        <h2> {cart.email}</h2>
        <h3>{cart.address.city}</h3>
        <Link to={`/info/${cart.id}`}> <button>Info</button></Link>
        <hr />
    </div>;
};

export default UserCard;
