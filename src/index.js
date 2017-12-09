import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { browserHistory, Router, Route} from 'react-router-dom'
// import { firebaseApp } from './firebase';
// import SignIn from './components/signin';
// import SignUp from './components/signup';

// material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// firebaseApp.auth().onAuthSateChanged(user => {
//     if(user){
//         console.log('user has sign in or sign up', user);
//         browserHistory.push('/Welcome')
//     }
//     else{
//         console.log('user has signed out or still needs to sign in')
//         browserHistory.replace('/SignIn')
//     }
// })

/*ReactDOM.render(
    <MuiThemeProvider><App />
    <Router path="/" history={browserHistory}>
    <Route path="/SignIn" component={SignIn} />
    <Route path="/SignUp" component={SignUp} />
  </Router></MuiThemeProvider>,  document.getElementById('root'))*/
ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
