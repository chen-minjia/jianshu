import axios from 'axios';
// import { fromJS } from 'immutable';
import * as constants from './constants'
const changeLogin=()=>({
  type:constants.CHANGE_LOGIN,
  value:true
})
export const login=(account,password)=>{
  return (dispatch)=>{
    //实际上应该通过 post,为了方便数据模拟。
    axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
      const result = res.data.data;
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登录失败')
      }
    })
  }
}
export const logout=()=>({
  type:constants.CHANGE_LOGOUT,
  value:false
})