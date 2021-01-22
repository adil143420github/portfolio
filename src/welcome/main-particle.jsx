import React,{ useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import ParticleField from "react-particles-webgl";
import Button from '@material-ui/core/Button';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';
import FloatingActionButtonZoom from '../about/about'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import $ from 'jquery'
import "./welcome.css";
import { Grid } from "@material-ui/core";

export default function MainParticle() {
    const [viewWork, setViewWork] = useState(0);
    const [scrollDown, setScrollDown] = useState(null);
    const [tabValue, setTabValue] = useState('one');
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
    /**
     * 
     * Docs
     * @see https://timellenberger.com/libraries/react-particles-webgl
     *
     * Config Builder
     * @see https://timellenberger.com/particles
     *
     * Repo
     * @see https://github.com/tim-soft/react-particles-webgl
     */
    const config = {
        showCube: false,
        height:'100vh',
        dimension: "2D",
        velocity: 0.3,
        boundaryType: "bounce",
        antialias: true,
        direction: {
            xMin: -1,
            xMax: 1,
            yMin: -1,
            yMax: 1,
            zMin: -1,
            zMax: 1
        },
        lines: {
            colorMode: "rainbow",
            color: "#4e2278",
            transparency: 0.9,
            limitConnections: true,
            maxConnections: 15,
            minDistance: 50,
            visible: true
        },
        particles: {
            colorMode: "rainbow",
            color: "#4e2278",
            transparency: 0.9,
            shape: "circle",
            boundingBox: "canvas",
            count: count,
            minSize: 20,
            maxSize: 50,
            visible: true
        },
        cameraControls: {
            enabled: false,
            enableDamping: true,
            dampingFactor: 0.2,
            enableZoom: true,
            autoRotate: false,
            autoRotateSpeed: 0.1,
            resetCameraFlag: true
        }
    };
    const config2 = {
        showCube: false,
        dimension: '2D',
        velocity: 0.5,
        boundaryType: 'bounce',
        antialias: false,
        direction: {
          xMin: -1,
          xMax: 1,
          yMin: -1,
          yMax: 1,
          zMin: -1,
          zMax: 1
        },
        lines: {
          colorMode: 'rainbow',
          color: '#351CCB',
          transparency: 0.9,
          limitConnections: true,
          maxConnections: 20,
          minDistance: 150,
          visible: true
        },
        particles: {
          colorMode: 'rainbow',
          color: '#3FB568',
          transparency: 0.9,
          shape: 'square',
          boundingBox: 'canvas',
          count: count,
          minSize: 10,
          maxSize: 75,
          visible: true
        },
        cameraControls: {
          enabled: true,
          enableDamping: true,
          dampingFactor: 0.2,
          enableZoom: true,
          autoRotate: true,
          autoRotateSpeed: 0.3,
          resetCameraFlag: false
        }
      }
    const scrollDownFunc=()=>{
        window.scrollTo(0, 873)
    }
    const handleTabChange=(event, value)=>{
        setTabValue(value)
    }
    return (
        <div>
           <ParticleField style={{height:'100%'}} config={config} />
        </div>
    );
}
