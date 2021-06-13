import React, { useState } from 'react';
import Toggle from '../../media/toggle.png';
import Panel from '../../media/panel-vacio.png';
import House1 from '../../media/1.png';
import House2 from '../../media/4.png';
import House3 from '../../media/11.png';
import House from './components/house';
import ButtonPanel from './components/buttonPanel';
import Fondo from '../../media/fondo.jpg';
import axios from 'axios'; 

import './home.sass';
const clientId = 'kTl4zv9ZbQw83M-CFgX9KLbz9NPdnUJ6Lmzgtd224W0';

const Home = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [numberButtons, setNumberButtons] = useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const [urlImageButtons, setUrlImageButtons] = useState("");

  /**
   * Toggle menu
   */
  const openToggle = () => {
    setOpenMenu(!openMenu);
  }

  /**
   * Show and load buttons
   */
  const showButtons = (number) => {
    if (!openMenu) {
      setOpenMenu(true);
    }
    setNumberButtons(number);
  }

  /**
   * Function to return menu
   */
  const showMenuClick = () => {
    setNumberButtons(0);
    setShowMenu(true);
    setOpenMenu(false);
  }

   /**
   * Set imagen of API
   */
  const setImagen = () => {
    axios.get('https://api.unsplash.com/photos/random?client_id=' + clientId)
    .then((result) => {
      setShowMenu(false);
      setUrlImageButtons(result.data.urls.small);

    })
  }

  /**
   * The first button returns to the menu and the others load the API image 
   * 
  */
  function ButtonsShow() {
    const components = [];
    for (let index = 0; index < numberButtons; index++) {
      if (index === 0) {
        components.push(<ButtonPanel click={showMenuClick}/>);
      } else {
        components.push(<ButtonPanel click={setImagen}/>);
      }
      
    }
    return components;
  }
 
  return (
    <div className='main-container' style={{backgroundImage: `url(${showMenu ? Fondo : urlImageButtons})`}}>
      {showMenu &&
        <div className="house-container">
          <House houseImg={House1} click={showButtons} number={2}/>
          <House houseImg={House2} click={showButtons} number={3}/>
          <House houseImg={House3} click={showButtons} number={4}/>
        </div>
      }
      <div className={openMenu? 'menu-container-open' : 'menu-container-close'}>
        <div className="toggle-container" >
          <img src={Toggle} alt="toggle" onClick={openToggle}></img>
        </div>
        <div className="panel-container">
          <img className="panel-img" src={Panel} alt="panel" ></img>
          <div className="button-container">
            <ButtonsShow number={numberButtons} showMenu={showMenu}/>
          </div>
        </div>

      </div>
    </div>
  );
  
}

export default Home;