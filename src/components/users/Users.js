import {useEffect, useState} from 'react';
import {getUsers} from '../../services/user.api.servicers';
import User from '../user/User';

export default function Users ({show}) {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
        }, []);

    return (
        <div>
            {
            users.map(user => <User
                user={user}
                key={user.id}
                show={show}/>)
            }
        </div>
    );
}