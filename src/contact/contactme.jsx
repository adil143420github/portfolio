import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import EmailIcon from '@material-ui/icons/Email';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import $ from 'jquery'
import './contact.css'

export default function ContactMe(props) {
    const [checked, setChecked] = React.useState(false);
    const [over, setMouseOver] = React.useState(false);
    const [windowHeight, setWindowHeight] = React.useState(false);
    useEffect(() => {
        console.log("useEffect conatct= ",$(window).height())
        setWindowHeight($(window).height())
    });


    return (
        <div className="height_container">
            {/* style={{marginBottom:(10/100*windowHeight)}} */}
            <Grid container >
            <Grid xs={12}>
                    <div class="about_about" data-animation="slide-in-left">
                        CONTACT
                    </div>
                    <div class="centered line"></div>
                </Grid>
                <Grid xs={12}>
                    <br/>
                </Grid>
                <Grid xs={12} lg={12} md={12} sm={12}>
                    <div class="col-full" style={{marginBottom: '25px'}}>
                        Need anything built, want to work together or simply want to have a chat?
                        <br/>
                        You can call me at 8904473364/6360574973 or<br/>
                        Drop me an e-mail  or simply fill out the form below and I will reply to you soon!								
                        <input type="hidden" id="thank_you" value="Thank you for contacting me!"/>
							</div>
                </Grid>
                <Grid xs={12} lg={12} md={12} sm={12}>
                    <MailOutlineIcon onClick={() => window.open('mailto:adil.shezin94@gmail.com')} className={props.screenWidth<=768?"contact_icons_min mail_icon":"contact_icons mail_icon"}/>
                </Grid>
                <Grid xs={12}>
                    <br/>
                </Grid>


                <Grid xs={12}>
                    <br/>
                </Grid> <Grid xs={12}>
                    <br/>
                </Grid> <Grid xs={12}>
                    <br/>
                </Grid> <Grid xs={12}>
                    <br/>
                </Grid>
                
            </Grid>
        </div>
    );
}
