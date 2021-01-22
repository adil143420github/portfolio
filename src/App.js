import React,{ useState ,useEffect} from 'react';
import logo from './logo.svg';
import $ from 'jquery'
import './App.css';
import MainParticle from './welcome/main-particle'
import ShowParticle from './welcome/show-particle';

function App() {
  useEffect(() => {
    $(window).on('beforeunload', function() {
      $(window).scrollTop(0); 
  });
  })
  return (
    <div className="App">
     {/* <Particle/> */}
     <ShowParticle/>
     
    </div>
  );
}

export default App;
