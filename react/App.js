import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RootComponent from './RootComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <RootComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('App')
);
