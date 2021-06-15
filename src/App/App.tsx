import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css'
import { myCube } from './math';
import Header from '../Header'


function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.

  const cubeRes: string = myCube(5)

  return (
    <div className="App">
      <Header>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page has been open for about sth <code>{count}</code> seconds.
        </p>
        <p>Cube of 3: {cubeRes}</p>
      </Header>
    </div>
  );
}

export default App;
