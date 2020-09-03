import React, { useContext } from 'react'
import {Component} from 'react'
import { ThemeProvider } from 'styled-components'
import Dashboard from './containers/Dashboard'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { ThemeContext } from './context/themeContext'
import CourseData from './CourseData.json'
import Login from './view/Login/LoginPage.js';
import PrivateRoute from './components/Routes/PrivateRoute';
import Home from './components/Home';
import Assignment from './Classes/Assignment'
import StudentAssignments from './Classes/StudentAssignments'
import ClassPage from './Classes/ClassPage'
import PublicRoute from './components/Routes/PublicRoute';
import { BrowserRouter, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/orgs/nodejs')
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: true,
          data: json,
        })
      })
  }

  render() {

    var {loading, data} = this.state;

    if (!loading) {
      return <div>Loading...</div>
    } else {
        return (
            <>
              
              <GlobalStyles />
           
              <BrowserRouter>
                <Switch>
                  <PublicRoute restricted={false} component={Home} path="/" exact />
                  <PublicRoute restricted={true} component={Login} path="/login" exact />
                  <PrivateRoute component={Dashboard} path="/dashboard" exact />
                  <PrivateRoute exact path="/StudentAssignments" component={StudentAssignments} />
                  <PrivateRoute exact path="/Assignment" component={Assignment}/>
                  <PrivateRoute exact path="/ClassPage" component={ClassPage}/>
                </Switch>
              </BrowserRouter>
            </>
        )
    }


  };
}

export default App
