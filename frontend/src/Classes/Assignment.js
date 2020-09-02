/*
* 
* Boilerplate UI for assignment page on student view.
*   - Shows generic assignment for now. Need to get assignment info from backend.
*   - Submit button lets you upload a file but functionality for capturing
*     the file and storing it needs to be implemented.
*
*/

import React from 'react';
import './Assignment.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    card: {
      flex: 1,
      display: 'inline-block',
      minWidth: 700,
      flexGrow: 1,
      margin: '0 25px',
      marginTop: theme.spacing(5),
      //flexDirection: 'column',
      //justifyContent: 'center',
      //alignItems: 'flex-end',
    },
    list: {
        minWidth: 700
    },
    button: {
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        maxWidth: 100,
    }
  }));

function Assignment() {
  const classes = useStyles();
  return (
    <div className="Assignment">
        <Card className={classes.card} >
            <List className={classes.list}>
                <ListItem>
                    <ListItemText 
                        disableTypography
                        primary={<Typography variant="h4">Assignment</Typography>}
                        edge="start">    
                    </ListItemText>
                    <Button 
                        variant="contained"
                        component="label"
                        edge="end"
                    >
                        Submit
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>
                </ListItem>

                <Divider />
                <ListItem>
                    <ListItemText 
                        primary="Due July 30, 2020 at 11:59PM" 
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <h2>Instructions {"\n"}</h2>
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Submit file."
                    />
                </ListItem>

            </List>
        </Card>
      
    </div>
  );
}

export default Assignment;