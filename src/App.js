import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {reducer} from './reducers';
import './App.css';
import Card from './components/Card';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Card />
      </div>
    </Provider>    
  );
}

export default App;
