import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {LoginWrapper,LoginBox,Input,Button} from './style';
// 登录页面
class Login extends PureComponent {
  render() {
    const {loginStatus} = this.props;
    if(!loginStatus){ // 如果未登录，就return 登录页面
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref ={(c)=>{this.account=c}} />
            <Input placeholder='密码' type='password' ref ={(c)=>{this.password=c}} />
            <Button onClick={()=>{this.props.login(this.account,this.password)}}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{//如果已经登录，跳回首页
      return <Redirect to='/'/>
      // return <Link to='/'>回首页</Link>
    }
  }
 
}
const mapState=(state)=>({
  loginStatus:state.getIn(['login','login'])
})
const mapDispatch=(dispatch)=>({
  login(accountElement,passwoerElement){
    dispatch(actionCreators.login(accountElement.value,passwoerElement.value))
  }
})
export default connect(mapState,mapDispatch)(Login)
