// import React from 'react';
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
const LoadableComponent=Loadable({
  loader:() => import('./'),
  loading:Loading
});

export default ()=><LoadableComponent/>
//暴露一个无状态组件，无状态组件返回<LoadableComponent/>