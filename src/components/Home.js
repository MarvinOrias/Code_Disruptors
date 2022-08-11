import logo1 from '../images/foxhound.png';
import logo2 from '../images/game.jpg';
import logo3 from '../images/fox.png';
import logo4 from '../images/X.jpg';
import logo5 from '../images/X2.png';
import logo6 from '../images/cloud.jpg';
import logo7 from '../images/diablos.jpg';
import logo8 from '../images/rathalos.jpg';
import logo9 from '../images/gaming.jpg';

export default function Home(props){
  return(
    <div className="App">
      <div className="grid">
        
        <div>
          <img src={logo1} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name1}</h3>
        </div>

        <div>
        <img src={logo2} 
        alt="image1"
        className="image"/>
        <h3 style={{color: '#D2A157'}}>{props.name2}</h3>
        </div>
        
        <div>
          <img src={logo3} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name3}</h3>
        </div>

        <div>
          <img src={logo4} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name4}</h3>
        </div>

        <div>
          <img src={logo5} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name5}</h3>
        </div>

        <div>
          <img src={logo6} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name6}</h3>
        </div>

        <div>
          <img src={logo7} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name7}</h3>
        </div>

        <div>
          <img src={logo8} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name8}</h3>
        </div>

        <div>
          <img src={logo9} 
          alt="image1"
          className="image"/>
          <h3 style={{color: '#D2A157'}}>{props.name9}</h3>
        </div>

      </div>
    </div>
  )
}