import * as constants from './constants'
import { fromJS } from 'immutable';
// 初始值,fromJS 把 js 对象转换成 immutable 对象
const defaultState =fromJS({
  login:false
});
export default (preState=defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_LOGIN:
      return preState.set('login',action.value);
    case constants.CHANGE_LOGOUT:
      return preState.set('login',action.value);
    default:
      return preState;
  }
}
