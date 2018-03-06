import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Header from './component/Header'
import Article from './component/Article'
import Footer from './component/Footer'
class App extends Component {

   render() {
    return (
      <div>
          <Header />
          <div>
            <Route path="/" component={'Home'}/>
            <Route path="/Article" component={Article}/>
            <Route path="/Footer" component={Footer}/>
          </div>
      </div>
    );
  }
}

export default App;