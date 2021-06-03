import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Messages/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/dialogs" render={() => <Dialogs dialogs={props.param} />} />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/Settings" component={Settings} />
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
