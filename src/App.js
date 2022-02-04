import './App.css';
import Card from './card'
import robots from './robots'
import { useState } from 'react';

function App() {
  const [robot, setRobot] = useState(robots);
  return (
    <div className="App">
      <Card robots={robot}/>
    </div>
  );
}

export default App;
