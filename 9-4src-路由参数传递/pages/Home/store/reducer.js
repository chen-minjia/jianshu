import * as constants from './constants'
import { fromJS } from 'immutable';
// 初始值,fromJS 把 js 对象转换成 immutable 对象
const defaultState =fromJS({
	topicList: [],
  articleList:[],
  recommendList: [],
	articlePage:1,
	showScroll:false
});
export default (preState=defaultState,action)=>{
  switch(action.type){
		case constants.CHANGE_HOME_DATA: 
			return preState.merge({
				'topicList':fromJS(action.topicList),
				'articleList':fromJS(action.articleList),
				'recommendList':fromJS(action.recommendList)
			})
		case constants.ADD_ARTICLE_LIST:
			//preState.get('articleList') 拿到原来的 articleList 数组（immutable对象）
			// .concat(action.list) 向里面追加新的数组
			return preState.merge({
				'articleList':preState.get('articleList').concat(action.list),
				'articlePage':action.nextPage
			})
		case constants.TOGGLE_SCROLL_TOP:
			return preState.set('showScroll',action.show)
    default:
      return preState;
  }
}
