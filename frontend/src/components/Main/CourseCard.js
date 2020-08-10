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


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    padding: 10,
    margin: 10,
    display: 'inline-block'
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


export default function CourseCard({ data }) {
  const classes = useStyles();
  const { user, course, teacher } = data;


  return (
    <Card className={classes.root}>
      <CardHeader
        title={<Text>{course}</Text>}

        avatar={
          <IconButton>
          <StarIcon />
        </IconButton>
        }

        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <Text>
              {teacher}
            </Text>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     

      </CardActions>

    </Card>
  );
}

