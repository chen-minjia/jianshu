import * as constants from './constants'

const defaultState ={focused:false};// 初始值
export default (preState=defaultState,action)=>{
  if(action.type===constants.SEARCH_FOCUS){
    return {focused:true}
  }
  if(action.type===constants.SEARCH_BLUR){
    return {focused:false}
  }
  return preState;
}
