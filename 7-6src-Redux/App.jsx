import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Header from './common/Header';
import store from './store/index.js';
class App extends Component {
  render() {
    return (
      // Provider 让所有的组件都可以接收到store里面的数据
      <Provider store={store}>
        <Header/>
      </Provider>
    );
  }
}

export default App;
