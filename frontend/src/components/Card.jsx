import React from 'react'
import {createUseStyles} from 'react-jss'
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const useStyles = createUseStyles({
    card: {
        backgroundColor: 'rgb(104, 33, 125)',
        margin: '20px',
        width: '300px',
        height: '500px',
        borderRadius: '25px'
    },
    cardArea: {
        display: 'flex',
        flexDirection : 'column',
        textAlign: 'center',
        "-webkit-justify-content": 'flex-start',
        height: '500px'
    },
    cardMedia: {
        height:'280px',
        width:'300px',
        padding: '10px',
        borderRadius: '25px'
      },
      cardText: {
        fontFamily: 'Quicksand',
        color: '#ffffff',
        fontSize: '22px'
      },
      cardDescription: {
        fontFamily: 'Quicksand',
        color: '#ffffffba',
        fontSize: '14px',
        padding : '20px'
      },
      cardReward:{
        fontFamily: 'Quicksand',
        color: '#ffffff',
        fontSize: '14px',
      },
      cardToken: {
        fontFamily: 'Quicksand',
        color: '#ffffff',
        fontSize: '14px',
      },
      displayReward: {
        display: 'flex',
        justifyContent: 'space-between'
      },
  })

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Card = () => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
    <MuiCard sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea className={classes.cardArea} onClick={handleClickOpen}>
        <CardMedia
          component="img"
          image={require('../assets/iphone.png')}
          alt="iphone"
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={classes.cardText}>
            Iphone 14
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.cardDescription}>
           IPhone 14 Pro. Avec Dynamic Island. Détection des accidents. Un appareil photo 48 Mpx pour une résolution jusqu'à 4x supérieure.
           IPhone 14 Pro. Avec Dynamic Island. Détection des accidents. Un appareil photo 48 Mpx pour une résolution jusqu'à 4x supérieure.
           IPhone 14 Pro. Avec Dynamic Island. Détection des accidents. Un appareil photo 48 Mpx pour une résolution jusqu'à 4x supérieure.
           IPhone 14 Pro. Avec Dynamic Island. Détection des accidents. Un appareil photo 48 Mpx pour une résolution jusqu'à 4x supérieure.
           IPhone 14 Pro. Avec Dynamic Island. Détection des accidents. Un appareil photo 48 Mpx pour une résolution jusqu'à 4x supérieure.
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <div className={classes.displayReward}>
            <Typography variant="body2" className={classes.cardReward}>
              REWARD
            </Typography>
            <Typography variant="body2" className={classes.cardToken}>
              1000 FFUL
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </MuiCard>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Reviews Reviews Reviews Reviews Reviews Reviews Reviews Reviews"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>SUBMIT MY REVIEW</Button>
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review Met Les Review 
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </div>
  )
}

export default Card;