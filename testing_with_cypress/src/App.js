import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
    <p>{count}</p>
    <button className='counterBtn' onClick={() => {
      setCount(count+1)
    }}>add</button>
     

      
    </div>
  );
}

export default App;
