import * as constants from './constants'
import { fromJS } from 'immutable';
// 初始值,fromJS 把 js 对象转换成 immutable 对象
const defaultState =fromJS({
  focused:false,
  list:[]
});
export default (preState=defaultState,action)=>{
  switch(action.type){
    case constants.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前 immutable的值和新值
      // 返回一个全新的对象（相当于 return {focused:false}
      return preState.set('focused',true);
    case constants.SEARCH_BLUR:
      return preState.set('focused',false);
      // return {focused:false}
    case constants.CHANGE_LIST:
      return preState.set('list',action.data);
    default:
      return preState;
  }
}
