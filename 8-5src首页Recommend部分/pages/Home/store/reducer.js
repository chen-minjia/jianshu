import * as constants from './constants'
import { fromJS } from 'immutable';
// 初始值,fromJS 把 js 对象转换成 immutable 对象
const defaultState =fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	},{
		id: 2,
		title: '手绘',
		imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	}],
  articleList:[{
		id: 1,
		title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
		desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
		imgUrl: 'https://pic.leetcode-cn.com/1643099490-QpJszb-image.png'
	},{
		id: 2,
		title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
		desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
		imgUrl: 'https://pic.leetcode-cn.com/1643099490-QpJszb-image.png'
	},{
		id: 3,
		title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
		desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
		imgUrl: 'https://pic.leetcode-cn.com/1643099490-QpJszb-image.png'
	},{
		id: 4,
		title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
		desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
		imgUrl: 'https://pic.leetcode-cn.com/1643099490-QpJszb-image.png'
	}],
  recommendList: [{
		id: 1,
		imgUrl: "https://pic.leetcode-cn.com/1643102936-wDHGAY-image.png"
	}, {
		id: 2,
		imgUrl: "https://pic.leetcode-cn.com/1643103112-ApgnCJ-image.png"
	}]
});
export default (preState=defaultState,action)=>{
  switch(action.type){

    default:
      return preState;
  }
}
