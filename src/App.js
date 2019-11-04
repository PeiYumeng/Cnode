import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home'; 
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Sider from './components/Sider';
import Signin from './container/Signin';
import Chapter from './container/Chapter'
import Ask from './container/Ask'
import Share from './container/Share'
import List from './container/List'
import Good from './container/Good'
import {Redirect} from 'react-router-dom';
// import Router from './container/Router'
function App() {
  return (
    <Router>
      <div>
          <Header/>
          <div className="main">
              <div className="content">
              
                <Redirect from = '/'  to = '/home/all' />
                <Redirect from = '/home'  to = '/home/all' />
                <Route path='/api' component={Api}/>
                <Route path='/about' component={About}/>
                <Route path='/start' component={Start}/>
                <Route path='/signin' component={Signin}/>
                <Route path='/topic/:id' component={Chapter}/>
                <Route path='/home' component={Home} /> 
              </div>
              <Sider/>
          </div>
      </div>
      </Router>
  );
}

export default App;
