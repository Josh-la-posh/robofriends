import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from '../scroll';
import CardList from './CardList';
import { setQuery, setEmail, setName } from '../action';

const mapStateToProps = state => {
    return {
        query: state.query,
        name: state.name,
        email: state.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (e) =>  dispatch(setQuery(e.target.value)),
        nameChange: (e) => dispatch(setName(e.target.value)),
        emailChange: (e) => dispatch(setEmail(e.target.value))
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            newRobots: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robot => {
            this.setState({robots: robot})
        });
    }

    handleSubmit(e) {
        e.preventDefault(e);
        const {name, email} = this.props
        if(name && email){
            const newRobot = {id: new Date().getTime().toString(), name, email};
            // setNewRobots((newRobots)=>{
            //     return [...newRobots, newRobot];
            // });

            this.setState(prevState => ({
                newRobots: [
                    ...prevState.newRobots, newRobot]                
                })
            );
            
            // this.props.nameChange('')
        }
    }

    render() {
        const {robots} = this.state;
        const {query, name, email, onSearch, nameChange, emailChange} = this.props;
        const searchFilter = 
            robots.filter((robot)=>{
                return robot.name.toLowerCase().includes(query.toLowerCase());})

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
                                    onChange={onSearch}
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
                                onChange={nameChange}
                                />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="email">Email : &nbsp;</label>
                            <input
                                type="text"
                                id='email'
                                value={email}
                                onChange={emailChange}
                                />
                        </div>
                        <button
                            className='btn'
                            type='submit'
                            onClick={this.handleSubmit}>
                                Add
                        </button>
                    </form>          

                    <Scroll>
                        <CardList newRobots={this.state.newRobots} robots={searchFilter}/>
                    </Scroll>

                    
                </div>
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);