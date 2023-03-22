import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './common/Header';
import store from './store/index.js';
import Home from './pages/Home';
import Detail from './pages/Detail';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Header/>
              <Routes>
                <Route path='/' exact element={<Home/>}></Route> 
                <Route path='/detail/:id' exact element={<Detail/>}></Route> 
              </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
