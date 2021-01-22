import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from './animated-skill';
import ChangingProgressProvider from './speedo-skill';
import { easeQuadInOut } from "d3-ease";
import $ from 'jquery'
import './styles.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import StorageIcon from '@material-ui/icons/Storage';
import DraftsIcon from '@material-ui/icons/Drafts';
import './react-icon.png'
import './rails-img.png'

const BorderLinearProgress = withStyles({
    root: {
        height: 25,
        backgroundColor: lighten('#ded9d9', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#00a1a7',
    },
})(LinearProgress);

export default function Skills(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useeefct= ",$(window).height())
        // window.scroll(0, $(window).height())
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
                    <div class="about_about" data-animation="slide-in-left">
                        SKILLS
                    </div>
                    <div class="centered line"></div>
                </Grid>
                <Grid xs={12}>
                    <div className="skill_msg">I've worked with a wide variety of programming languages.
                    For web applications I use ReactJs and Javascript.
                    Whenever I need the most performance possible I obviously go with Redux and finally
                    when I am building prototypes or working on my  projects I fall back on ReactJs with Material UI</div>
                </Grid>
                <Grid xs={0} lg={1} md={0}></Grid>
                <Grid xs={6} lg={2}md={4}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={95}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            ReactJs
                         </Grid>
                    </Grid>
                </Grid>
                <Grid xs={6} lg={2}md={4}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={90}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            Redux
                         </Grid>
                    </Grid>

                </Grid>
                <Grid xs={6} lg={2}md={4}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={70}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            Ruby On Rails
                         </Grid>
                    </Grid>

                </Grid>
                <Grid xs={6} lg={2}md={4}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={90}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            CSS
                         </Grid>
                    </Grid>

                </Grid>
                <Grid xs={6} lg={2}md={4}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={85}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            HTML
                         </Grid>
                    </Grid>

                </Grid>
                <Grid xs={0} lg={1}md={0}></Grid>

                {/* 2nd rowwww3 */}
                {props.screenWidth<=1024?'':<Grid xs={12}><br/></Grid>}
                <Grid xs={0} lg={3} md={0}></Grid>
                <Grid xs={6} lg={2} md={4}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={85}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            JavaScript
                         </Grid>
                    </Grid>

                </Grid>
                <Grid xs={6} lg={2}md={6}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={60}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            Java
                         </Grid>
                    </Grid>

                </Grid>
                <Grid xs={6} lg={2}md={6}>
                    <Grid container direction="row">
                        <Grid container direction="row" className="skill_row">
                            <AnimatedProgressProvider
                                circleRatio={0.75}
                                valueStart={0}
                                valueEnd={60}
                                duration={2}
                                easingFunction={easeQuadInOut}
                            // repeat
                            >
                                {value => {
                                    const roundedValue = Math.round(value);
                                    return (
                                        <CircularProgressbar
                                            value={value}
                                            text={`${roundedValue}%`}
                                            styles={buildStyles({ pathTransition: "none" ,textColor: "#0d2c5a",pathColor: "#2C5171",})}
                                        />
                                    );
                                }}
                            </AnimatedProgressProvider>
                        </Grid>
                        <Grid container direction="row" className="skill_row label_abt">
                            UI Design
                         </Grid>
                    </Grid>

                </Grid>
                <Grid xs={0} lg={3}md={0}></Grid>
                <Grid xs={12}>
                    <br/>
                </Grid>
                <Grid xs={12}>
                    <div class="col-full skill-container">
                        <h3>Most frequently used tools</h3>
                    </div>
                </Grid>
                <Grid xs={6} className="list_items">
                    <List component="nav" aria-label="main mailbox folders">
                    <div class="col-full skill-container">
                        <h4>FRAMEWORKS</h4>
                    </div>
                        <ListItem>
                            <ListItemIcon>
                                <img src={require('./react-icon.png')} className="react-icon" />
                            </ListItemIcon>
                            <ListItemText primary="ReactJs" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={require('./rails-img.png')} className="react-icon" />
                            </ListItemIcon>
                            <ListItemText primary="Ruby On Rails" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid xs={6} className="list_items">
                <List component="nav" aria-label="main mailbox folders">
                <div class="col-full skill-container">
                        <h4>SOFTWARE</h4>
                    </div>
                        <ListItem>
                            <ListItemIcon>
                                <GitHubIcon className="github_icon"/>
                            </ListItemIcon>
                            <ListItemText primary="Git" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <StorageIcon className="databse_icon" />
                            </ListItemIcon>
                            <ListItemText primary="MySql" />
                        </ListItem>
                    </List>
                </Grid>




                {props.screenWidth > 425 ? <Grid xs={0} sm={0} md={1} lg={3}>
                </Grid> : ''}
            </Grid>
        </div>
    );
}