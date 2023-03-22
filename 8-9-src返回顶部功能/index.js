import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './style';
import App from './App';
import { GlobalStyle } from './style';
import {GlobalIcon} from './statics/iconfont/iconfont'

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GlobalIcon/>
    <App/>
  </Fragment>
  ,document.getElementById('root'));

