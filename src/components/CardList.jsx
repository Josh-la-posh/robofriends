import React from 'react';

function CardList({newRobots, robots}) {

    return (
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
    )   
}

export default CardList;