import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import TransitionsModal from '../modal'
import $ from 'jquery'
import './c1.png'
import './c2.png'
import './c3.png'
import './gst-table.png'
import './gst-table2.jpeg'
import './gst2.png'
import './experience.css'

export default function Expereince(props) {
  // Declare a new state variable, which we'll call "count"
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {

  });

  const closeModal = () => {
    setOpen(false);
  };

  const onSetOpen = (flag, value) => {
    setOpen(flag);
    setValue(value)
  };

  return (
    <div className="height_container">
      <Grid container>
        {/* <Grid xs={12}>
            <br/>
          </Grid> */}
        <Grid xs={12}>
          <TransitionsModal flag={'exp'} value={value} open={open} screenWidth={props.screenWidth} closeModal={closeModal} />
        </Grid>
        <Grid xs={12}>
          <div className="about_about" data-animation="slide-in-left">
            EXPEREINCE
          </div>
          <div className="centered line"></div>
        </Grid>
        <Grid xs={12}>
          <div class="col-full">
            <h3 className="designation">Software Engineer (ReactJs)</h3>
            <div className="job_attributions">WEB DEVELOPMENT <span class="bullet">•</span>  UI DESIGN <span class="bullet">•</span> FULL STACK DEVELOPMENT</div>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="exp_text_center">
            I've 3+ years of experience overall and 2+ years in this company.
            I am responsible for developing, testing UI applications using ReactJs framework as front end and Ruby On Rails as backend.
            I develop UI/UX softwares for clients.
              </div>
        </Grid>
        <Grid xs={12}>
          <br />
        </Grid>
        <Grid xs={6}>
          <div className="col-1-2 job-company"><strong>Company:</strong> <a className="comp_highlight" href="http://www.cerner.com/" target="_blank">Cerner</a></div>
        </Grid>
        <Grid xs={6}>
          <div class="col-1-2 job-period"><strong>Period:</strong> Oct 2018 - Present</div>
        </Grid>
        <Grid xs={12}>
          <br />
        </Grid>
        <Grid xs={4} className="c1_container">
          <Grow
            in={true}
            style={{ transformOrigin: '' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Avatar alt="Remy Sharp"
              src={require('./c1.png')}
              onClick={() => onSetOpen(true, 1)}
              className={props.screenWidth <= 425 ? "speed_avatar_min" : "company"} >
            </Avatar>
          </Grow>
        </Grid>
        <Grid xs={4} className="c1_container">
          <Grow
            in={true}
            style={{ transformOrigin: '' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Avatar alt="Remy Sharp"
              src={require('./c2.png')}
              onClick={() => onSetOpen(true, 2)}
              className={props.screenWidth <= 425 ? "speed_avatar_min" : "company"} >
            </Avatar>
          </Grow>
        </Grid>
        <Grid xs={4} className="c1_container">
          <Grow
            in={true}
            style={{ transformOrigin: '' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Avatar alt="Remy Sharp"
              src={require('./c3.png')}
              onClick={() => onSetOpen(true, 3)}
              className={props.screenWidth <= 425 ? "speed_avatar_min" : "company"} >
            </Avatar>
          </Grow>
        </Grid>

        <Grid xs={12}>
          <br />
        </Grid>
        <Grid xs={12}>
          <div class="col-full">
            <h3 className="designation">Software Traineee</h3>
            <div className="job_attributions">WEB DEVELOPMENT <span class="bullet">•</span>  UI DESIGN <span class="bullet">•</span>  DATA ANALYSIS <span class="bullet">•</span>  TAX CALCULATION <span class="bullet">•</span> FULL STACK DEVELOPMENT</div>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="exp_text_center">
            I've 1+  years in this company.
            I am responsible for developing, testing UI applications using ReactJs framework as front end and Java as backend for Tax calculation.
            I develop UI/UX softwares for clients.
              </div>
        </Grid>
        <Grid xs={12}>
          <br />
        </Grid>
        <Grid xs={6}>
          <div className="col-1-2 job-company"><strong>Company:</strong> <a className="comp_highlight" href="https://www.thomsonreuters.com/" target="_blank">Thomson Reuters</a></div>
        </Grid>
        <Grid xs={6}>
          <div class="col-1-2 job-period"><strong>Period:</strong> Mar 2017 - Oct 2018</div>
        </Grid>
        <Grid xs={12}>
          <br />
        </Grid>
        <Grid xs={4} className="c1_container">
          <Grow
            in={true}
            style={{ transformOrigin: '' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Avatar alt="Remy Sharp"
              src={require('./gst-table.png')}
              onClick={() => onSetOpen(true, 4)}
              className={props.screenWidth <= 425 ? "speed_avatar_min" : "company"} >
            </Avatar>
          </Grow>
        </Grid>
        <Grid xs={4} className="c1_container">
          <Grow
            in={true}
            style={{ transformOrigin: '' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Avatar alt="Remy Sharp"
              src={require('./gst-table2.jpeg')}
              onClick={() => onSetOpen(true, 5)}
              className={props.screenWidth <= 425 ? "speed_avatar_min" : "company"} >
            </Avatar>
          </Grow>
        </Grid>
        <Grid xs={4} className="c1_container">
          <Grow
            in={true}
            style={{ transformOrigin: '' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            <Avatar alt="Remy Sharp"
              src={require('./gst2.png')}
              onClick={() => onSetOpen(true, 6)}
              className={props.screenWidth <= 425 ? "speed_avatar_min" : "company"} >
            </Avatar>
          </Grow>
        </Grid>


      </Grid>
    </div>
  );
}