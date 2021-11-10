import React from 'react';
import Navbar from './Components/Navbar';
import Description from './Components/Description';
import Service from './Components/Service';
import Feature from './Components/Feature';
import Price from './Components/Price';
import Subscription from './Components/Subscription';
import Footer from './Components/Footer';
import Employee from './Employee';

import './App.css';

function App() {
  function greet(name) {
    alert(`hello there its from app ${name}`);
  }
  return (
    <div>
      {/* <Employee firstName="Nira" lastName="Tamang" age="23" eyeColor="brown" func={greet} /> */}
      <Navbar />
      <Description />
      <Service />
      <Feature />
      <Price />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
