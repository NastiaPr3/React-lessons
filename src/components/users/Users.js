import User from "../user/User";
import {useState, useEffect} from 'react';
export default function Users () {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
        }, []);

    const choseUser = (item) => {
        setUser(item);
    }


    return (
        <div>
            <h2>Users components</h2>
            {user.id && <div>{user.id} - {user.username}, {user.email}</div>}
            {users.map(user => <User key={user.id} item={user} choseUser={choseUser}/>)};
        </div>
    );
};