import * as constants from './constants'
import {fromJS} from 'immutable';
import axios from 'axios'

export const searchFocus=()=>({type:constants.SEARCH_FOCUS});
export const searchBlur=()=>({type:constants.SEARCH_BLUR});
// 要传递 immutable 的数据类型哦
export const CHANGE_LIST=(data)=>({type:constants.CHANGE_LIST,data:fromJS(data)})
export const getList=()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data;//res.data 就是响应回来的数据(此时是我们在headerList.json中创建的假数据)
      const action = CHANGE_LIST(data.data);
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
};