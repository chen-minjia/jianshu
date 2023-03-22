import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/index.js'
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';

const Header = (props)=>{
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
          onBlur={props.handleInputBlur}
          onFocus={props.handleInputFocus}
          className={props.focused?'focused':''}></NavSearch>
          <i className={props.focused?'focused iconfont':'iconfont'}>&#xe623;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'><i className="iconfont">&#xe7c5;</i>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}


const mapStateToProps = (state)=>{// 这里state就是store里的所有数据
  return {
    // focused:state.header.focused
    // state.header是immutable对象了，不能直接. 而是需要.get() 方法
    focused:state.header.get('focused')
  }
}
const mapDispatchToProps = (dispatch)=>{
  // 这里 dispatch 就是组件和store做连接的时候，组件要改变store里的内容，就要调用dispatch方法。
  return {
    handleInputFocus(){
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