import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';


function App() {
  const [theme, setTheme] = useState(false);
  const [isbtn,setIsBtn] = useState(false)

const onThemeChange = () =>{
  setTheme(!theme)
}
  return (
    <div className="App">
      <h3>Theme {theme ? 'dark': 'light'}</h3>
     <Button handleClick={onThemeChange}>
       change Theme
     </Button>

     <button onClick={() => {
       setIsBtn(!isbtn)
     }}>Go away</button>
  
    </div>
  );
}

export default App;
