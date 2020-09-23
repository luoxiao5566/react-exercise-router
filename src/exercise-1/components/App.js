import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import Home from './home';
import MyProfile from './myProfile';
import AboutUs from './aboutUs';
import ProDucts from './proDucts';
import Bicycle from './bicycle';
import TV from './tv';
import Pencil from './pencil';

class App extends Component {
  render() {
    return (
      <Router>
        <ul className='head'>
            <li>
              <NavLink 
                className='links'                 
                to='/about-us'
                activeClassName = 'links1'
                >About Us</NavLink>
            </li>            
            <li>
              <NavLink
                className='links' 
                to='/my-profile'
                activeClassName = 'links1'
                >My Profile</NavLink>
            </li>
            <li>
              <NavLink 
                className='links' 
                exact
                to='/products'
                activeClassName = 'links1'
                >Products</NavLink>
            </li>
            <li>
              <NavLink 
                className='links' 
                exact
                to='/'
                activeClassName = 'links1'
                >Home</NavLink>
            </li>
            
        </ul>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/my-profile' component={MyProfile} />
            <Route path='/about-us' component={AboutUs} />
            <Route exact path='/products' component={ProDucts} />
            <Route exact path='/products/1' component={Bicycle} />
            <Route exact path='/products/2' component={TV} />
            <Route exact path='/products/3' component={Pencil} />
            <Route component={Home} />
            
          </Switch>
            <Route path='/goods' component={ProDucts} />
        </div>
      </Router>
    );
  }
}

export default App;
