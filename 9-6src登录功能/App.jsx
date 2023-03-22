import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter,Route} from 'react-router-dom';
import Header from './common/Header';
import store from './store/index.js';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Header/>
              <div>
                <Route path='/' exact component={Home}></Route> 
                <Route path='/detail/:id' exact component={Detail}></Route> 
                <Route path='/login' exact component={Login}></Route> 
              </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
