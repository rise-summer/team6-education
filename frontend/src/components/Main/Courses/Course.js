import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`



const Course = ({ data }) => {
    const { user, currentCourses } = data;
    const classes = useStyles();


    return (
        <Card>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={currentCourses}
            />

            <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Teacher, tasks, announcement
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>

            </CardActions>


            <Text>{user}</Text>
            <Text>{currentCourses}</Text>
       

        </Card>
    )
}

export default Course
