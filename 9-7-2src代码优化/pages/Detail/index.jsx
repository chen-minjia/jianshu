import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {DetailWrapper,Header,Content} from './style';
// import {withRouter} from 'react-router-dom'
class Detail extends PureComponent {

  render() {
    // console.log(this.props.match.params);
    const {title,content}=this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}}/>
      </DetailWrapper>
    );
  }

  componentDidMount(){
    this.props.getDetail();
  }
}
const mapState=(state)=>({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content']),
});
const mapDispatch=(dispatch)=>({
  getDetail(){
    dispatch(actionCreators.getDetail());
  }
});
export default connect(mapState,mapDispatch)(Detail);
