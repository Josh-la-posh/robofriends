import React, { Component ,useState,useEffect} from 'react';
import { connect ,useSelector,useDispatch} from 'react-redux';
import Scroll from '../scroll';
import CardList from './CardList';
import { setQuery, setEmail, setName, addCount, subtractCount, resetCount } from '../action';

const mapStateToProps = state => {
    return {
        query: state.query,
        name: state.name,
        email: state.email,
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (e) =>  dispatch(setQuery(e.target.value)),
        nameChange: (e) => dispatch(setName(e.target.value)),
        emailChange: (e) => dispatch(setEmail(e.target.value)),
        addCount: () => dispatch(addCount()),
        subtractCount: () => dispatch(subtractCount()),
        // resetForm: () => { dispatch(setName(''), dispatch(setEmail('')))},
        // subtractCount: () => console.log(dispatch())
        }


    }

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            newRobots: [],
            count: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robot => {
            this.setState({robots: robot})
        });

        // this.setState({
        //     count: this.state.count++
        // })
    }



    onIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }

    onDecrement() {
        if (this.state.count >0) {
            this.setState({
                count: this.state.count - 1
            })
        } else {
            this.state.count = 0;
        }
        
    }

    // componentDidUpdate() {
    //     this.setState({
    //         count: this.state.count++
    //     });
    // }

    handleSubmit(e) {
        e.preventDefault(e);
        const {name, email,resetForm} = this.props

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
            resetForm();
        }
    }

    render() {
        const {robots} = this.state;
        const {query, name, email, onSearch, nameChange, emailChange, addCount, subtractCount} = this.props;
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

                    <div className="counter">
                        <button 
                            // onClick={this.onDecrement}
                            onClick={subtractCount}
                            className="btn btn-secondary">-</button>
                        <span className='badge bg-success'>{console.log(this.props.count)}</span>
                        <button 
                            // onClick={this.onIncrement}
                            onClick={addCount}
                            className="btn btn-secondary">+</button>
                    </div>

                    <Scroll>
                        <CardList newRobots={this.state.newRobots} robots={searchFilter}/>
                    </Scroll>

                    
                </div>
            )
        }
    }
// }



// const Card = (props) => {
//     const [robots,setRobots] = useState([]);

//     const [newRobots,setNewRObots] = useState([]);

    // const mapStateToProps = state => {
//     return {
//         query: state.query,
//         name: state.name,
//         email: state.email
//     }
// }
//     const name = useSelector((state)=> state.name);

//     const dispatch = useDispatch();


//         useEffect(()=>{    

    
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(robot => {
//             this.setState({robots: robot})
//         })
//         },[])


//         const nameChange = (e) => {
 
//             dispatch(setQuery(e.target.value))
//         }


//         return (
//                             <div className='todo-container'>
//                                 <header>
//                                     <h1>My RoboFriends</h1>
//                                     <div className="search">
//                                         <input type="text"
//                                                 placeholder='Search friends'
//                                                 onChange={onSearch}
//                                             />
//                                         <button>Search</button>
//                                     </div>
//                                 </header>
            
//                                 <form className='form'>
//                                     <div className='form-control'>
//                                         <label htmlFor="name">Name : &nbsp;</label>
//                                         <input 
//                                             type="text"
//                                             id='name'
//                                             value={name}
//                                             onChange={nameChange}
//                                             />
//                                     </div>
//                                     <div className='form-control'>
//                                         <label htmlFor="email">Email : &nbsp;</label>
//                                         <input
//                                             type="text"
//                                             id='email'
//                                             value={email}
//                                             onChange={emailChange}
//                                             />
//                                     </div>
//                                     <button
//                                         className='btn'
//                                         type='submit'
//                                         onClick={this.handleSubmit}>
//                                             Add
//                                     </button>
//                                 </form>          
            
//                                 <Scroll>
//                                     <CardList newRobots={this.state.newRobots} robots={searchFilter}/>
//                                 </Scroll>
            
                                
//                             </div>
//                         )



}





export default connect(mapStateToProps, mapDispatchToProps)(Card);




