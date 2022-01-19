import React, {Fragment} from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Benefits from './components/Benefits';
import Produtive from './components/Produtive';
function App() {
  return (
    <Fragment>
    <Header/>
    <Intro/>
    <Benefits/>
    <Produtive/>
    </Fragment>

  );
}

export default App;
