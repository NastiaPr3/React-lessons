import Rocket from '../rocket/Rocket';
import {useEffect, useState} from 'react';

export default function Rockets () {

    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setRockets(value.filter(value => value.launch_year !== '2020'));
            });
        }, []);

    return (
        <div>
            <h2>Rockets</h2>
            {rockets.map((rocket, index) =>
                <Rocket
                key={index}
                item={rocket}
            />)
            }

        </div>
    );
}