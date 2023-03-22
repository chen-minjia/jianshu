import * as constants from './constants'
import { fromJS } from 'immutable';
// 初始值,fromJS 把 js 对象转换成 immutable 对象
const defaultState =fromJS({
  title:'',
  content:''
});
export default (preState=defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_DETAIL:
      return preState.merge({
        title:action.title,
        content: action.content
      })
    default:
      return preState;
  }
}
