import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="Blog" iconElementRight={ <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/> }/>
      </MuiThemeProvider>
    );
  }
}
export default App;