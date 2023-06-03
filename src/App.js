
import './App.css';
import {useState} from 'react';

function App() {

  const [counterAnger, oneMoreAnger] = useState(0);
  const [counterCry, oneMoreCry] = useState(0);
  const [counterLaugh, oneMoreLaugh] = useState(0);
  const [counterSmile, oneMoreSmile] = useState(0);

  const [angerStatus, changeAngerStatus] = useState(false);
  const [cryStatus, changeCryStatus] = useState(false);
  const [laughStatus, changeLaughStatus] = useState(false);
  const [smileStatus, changeSmileStatus] = useState(false);

  function checkWinner() {
    let emojiArr = [counterAnger, counterCry, counterLaugh, counterSmile];
    let emojiStatusArr = [angerStatus, cryStatus, laughStatus, smileStatus];

    if (counterAnger + counterCry + counterLaugh + counterSmile === 0) {
      return alert('Choice the emoji');
    }

    emojiArr.sort((a,b) => a - b);
    let emojiWinnerNumber = emojiArr[emojiArr.length - 1];

    for (let element of emojiStatusArr) {
      if (element) {
        changeAngerStatus(false);
        changeCryStatus(false);
        changeLaughStatus(false);
        changeSmileStatus(false);
      };
    };

    if (emojiWinnerNumber === counterAnger) {
      changeAngerStatus(true);
    } else if (emojiWinnerNumber === counterCry) {
      changeCryStatus(true);
    } else if (emojiWinnerNumber === counterLaugh) {
      changeLaughStatus(true);
    } else if (emojiWinnerNumber === counterSmile) {
      changeSmileStatus(true);
    };


  };



  return (
    <div className="App">
    <div className='emoji-general-container'>
      <div className='emoji-container'>
        <a href="#" onClick={() => oneMoreAnger(counterAnger + 1)} className= {angerStatus ? 'emoji active' : 'emoji'}>
        <img src={require("./images/anger.png")} />
        <span className='counter'>{counterAnger}</span>
        </a>
      </div>

      <div className='emoji-container'>
        <a href="#" onClick={() => oneMoreCry(counterCry + 1)} className= {cryStatus ? 'emoji active' : 'emoji'}>
        <img src={require("./images/cry.png")} />
        <span className='counter'>{counterCry}</span>
        </a>
      </div>

      <div className='emoji-container'>
        <a href="#" onClick={() => oneMoreLaugh(counterLaugh + 1)} className= {laughStatus ? 'emoji active' : 'emoji'}>
        <img src={require("./images/laugh.png")}/>
        <span className='counter'>{counterLaugh}</span>
        </a>
      </div>

      <div className='emoji-container'>
        <a href="#" onClick={() => oneMoreSmile(counterSmile + 1)} className= {smileStatus ? 'emoji active' : 'emoji'}>
        <img src={require("./images/smile.png")} />
        <span className='counter'>{counterSmile}</span>
        </a>
      </div>
    </div>

      <button className='button-results' onClick={() => checkWinner()}> Show results </button>
    </div>
  );
}

export default App;
