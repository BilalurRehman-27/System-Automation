import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Person from "@material-ui/icons/Person";
//TODO: Might need in future
// import Search from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { Hidden, Box, Drawer, ListItem, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../routes/index";

type AppProps = {};

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#3a96cd",
      main: "#005084",
      dark: "#002e4c",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#7c8494",
      main: "#fbfcfb",
      dark: "#6d7688",
      contrastText: "#ffffff",
    },
  },
});

class App extends Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      drawerState: false,
    };
  }

  toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    this.setState({ drawerState: open });
  };

  render() {
    const pathname = window.location.pathname;
    const { drawerState }: any = this.state;
    return (
      <div className="wrapper">
        <ThemeProvider theme={theme}>
          <AppBar className="app-header" position="static" color="primary">
            <Toolbar>
              <img
                alt="logo"
                className="icon"
                src={require("../assets/images/logo.png")}
              />
              <Typography variant="h6" className="typography">
                <Link to="/dashboard">MyLicense Case Management</Link>
              </Typography>
              <Hidden mdUp={true}>
                <Box m={2}>
                  <MenuIcon onClick={this.toggleDrawer(true)} />
                </Box>
                <Drawer
                  anchor="right"
                  open={drawerState}
                  onClose={this.toggleDrawer(false)}
                >
                  <ListItem button key={1}>
                    <Link to="/cases" onClick={this.toggleDrawer(false)}>
                      <ListItemText primary="Cases" />
                    </Link>
                  </ListItem>
                  <ListItem button key={2}>
                    <Link to="/reports" onClick={this.toggleDrawer(false)}>
                      <ListItemText primary="Reports" />
                    </Link>
                  </ListItem>
                  <ListItem button key={3}>
                    <Link to="/reminders" onClick={this.toggleDrawer(false)}>
                      <ListItemText primary="Reminders" />
                    </Link>
                  </ListItem>
                </Drawer>
              </Hidden>
              <Hidden smDown={true}>
                <div className="nav-routes">
                  <Link
                    to="/cases"
                    className={`nav-link ${
                      pathname === "/cases" ? "active" : ""
                    }`}
                  >
                    Cases
                  </Link>
                  {/* TODO: Need to enable this after 1st release
                   <Link
                    to="/reports"
                    className={`nav-link ${
                      pathname === "/reports" ? "active" : ""
                    }`}
                  >
                    Reports
                  </Link>
                  <Link
                    to="/reminders"
                    className={`nav-link ${
                      pathname === "/reminders" ? "active" : ""
                    }`}
                  >
                    Reminders
                  </Link> */}
                </div>
              </Hidden>
              {/* TODO: Need to enable this after 1st release
              <div className="search-icon-container">
                <IconButton color="inherit">
                  <Search fontSize="large" />
                </IconButton>
              </div> */}
              <div className="person-icon-container">
                <IconButton color="inherit">
                  <Person fontSize="large" />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <div className="page-wrapper">
            <Switch>
              {routes &&
                routes.map((route, key) => (
                  <Route
                    key={key}
                    path={route.path}
                    component={route.component}
                  />
                ))}
              <Redirect exact from="/" to="/dashboard" />
            </Switch>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
