import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import routes from "../routes/index";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3a96cd',
      main: '#005084',
      dark: '#002e4c',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#7c8494',
      main: '#fbfcfb',
      dark: '#6d7688',
      contrastText: '#ffffff',
    }
  },
});

class App extends Component {
  render() {
    const pathname = window.location.pathname;
    return (
      <div className="wrapper">
        <ThemeProvider theme={theme}>
          <AppBar className="app-header" position="static" color="primary">
            <Toolbar >
              <img alt="logo" className="icon" src={require('../assets/images/logo.png')} />
              <Typography variant="h6" className="typography">
                <Link to="/dashboard">MyLicense Case Management</Link>
            </Typography>
              <div className="nav-routes">
                <Link to="/cases" className={`nav-link ${pathname === '/cases' ? 'active' : ''}`}>
                  Cases
              </Link >
                <Link to="/reports" className={`nav-link ${pathname === '/reports' ? 'active' : ''}`}>
                  Reports
              </Link >
                <Link to="/reminders" className={`nav-link ${pathname === '/reminders' ? 'active' : ''}`}>
                  Reminders
              </Link >
              </div>
              <div className="search-icon-container">
                <IconButton color="inherit">
                  <Search fontSize="large" />
                </IconButton>
              </div>
              <div className="person-icon-container">
                <IconButton color="inherit">
                  <Person fontSize="large" />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <div className="page-wrapper">
            <Switch >
              {routes && routes.map((route, key) => (
                <Route key={key} path={route.path} component={route.component} />
              ))}
              <Redirect exact from="/" to="/dashboard" />
            </Switch>
          </div>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;