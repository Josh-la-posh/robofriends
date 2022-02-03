import React, {useState } from 'react';
import robots from './robots'


const Card = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [robots, setRobots] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email){
            const robot = {id: new Date().getTime().toString(), name, email};
            setRobots((robots)=>{
                return [...robots, robot];
            });
            setName('');
            setEmail('');
        }
    }

    return (
        <>
            <form className='form'>
                <div className='form-control'>
                    <label
                        htmlFor="name">
                            Name : &nbsp;
                    </label>
                    <input 
                        type="text"
                        id='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                </div>
                <div className='form-control'>
                    <label
                        htmlFor="email">
                            Email : &nbsp;
                    </label>
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

            <div className='card'>
                {robots.map(
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
            </div>
        </>
    )
}


export default Card;