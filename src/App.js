import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './root/Header';
import Web3Wrapper from './web3/wrapper/Web3Wrapper'

const wrapperConfig = {
  infura: 'b875684882204055bac61ec57a3ea1a1',
  portis: '7860cc95-2703-40f2-bf2b-04b4ac619dee',
  network: 4,
  rpc: 'https://rinkeby.infura.io/v3/b875684882204055bac61ec57a3ea1a1',
  blockexplorer: { 
    url: 'https://rinkeby.etherscan.io',
    name: 'etherscan'
  },
  biconomy: 'false',
  biconomy_key: '<API KEY>'
}



function App() {
  return (
    <div className="App">
      <Router>
        <Web3Wrapper config={wrapperConfig}>
        <Header />
        <Switch>

          <Route path='/projects/nft-ne-fu1'>
            <Home />
          </Route>
          {/* <Route path='/'>
            <Home />
          </Route> */}

        </Switch>
        {/* <Footer /> */}
        </Web3Wrapper>
      </Router>
    </div>
  );
}

export default App;
