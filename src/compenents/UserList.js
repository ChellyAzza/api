import UserCard from "./UserCard";

const UserList=({list}) => {
    return (
        <div> {
            list.map((user, i) => <UserCard cart={user} key={i} />)
        }
        </div>);
};

export default UserList;
