import React, {useEffect, useState } from 'react';
import Scroll from './scroll';


const Card = () => {
    const [robots, setRobots] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newRobots, setNewRobots] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robot => {
                setRobots(robot)
            });
        }, 1000)
    }, []);

    const showingRobot = query === ''
        ? robots
        : robots.filter((robot)=>{
             return robot.name.toLowerCase().includes(query.toLowerCase());        
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email){
            const newRobot = {id: new Date().getTime().toString(), name, email};
            setNewRobots((newRobots)=>{
                return [...newRobots, newRobot];
            });
            setName('');
            setEmail('');
        }
    }

    if (robots.length === 0) {
        return <h1>loading ...</h1>
    } else {
        return (
            <div className='todo-container'>
                <header>
                    <h1>My RoboFriends</h1>
                    <div className="search">
                        <input type="text"
                                placeholder='Search friends'
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        <button>Search</button>
                    </div>
                </header>

                <form className='form'>
                    <div className='form-control'>
                        <label htmlFor="name">Name : &nbsp;</label>
                        <input 
                            type="text"
                            id='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email : &nbsp;</label>
                        <input
                            type="text"
                            id='email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                    </div>
                    <button
                        className='btn'
                        type='submit'
                        onClick={handleSubmit}>
                            Add
                    </button>
                </form>          

                <Scroll>
                    <div className='card'>
                        {showingRobot.map(
                            (robot) => {
                                const {id, name, email} = robot;
                                return (
                                    <div
                                        className='card-container'
                                        key={id}>
                                        <img
                                            src={`https://robohash.org/${name}`}
                                            alt="robot" />
                                        <h3>
                                            {name}
                                        </h3>
                                        <p>
                                            {email}
                                        </p>
                                    </div>
                                )
                        })}
                        
                        {newRobots.map(
                            (newRobot) => {
                                const {id, name, email} = newRobot;
                                return (
                                    <div
                                        className='card-container'
                                        key={id}>
                                        <img
                                            src={`https://robohash.org/${name}`}
                                            alt="robot" />
                                        <h3>
                                            {name}
                                        </h3>
                                        <p>
                                            {email}
                                        </p>
                                    </div>
                                )
                        })}
                    </div>
                </Scroll>

                
            </div>
        )
    }
}


export default Card;