import React,{ useState ,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import MyDetails from './my_details';
import Skills from '../skills/skills';
import Projects from '../projects/projects'
import Expereince from '../experience/experience'
import Box from '@material-ui/core/Box';
import $ from 'jquery'
import './styles.css'

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

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

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

export default function FloatingActionButtonZoom(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [scrollHeight, setScrollHeight] = React.useState(null);
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
      var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    console.log("sticky= ",$(window).height())
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  // useEffect(() => {
  //   console.log("use efect abot")
  //   if(value!=null){
  //     window.scrollTo(0,922) 
  //   }
  //   window.onscroll = function(ev) {
  //     if (window.pageYOffset >= 922) {
  //       setScrollHeight(1)
  //   }else if(window.pageYOffset < 922){
  //     setScrollHeight(0)
  //   }
  // };
  //   window.onscroll = function () { myFunction() };
  //   var header = document.getElementById("myHeader");
  //   var sticky = header.offsetTop;
  //   console.log("sticky= ",sticky,window.pageYOffset)
  //   function myFunction() {
  //     if (window.pageYOffset >= 922) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky");
  //     }
  //   }
  // });

  const handleChange = (event, newValue) => {
    console.log("change=",newValue)
    setValue(newValue);
    // window.scrollTo(0,922) 
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    // {
    //   color: 'primary',
    //   className: classes.fab,
    //   icon: <AddIcon />,
    //   label: 'Add',
    // },
    // {
    //   color: 'secondary',
    //   className: classes.fab,
    //   icon: <EditIcon />,
    //   label: 'Edit',
    // },
    // {
    //   color: 'inherit',
    //   className: clsx(classes.fab, classes.fabGreen),
    //   icon: <UpIcon />,
    //   label: 'Expand',
    // },
  ];
  console.log("sticky= ",window.pageYOffset)
  return (
    <div className={classes.root}>
      {/* <div></div> */}
      <div class="header" id="myHeader">
        <AppBar position="static" color="default" style={{ backgroundColor: '#0d2c5a' }} >
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
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MyDetails screenWidth={props.screenWidth}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Skills screenWidth={props.screenWidth}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Expereince screenWidth={props.screenWidth}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Projects screenWidth={props.screenWidth}/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </div>
  );
}
