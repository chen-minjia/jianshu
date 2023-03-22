import React from 'react';
import Loadable from 'react-loadable';
import Loading from './my-loading-component';
const LoadableComponent=Loadable({
  loader:() => import('./'),
  loading:Loading
  // loading(){
  //   return <div>Loading</div>
  // } 如果不想单独创建Loading 组件的话，直接写 虚拟 dom即可
});

export default ()=><LoadableComponent/>
//暴露一个无状态组件，无状态组件返回<LoadableComponent/>