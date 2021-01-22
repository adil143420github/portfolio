import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import MyDetails from '../about/my_details';
import Skills from '../skills/skills';
import Projects from '../projects/projects'
import ContactMe from '../contact/contactme'
import Expereince from '../experience/experience'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import { StickyContainer, Sticky } from "react-sticky";
import { Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import './scrollcss.css'
import $ from 'jquery'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        // width: 500,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};



export default function Scroll(props) {
    const [count, setCount] = useState(200);
    const [value, setValue] = React.useState(0);
    const [scroll, setScroll] = React.useState(0);
    const [classList, setClassList] = React.useState(0);
    const [stickyval, setSticky] = React.useState(0);
    const classes = useStyles();
    const theme = useTheme();
    const prevScrollY = useRef(0);
    useEffect(() => {
       
    });

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        window.scroll(0,$(window).height())
    };

    function a11yProps(index) {
        return {
            id: `action-tab-${index}`,
            'aria-controls': `action-tabpanel-${index}`,
        };
    }
    const fabs = []

    return (
        <div id={value==5?"":"outer"}>
            <StickyContainer>
                <Sticky>{({ style }) => 
                <div style={style} className="sticky_header">
                    <AppBar position="static" color="default" style={{ backgroundColor: '#0d2c5a',zIndex:1 }} >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="About" {...a11yProps(0)} className={value == 0 ? "tabs active_tab" : "tabs"} />
                        <Tab label="Skills" {...a11yProps(1)} className={value == 1 ? "tabs active_tab" : "tabs"} />
                        <Tab label={props.screenWidth <= 425 ? "Exp" : "Experience"} {...a11yProps(2)} className={value == 2 ? "tabs active_tab" : "tabs"} />
                        <Tab label={props.screenWidth <= 375 ? "Port" : "Portfolio"} {...a11yProps(3)} className={value == 3 ? "tabs active_tab" : "tabs"} />
                        <Tab label="Contact" {...a11yProps(5)} className={value == 4 ? "tabs active_tab" : "tabs"} />
                    </Tabs>
                </AppBar>
                    </div>
                }</Sticky>
            
                {/* <AppBar position="static" color="default" style={{ backgroundColor: '#0d2c5a' }} >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="About" {...a11yProps(0)} className={value == 0 ? "tabs active_tab" : "tabs"} />
                        <Tab label="Skills" {...a11yProps(1)} className={value == 1 ? "tabs active_tab" : "tabs"} />
                        <Tab label={props.screenWidth <= 425 ? "Exp" : "Experience"} {...a11yProps(2)} className={value == 2 ? "tabs active_tab" : "tabs"} />
                        <Tab label={props.screenWidth <= 375 ? "Port" : "Portfolio"} {...a11yProps(3)} className={value == 3 ? "tabs active_tab" : "tabs"} />
                        <Tab label="Contact" {...a11yProps(5)} className={value == 4 ? "tabs active_tab" : "tabs"} />
                    </Tabs>
                </AppBar> */}

            <div>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <MyDetails screenWidth={props.screenWidth} />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Skills screenWidth={props.screenWidth} />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Expereince screenWidth={props.screenWidth} />
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <Projects screenWidth={props.screenWidth} />
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        <ContactMe screenWidth={props.screenWidth}/>
                    </TabPanel>
                </SwipeableViews>
            </div>
            <div id="inner_remaining">  </div>
            </StickyContainer>
            {value==4?<Grid container className="footer_banner">
            <Grid xs={2}>   
                </Grid>
                <Grid xs={2} >
                <LinkedInIcon className="media_icons in_icon"/>
                </Grid>
                <Grid xs={2} >
                <FacebookIcon onClick={() => window.open('https://www.facebook.com/profile.php?id=100010254340897')} className="media_icons fb_Icon"/>
                </Grid>
                <Grid xs={2} >
                <WhatsAppIcon onClick={()=>window.open("https://wa.me/918904473364")} className="media_icons whatsup_icon"/>
                </Grid>
                <Grid xs={2} >
                <InstagramIcon onClick={() => window.open('https://www.instagram.com/shezin_romeo/')} className="media_icons instagra_icon"/>
                </Grid>
                <Grid xs={2}>   
                </Grid>
            </Grid>:''}
        </div>
    );
}
