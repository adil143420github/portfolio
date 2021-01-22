import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../src/experience/c1.png'
import '../src/experience/c2.png'
import '../src/experience/c3.png'
import '../src/experience/gst-table.png'
import '../src/experience/gst-table2.jpeg'
import '../src/experience/gst2.png'
import './projects/ci-proj.jpg'
import './projects/Gtm.jpg'
import './projects/jorney-builder.jpg'
import './App.css'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      props.closeModal()
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullWidth={true} maxWidth={'md'} onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" className="dialog_title" onClose={handleClose}>
          <Grid container spacing={0}>
            <Grid xs={11} className="dailog_container">
              <span className="dailog_title">{props.flag=='exp'?'Expereince':props.project}</span>
            </Grid>
            <Grid xs={1} className="dailog_icon">
              <ClearIcon className="clear_icon" onClick={() => handleClose()} />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          {props.flag=='exp'?
          <div>
          <img className={props.screenWidth <= 425 ?"img_exp_min":"img_exp"}
           src={props.value==1?require('../src/experience/c1.png')
           :props.value==2?require('../src/experience/c2.png')
           :props.value==3?require('../src/experience/c3.png')
          :props.value==4?require('../src/experience/gst-table.png')
          :props.value==5?require('../src/experience/gst-table2.jpeg')
          :require('../src/experience/gst2.png')}></img>
        </div>:
        <Grid container>
          <Grid xs={12}>
          <img className={props.screenWidth <= 425 ?"img_exp_min img_proj":"img_exp img_proj"}
           src={
          props.value==4?require('./projects/jorney-builder.jpg')
          :props.value==5?require('./projects/ci-proj.jpg')
          :require('./projects/Gtm.jpg')}></img>
          <div class="proj_line"></div>
          </Grid>
          <Grid xs={12}>
           <h3>{props.project}</h3>
            <div class="projname_line"></div>
          </Grid>
          <Grid xs={12}>
            {props.value==4?<div class="detail">Journey Builder is a tool for cerner clients mostly health industry. Which generates tests or exams for health care industry associates.</div>
            :props.value==5?<div class="detail">CodeInsight is internal tool which helps the users to track CR requests based on CR number, file, method or by keywords.
            User can look for 10 years old CR request within lesser time also see how many files have been changed for that defect or Jira while working on file from IDE or web portal.</div>
            :<div class="detail">Open GTM is a global trade management tool for client "Honda Cars India". Its a GST calculator for all thier imports from china and japan.
            Which includes Invoice for each and every part they import and generate monthly reports.</div>}
          </Grid>

        </Grid>}
        </DialogContent>
       
      </Dialog>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
          <div className={classes.paper}>
            <img className={props.screenWidth <= 425 ?"img_exp_min":"img_exp"}
             src={props.value==1?require('../src/experience/c1.png'):props.value==2?require('../src/experience/c2.png'):require('../src/experience/c3.png')}></img>
          </div>
      </Modal> */}
    </div>
  );
}
