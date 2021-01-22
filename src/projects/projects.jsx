import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TransitionsModal from '../modal'
import './projects.css'
import './ci-proj.jpg'
import './Gtm.jpg'
import './jorney-builder.jpg'


export default function Projects(props) {
    const [checked, setChecked] = React.useState(false);
    const [over, setMouseOver] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [proj, setProj] = React.useState(0);
    const [modal, setModal] = React.useState(0);
    const [projName, setProjName] = React.useState(0);


    //   const handleChange = () => {
    //     setChecked((prev) => !prev);
    //   };

    const handleChange = (newValue,name) => {
        setProj(newValue);
        setModal(true);
        setProjName(name)
    };

    const changeProject = (val) => {
        setValue(val);
    };

    const closeModal = () => {
        setModal(false);
      };

    function a11yProps(index) {
        return {
            id: `action-tab-${index}`,
            'aria-controls': `action-tabpanel-${index}`,
        };
    }

    return (
        <div className="height_container">
            <Grid container >
            {/* <Grid xs={12}>
            <br/>
          </Grid> */}
                <Grid xs={12}>
                    <TransitionsModal flag={'proj'} project={projName} value={proj} open={modal} screenWidth={props.screenWidth} closeModal={closeModal} />
                </Grid>
                <Grid xs={12}>
                    <div class="about_about" data-animation="slide-in-left">
                        PROJECTS
                    </div>
                    <div class="centered line"></div>
                </Grid>

                <Grid xs={1} sm={4} md={4} lg={4} className="all_container">
                    <span className={value == 0 ? "all_active proj_font proj_width" : "letter_all proj_font "} onClick={() => changeProject(0)}>All</span>
                </Grid>
                <Grid xs={6} sm={4} md={4} lg={4} className="react_container height_btn_proj">
                    <span className={value == 1 ? "react_active proj_font proj_width" : "letter proj_font "} onClick={() => changeProject(1)}>ReactJs/RubyOnRails</span>
                </Grid>
                <Grid xs={5} sm={4} md={4} lg={4} className="java_container height_btn_proj">
                    <span className={value == 2 ? "react_active proj_font proj_width" : "letter proj_font "} onClick={() => changeProject(2)}>Java/ReactJs</span>
                </Grid>
                <Grid xs={12}>
                    <br />
                </Grid>

                {value == 0 ? <Grid xs={12}>
                    <Grow
                        in={true}
                        style={{ transformOrigin: '' }}
                        {...(true ? { timeout: 1000 } : {})}
                    >
                        <img className="img_border" onClick={()=>handleChange(4,'Journey Builder')} src={require('./jorney-builder.jpg')} />
                    </Grow>
                    &nbsp;&nbsp;
              <Grow
                        in={true}
                        style={{ transformOrigin: '' }}
                        {...(true ? { timeout: 1000 } : {})}
                    ><img className="img_border" onClick={()=>handleChange(5,'CodeInsight')} src={require('./ci-proj.jpg')} />
                    </Grow>
                    &nbsp;&nbsp;
              <Grow
                        in={true}
                        style={{ transformOrigin: '' }}
                        {...(true ? { timeout: 1000 } : {})}
                    ><img className="img_border" onClick={()=>handleChange(6,'Open GTM')} src={require('./Gtm.jpg')} />
                    </Grow>
                </Grid> : ''}
                {value == 1 ?
                    <Grid xs={12}><Grow
                        in={true}
                        style={{ transformOrigin: '' }}
                        {...(true ? { timeout: 1000 } : {})}
                    ><img className="img_border" onClick={()=>handleChange(5,'CodeInsight')} src={require('./ci-proj.jpg')} />
                    </Grow>
                        <Grow
                            in={true}
                            style={{ transformOrigin: '' }}
                            {...(true ? { timeout: 1000 } : {})}
                        >
                            <img className="img_border" onClick={()=>handleChange(4,'Journey Builder')} src={require('./jorney-builder.jpg')} />
                        </Grow>
                    </Grid> : ''}
                {value == 2 ? <Grid xs={12}><Grow
                    in={true}
                    style={{ transformOrigin: '' }}
                    {...(true ? { timeout: 1000 } : {})}
                ><img className="img_border" onClick={()=>handleChange(6,'Open GTM')} src={require('./Gtm.jpg')} />
                </Grow></Grid> : ''}

                {/* <Grid></Grid> */}

            </Grid>
        </div>
    );
}
