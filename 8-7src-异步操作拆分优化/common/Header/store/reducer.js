import * as constants from './constants'
import { fromJS } from 'immutable';
// 初始值,fromJS 把 js 对象转换成 immutable 对象
const defaultState =fromJS({
  focused:false,
  list:[],
  page:1,
  totalPage:1,
  mouseIn:false
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
      // return preState.set('list',action.data).set('totalPage',action.totalPage);
      return preState.merge({list:action.data,totalPage:action.totalPage});
    case constants.MOUSE_ENTER:
      return preState.set('mouseIn',true);
    case constants.MOUSE_LEAVE:
      return preState.set('mouseIn',false);
    case constants.CHANGE_PAGE:
      return preState.set('page',action.page);
    default:
      return preState;
  }
}
