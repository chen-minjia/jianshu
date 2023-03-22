import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants'

const changeDetail=(result)=>({
  type:constants.CHANGE_DETAIL,
  'title':fromJS(result.title),
  'content':fromJS(result.content)
})
export const getDetail=()=>{
  return (dispatch)=>{
    axios.get('/api/detail.json').then((res)=>{
      const result =res.data.data;
      dispatch(changeDetail(result))
    })
  }
}