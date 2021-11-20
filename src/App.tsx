import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="leftside">
          <div>
            <div><h2 className="title">Pocket<br/>Pandas</h2></div>
            <div className="links">
              <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
              <a href="https://discord.com/"><i className="fab fa-discord"></i></a>
              <a href="https://discord.com/channels/879773438456254515/879799637169561720" className="channel"><img src="./assets/channel.png" alt="channel" /></a>
            </div>
          </div>
          <div className="mint">
            <div><button className="btn-mint">Mint</button></div>
            <div className="mint-price"><h2>Price: 1 sol<br/>per panda</h2></div>
          </div>
          <div className="wallet"><button className="btn-wallet">Connect wallet</button></div>
      </div>

      <div className="rightside">
          <div className="cards">
            <div><img src="./assets/panda_2.png" className="" alt="panda_2" /></div>
            <div><img src="./assets/panda_1.png" className="" alt="panda_1" /></div>
            <div><img src="./assets/panda_4.png" className="" alt="panda_4" /></div>
            <div><img src="./assets/panda_3.png" className="" alt="panda_3" /></div>
          </div>
      </div>
    </div>
  );
}

export default App;
