/*
* 
* Boilerplate UI for list of assignments on student view.
*   - 10 Assignments show up for now. Will need to update this to 
*     get assignments corresponding to each class.
*   - Clicking on an assignment will route to the assignment page.
*
*/

import React from 'react';
import './StudentAssignments.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ListSubheader } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import history from '../history';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    display: 'inline-block',
    minWidth: 700,
    flexGrow: 1,
    margin: '0 25px',
    marginTop: theme.spacing(5),
  },
  pos: {
    marginBottom: 0,
  }
}));

function StudentAssignments() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    const handleClick = () => {
      history.push("/Assignment");
      window.location.reload();
    }

    return (
      <div className={classes.root}>
        <Card className={classes.card} variant="outlined">
      <List dense={dense}>
        <ListItem component="h3">
          Assignments
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 1" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 2" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 3" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 4" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 5" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}> 
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 6" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 7" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 8" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 9" 
            secondary="Due Date"
          />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Assignment 10" 
            secondary="Due Date"
          />
        </ListItem>
      </List>
      
      </Card>
      </div>
    );
}

export default StudentAssignments;