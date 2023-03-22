import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style';
import {actionCreators} from './store'
class Home extends PureComponent{
  handleScrollTop(){
    // window.scrollTo(左侧,顶部)
    window.scrollTo(0,0)
  }
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
        {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回顶</BackTop>:null}
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents(){
    // 监听 window 里的 scroll 事件
    // 当 scroll 滚动时，改变 showScroll 的值为 true
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  // 当组件被销毁，一定要把 scroll 事件从 window 上解绑
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapStateToProps=(state)=>({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatchToProps=(dispatch)=>({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(){
    // doc.docEle.scrollTop 是滚动条滚动的距离
    // 滚动条滚动距离 >100 时才显示 返回顶部按钮
    if(document.documentElement.scrollTop>100){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);
