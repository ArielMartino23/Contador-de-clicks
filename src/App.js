import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from  './images/freecodecamp-logo.png'; 
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1);
  }

  const restartCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'> 
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo freeCodeCamp'        
        />
      </div>
      <div className='principal-container'>
        <Counter 
          numClicks={numClicks}
        />
        <Button 
          text='Click'
          isClickButton={true}
          manageClick={manageClick}
        />
        <Button 
          text='Restart'
          isClickButton={false}
          manageClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
