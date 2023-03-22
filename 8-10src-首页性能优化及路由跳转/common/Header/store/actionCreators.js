import * as constants from './constants'
import {fromJS} from 'immutable';
import axios from 'axios'

export const searchFocus=()=>({type:constants.SEARCH_FOCUS});
export const searchBlur=()=>({type:constants.SEARCH_BLUR});
// 要传递 immutable 的数据类型哦
const changeList=(data)=>({
  type:constants.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length/5)//向上取整
})
export const getList=()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data;//res.data 就是响应回来的数据(此时是我们在headerList.json中创建的假数据)
      const action = changeList(data.data);
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
};

export const mouseEnter=()=>({type:constants.MOUSE_ENTER});
export const mouseLeave=()=>({type:constants.MOUSE_LEAVE});
export const changePage=(page)=>({type:constants.CHANGE_PAGE,page:page});



