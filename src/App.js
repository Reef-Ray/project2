import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Table from './Table.js';

function App() {
  const [grant, setGrant] = useState([]);
  
  useEffect(() => { 
    async function fetchGrant() {
      const url = "/NEH2020sGrant_Short.json";
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setGrant(result.Grants.Grant);
        }
        // useState(result);
        // console.log(result)
      
    }; 
    fetchGrant();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Table grant={grant} />
      </main>
    </div>
  );
}

export default App;
