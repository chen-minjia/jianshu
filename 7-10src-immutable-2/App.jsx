import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Header from './common/Header';
import store from './store/index.js';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
      </Provider>
    );
  }
}

export default App;
