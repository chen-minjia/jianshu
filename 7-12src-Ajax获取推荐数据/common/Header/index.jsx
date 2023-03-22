import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/index.js'
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,
  SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';

class Header extends Component{
  getListArea = ()=>{
    if(this.props.focused){
      return (
      <SearchInfo>
        <SearchInfoTitle>热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {
            this.props.list.map((item)=>{
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
        </SearchInfoList>
      </SearchInfo>
      )
    }else{
      return null
    }
  }
  render(){
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch 
            onBlur={this.props.handleInputBlur}
            onFocus={this.props.handleInputFocus}
            className={this.props.focused?'focused':''}></NavSearch>
            <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe623;</i>
            {/* 展示 SearchInfo热门搜索区域 */}
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'><i className="iconfont">&#xe7c5;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state)=>{// 这里state就是store里的所有数据
  return {
    // focused:state.header.focused
    // immutable对象不能直接. 而是需要.get() 方法
    focused:state.get('header').get('focused'),
    list:state.getIn(['header','list'])//get 和 getIn 两种写法，作用一样
  }
}
const mapDispatchToProps = (dispatch)=>{
  // 这里 dispatch 就是组件和store做连接的时候，组件要改变store里的内容，就要调用dispatch方法。
  return {
    handleInputFocus(){
      dispatch(actionCreators.getList());
      const action =actionCreators.searchFocus();
      dispatch(action);//把 action 分发给 store;
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);