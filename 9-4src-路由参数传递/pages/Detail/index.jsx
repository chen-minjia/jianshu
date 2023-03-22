import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {DetailWrapper,Header,Content} from './style';
// import {withRouter} from 'react-router-dom'
class Detail extends Component {
  render() {
    console.log(this.props);//在 match.params 里面存放着我们传递进来的 id:"2"
    const {title,content}=this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}}/>
      </DetailWrapper>
    );
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);//传递进我们的 id
  }
}
const mapState=(state)=>({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content']),
})
const mapDispatch=(dispatch)=>({
  getDetail(){
    dispatch(actionCreators.getDetail(id));
  }
})
export default connect(mapState,mapDispatch)(Detail)
