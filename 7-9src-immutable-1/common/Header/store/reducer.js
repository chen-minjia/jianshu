import * as constants from './constants'
import { fromJS } from 'immutable';

const defaultState =fromJS({focused:false});// 初始值
export default (preState=defaultState,action)=>{
  if(action.type===constants.SEARCH_FOCUS){
    // immutable对象的set方法，会结合之前 immutable的值和新值
    // 返回一个全新的对象（相当于 return {focused:false}
    return preState.set('focused',true);
  }
  if(action.type===constants.SEARCH_BLUR){
    return preState.set('focused',false);
    // return {focused:false}
  }
  return preState;
}
