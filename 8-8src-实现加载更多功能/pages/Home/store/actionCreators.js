import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants'
const changeHomeData =(result)=>({
  type:constants.CHANGE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
}) 

export const getHomeInfo=()=>{
  return (dispatch)=>{
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      const action=changeHomeData(result);
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
}
const addHomeList =(result,nextPage)=>({
  type:constants.ADD_ARTICLE_LIST,
  list:fromJS(result),
  nextPage:nextPage
})
export const getMoreList=(articlePage)=>{
  return (dispatch)=>{
    axios.get('/api/homeList.json?articlePage='+articlePage).then((res)=>{
      const result = res.data.data;
      const action=addHomeList(result,articlePage+1);
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
}