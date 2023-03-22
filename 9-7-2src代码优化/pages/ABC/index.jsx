import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

class ABC extends Component {
  render() {
    const {loginStatus} = this.props;
    if(loginStatus){ // 如果登录，就显示这个页面
      return (
        <div>写文章页面</div>
      )
    }else{//如果未登录，跳回登录页面
      return <Redirect to='/login'/>
    }
  }
}
const mapState=(state)=>({
  loginStatus:state.getIn(['login','login'])
})
export default connect(mapState)(ABC)
