import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState(false);
  const [isbtn,setIsBtn] = useState(false)
  const [counter,setCounter] = useState(0);


const onThemeChange = () =>{
  setTheme(!theme)
}
  return (
    <div className="App">
      <h3>Theme {theme ? 'dark': 'light'}</h3>
     <Button handleClick={onThemeChange}>
       change Theme
     </Button>



    <h1 data-testid='countertext' >counter :- {counter}</h1>
    <button onClick={() => {setCounter(counter + 5)}}>ADD</button>
    <button onClick={() => {setCounter(counter - 5)}}>REDUCE</button>

    </div>
  );
}

export default App;
