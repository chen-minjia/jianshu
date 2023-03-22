import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/index.js'
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,
  SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';

class Header extends Component{
  
  getListArea = ()=>{
    const {focused,list,page,mouseIn,totalPage,
      handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
    const jsList = list.toJS();//把immutable数组转换成正常js数组
    const pageList = [];
    if(jsList.length){
      for(let i=(page-1) * 5;i<page*5;i++){
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }
    
    if(focused||mouseIn){
      return (
      <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>热门搜索
          <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage)}}>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
      )
    }else{
      return null
    }
  }
  
  render(){
    const {focused,handleInputBlur,handleInputFocus} = this.props;
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
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            className={focused?'focused':''}></NavSearch>
            <i className={focused?'focused iconfont':'iconfont'}>&#xe623;</i>
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
    list:state.getIn(['header','list']),//get 和 getIn 两种写法，作用一样
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn'])
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
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage){
      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);