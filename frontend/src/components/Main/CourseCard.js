import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star';   
import styled from 'styled-components'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderIcon from '@material-ui/icons/Folder';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';



const useStyles = makeStyles({
  root: {
    maxWidth: 355,
    margin: 10,
    borderRadius: 25
  },
});

const CourseArea = styled.h1`
    font-size: 1.5rem;
    font-family: HelveticaNeue;
`

const TeacherArea = styled.h1`
    font-size: 1rem;
    font-family: HelveticaNeue;
`


export default function CourseCard({ data }) {
  const classes = useStyles();
  const { course, teacher } = data;


  return (
    <Card  className={classes.root}>

        <CardContent style = {{backgroundColor: '#14A4E3'}}>
          
          <Typography gutterBottom variant="h5" component="h2">
            <CourseArea>{course}</CourseArea>
              <Button style = {{'float': 'right'}}>
                <MoreVertIcon/>
              </Button>
             
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <TeacherArea>{teacher}</TeacherArea>
          </Typography>

        </CardContent>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This Week

          Recently Graded
        </Typography>
      </CardContent>
     
      <CardActions style = {{'float': 'right'}}>
        <Button size="small">
          <SpellcheckIcon style= {{'color': '#B5B5B9'}}/>
        </Button>
        <Button size="small">
          <FolderIcon style= {{'color': '#B5B5B9'}}/>
        </Button>
      </CardActions>


   

    </Card>
  );
}

