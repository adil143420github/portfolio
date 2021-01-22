import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
    height="95vh"
    style={{
       opacity:'0.93',
      //  background:'url(https://technext.github.io/DarkJoe/assets/images/bg.jpg)'
      background: 'url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)',
        // backgroundColor: '#0d2c5a',
        
      }}
      params={{
        particles: {
          number: {
            // value: 150,
            density: {
              enable: true,
              // value_area: 500
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: "#e31b6d"
            },
            polygon: {
              nb_sides: 4
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: '100%'
            }
          },
          opacity: {
            value: 0.4008530152163807,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1.5,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 50,
            color: "#fff",
            opacity: 1,
            width: 1
          },
          // line_linked: {
          //   enable: true,
          //   distance: 0,
          //   color: "#ffffff",
          //   opacity: 0.3687847739990702,
          //   width: 0.6413648243462091
          // },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);
