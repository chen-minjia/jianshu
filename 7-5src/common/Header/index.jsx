import React, { Component } from 'react';
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={focused:false};
    //构造器中的this指向当前类的实例对象。
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  handleInputFocus(){
    //组件自定义的方法中，this 指向 undefined
    this.setState({focused:true})
  }
  handleInputBlur(){
    this.setState({focused:false})
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
            onBlur={this.handleInputBlur}
            onFocus={this.handleInputFocus}
            className={this.state.focused?'focused':''}></NavSearch>
            <i className={this.state.focused?'focused iconfont':'iconfont'}>&#xe623;</i>
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
export default Header;


