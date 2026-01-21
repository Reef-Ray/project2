import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Table from './Table.js';

function App() {
  const [grant, setGrant] = useState([]);
   const [displayGrants, setDisplayGrants] = useState([]);
  
 useEffect(() => {
    async function fetchGrants() {
      const response = await fetch("/NEH2020sGrant_Short.json");
      if (response.ok) {
        const result = await response.json();
        console.log(result); 

        setGrant(result.Grants.Grant);
        setDisplayGrants(result.Grants.Grant);
      }
    }
    fetchGrants();
  }, []);

  function Filter() {
    setDisplayGrants(grant);
  }

  function sortByCity(reverse = false) {
    const sortedGrants = displayGrants.slice() 
      .sort((a, b) => a.InstCity.localeCompare(b.InstCity)); 

    setDisplayGrants(sortedGrants);
}

  function sortByAmount(reverse = false) {
    const sortedGrants = displayGrants.slice()
      .sort((a, b) => Number(b.OriginalAmount) - Number(a.OriginalAmount));

      if (!reverse) {
        sortedGrants = sortedGrants.reverse();
      }

    setDisplayGrants(sortedGrants);
}

   const buttonStyle = {
    margin: "5px",
    padding: "8px 12px",
    backgroundColor: "#2a405f",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Grants</h1>

      <div>
        <button style={buttonStyle} onClick={Filter}>Filter By...</button>
        <button style={buttonStyle} onClick={sortByAmount}>Sort by Amount</button>
        <button style={buttonStyle} onClick={sortByCity}>Sort by City</button>
      </div>

      <Table grants={displayGrants} />
    </div>
  );
}

export default App;
