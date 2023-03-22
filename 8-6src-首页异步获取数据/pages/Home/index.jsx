import React, { Component } from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper,HomeLeft,HomeRight } from './style';
import axios from 'axios';
import { getHomeInfo } from '../../../src/pages/Home/store/actionCreators';
class Home extends Component{
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="http://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      //res.data 就是我们写在 /api/home.json里面的内容
      //rea.data.data 就是 {topicList: Array(2), articleList: Array(4), recommendList: Array(2)}
      const action={
        type:'change_home_data',
        topicList:result.topicList,
        articleList:result.articleList,
        recommendList:result.recommendList
      }
      this.props.changeHomeData(action);
    }).catch(()=>{
      console.log('error');
    })
  }
}
const mapDispatchToProps=(dispatch)=>({
  changeHomeData(action){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
});
export default connect(null,mapDispatchToProps)(Home);
