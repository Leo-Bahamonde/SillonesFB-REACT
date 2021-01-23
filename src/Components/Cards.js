import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
/*import CardActions from '@material-ui/core/CardActions';
 import Button from '@material-ui/core/Button'; */
import Typography from '@material-ui/core/Typography';
import miImagen from '../images/1.jpg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link target="_blank" href="https://wwww.facebook.com">
        <CardMedia
          className={classes.media}
          image= {miImagen} 
          title="Contemplative Reptile"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Clasico
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sillon para sentarse
            </Typography>
            </CardContent>
            </Link>
            </CardActionArea>

    </Card>
  );
}