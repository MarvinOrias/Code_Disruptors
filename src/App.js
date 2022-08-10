import "./styles.css";
import logo1 from './images/foxhound.png';
import logo2 from './images/game.jpg';
import logo3 from './images/fox.png';

export default function App() {

  return (
    <div className="App">
      <h2 className="h2">Gallery</h2>
      <div className="grid">
        
        <img src={logo1} 
        alt="image1"
        className="image"/>

        <img src={logo2} 
        alt="image1"
        className="image"/>
        
        <img src={logo3} 
        alt="image1"
        className="image"/>
      </div>
    </div>
  );
}
