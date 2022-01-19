import React, {Fragment} from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Benefits from './components/Benefits';
import Produtive from './components/Produtive';
import Testimonials from './components/Testimonials';
import Form from './components/Form';
function App() {
  return (
    <Fragment>
    <Header/>
    <Intro/>
    <Benefits/>
    <Produtive/>
    <Testimonials/>
    <Form/>
    </Fragment>

  );
}

export default App;
