import React, { useContext } from 'react'
import {Component} from 'react'
import { ThemeProvider } from 'styled-components'
import Dashboard from './containers/Dashboard'
import { lightTheme, darkTheme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { ThemeContext } from './context/themeContext'
import CourseData from './CourseData.json'
import Login from './components/Login';
import PrivateRoute from './components/Routes/PrivateRoute';
import Home from './components/Home';
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
    fetch('https://www.postman.com/collections/ee9db4e0292bd64a4326')
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
                </Switch>
              </BrowserRouter>
            </>
        )
    }


  };

}

export default App