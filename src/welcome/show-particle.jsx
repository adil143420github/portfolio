import React,{ useState ,useEffect}  from "react";
import ParticleComponent from "./base-particle";
import FloatingActionButtonZoom from '../about/about'

import Scroll from './scroll'
import $ from 'jquery'

export default function ShowParticle() {
  const [screenWidth, setScreenWidth] = useState(window.screen.availWidth);
    const [count, setCount] = useState(200);
    useEffect(() => {
        $(window).resize(function() {
            setScreenWidth(window.screen.availWidth)
            if(screenWidth<=425){
                setCount(50)
            }else{
                setCount(200) 
            }
            });      
      });

  return (
    
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
      >
          <div className="user_name_container">
            <div className="user_align">
            <h1 className="font_name">ADIL PASHA</h1>
            <h4 className="font font_web">I'm a full-stack web developer.</h4>
            </div>
          </div>
          {/* write down ur content for further appbar */}

          {/* <FloatingActionButtonZoom screenWidth={screenWidth}/> */}
          <Scroll screenWidth={screenWidth} />
        </div>
      </div>
   
  );
}
