import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import SpeedIcon from '@material-ui/icons/Speed';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TimelineIcon from '@material-ui/icons/Timeline';
import $ from 'jquery'
import './adil_avtar.jpeg'
import './styles.css'

export default function MyDetails(props) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scroll(0,$(window).height())
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div className="height_container">
      <Grid container className="fill_height">
      {/* <Grid xs={12}>
            <br/>
          </Grid> */}
          <Grid xs={12}>
          <div className="about_about" data-animation="slide-in-left">
            ABOUT
          </div>
          <div className="centered line"></div>
          </Grid>
          <Grid xs={6} sm={6} md={3}>
          <Avatar alt="Remy Sharp"
            className={props.screenWidth <= 425 ?"speed_avatar_min":"speed_avatar"}  >
            <SpeedIcon  className={props.screenWidth <= 425 ?"speed_icon_min":"speed_icon"} />
          </Avatar>
          <div className="waypoint animated fade-in" data-animation="fade-in">
                  <div className="label_abt bold_abt">Fast</div>
                  <div className="abt_padding">
                    Fast load times and lag free interaction, my highest
                    priority.
                  </div>
                </div>
          </Grid>
          
          <Grid xs={6} sm={6} md={3}>
          <Avatar alt="Remy Sharp"
            className={props.screenWidth <= 425 ?"speed_avatar_min":"speed_avatar"}  >
            <AspectRatioIcon  className={props.screenWidth <= 425 ?"speed_icon_min":"speed_icon"} />
          </Avatar>
          <div className="waypoint animated fade-in" data-animation="fade-in" data-delay=".2s" style={{animationDelay: "0.2s"}}>
                  <div className="label_abt bold_abt">Responsive</div>
                  <div className="abt_padding">My layouts will work on any device, big, medium or small.</div>
                </div>
          </Grid>

          <Grid xs={6} sm={6} md={3}>
          <Avatar alt="Remy Sharp"
            className={props.screenWidth <= 425 ?"speed_avatar_min":"speed_avatar"}  >
            <EmojiObjectsIcon  className={props.screenWidth <= 425 ?"speed_icon_min":"speed_icon"} />
          </Avatar>
          <div className="waypoint animated fade-in" data-animation="fade-in" data-delay=".4s" style={{animationDelay: "0.4s"}}>
                  <div className="label_abt bold_abt">Intuitive</div>
                  <div className="abt_padding">Strong and first preference for easy to use, intuitive UX/UI.</div>
                </div>
          </Grid>

          <Grid xs={6} sm={6} md={3}>
          <Avatar alt="Remy Sharp"
            className={props.screenWidth <= 425 ?"speed_avatar_min":"speed_avatar"} >
            <TimelineIcon  className={props.screenWidth <= 425 ?"speed_icon_min":"speed_icon"} />
          </Avatar>
          <div className="waypoint animated fade-in" data-animation="fade-in" data-delay=".6s" style={{animationDelay: "0.6s"}}>
                  <div className="label_abt bold_abt">Dynamic</div>
                  <div className="abt_padding">
                    Websites don't have to be static, I love making pages come
                    to life.
                  </div>
                </div>
          </Grid>

          <Grid xs={12}>
            {' '}
          </Grid>


          <Grid xs={12} className="avtar_container">
          <Avatar alt="Remy Sharp" 
          src={require('./adil_avtar.jpeg')} 
          className={props.screenWidth<=425?"centered avatar_small":"centered avatar_full"} />
          </Grid>
          <Grid xs={12}>
          <div className="about_msg">
                I'm a Front-End Developer(ReactJs) for{' '}
                <a className="comp_highlight" href="http://www.cerner.com/" target="_blank">Cerner Corporation</a>
                {' '}from Banglore, India.
                <br/>
                I have serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences.
                <br/>
                <span className="page-link highlight" dest="contact">Let's make something special.</span>
              </div>
          </Grid>


          {/* <Grid xs={12} className="avtar_container">
          <Avatar alt="Remy Sharp" 
          src={require('./adil_avtar.jpeg')} 
          className={props.screenWidth<=425?"centered avatar_small":"centered avatar_full"} />
          </Grid>
          <Grid xs={12}>
          <div className="about_msg">
                I'm a Front-End Developer(ReactJs) for{' '}
                <a className="comp_highlight" href="http://www.cerner.com/" target="_blank">Cerner Corporation</a>
                {' '}from Banglore, India.
                <br/>
                I have serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences.
                <br/>
                <span className="page-link highlight" dest="contact">Let's make something special.</span>
              </div>
          </Grid> */}


      </Grid>
    </div>
  );
}
//src={require('./adil_avtar.jpeg')}