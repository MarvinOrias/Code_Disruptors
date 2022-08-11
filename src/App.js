import "./styles.css";
import Home from './components/Home';
import React from "react";


export default function App() {

  return (
    <div>
      <div className="navpage" style={{backgroundColor: '#343434', height: '55px', marginBottom: '50px'}}>
        <div><h3 className="h2-home">Gallery</h3></div>
        <div style={{marginLeft: 'auto'}}><a href="" style={{textDecoration: 'none'}}><h3 className="h3-home">Home</h3></a></div>
      </div>

      <div className="home-page">
      
      <Home name1='FoxHound' name2='Gamer Vibe' name3='Fox logo'
      name4='Mega X' name5='X' name6='Cloud' name7='Diablos' name8='Rathalos'
      name9='Gaming' />
      </div>    
    </div>
  );
}
