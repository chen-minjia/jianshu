import * as constants from './constants'
import { fromJS } from 'immutable';
// 初始值,fromJS 把 js 对象转换成 immutable 对象
const defaultState =fromJS({
	topicList: [],
  articleList:[],
  recommendList: []
});
export default (preState=defaultState,action)=>{
  switch(action.type){
		case 'change_home_data': 
			return preState.merge({
				'topicList':fromJS(action.topicList),
				'articleList':fromJS(action.articleList),
				'recommendList':fromJS(action.recommendList)
			})
    default:
      return preState;
  }
}
