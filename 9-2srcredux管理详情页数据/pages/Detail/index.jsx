import React, { Component } from 'react';
import {DetailWrapper,Header,Content} from './style';
import { connect } from 'react-redux';
class Detail extends Component {
  render() {
    const {title,content} = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        {/* <Content>{content}</Content> */}
        {/* 这里content是<img..>....<p>，不是纯文本，会被转译*/}
        <Content dangerouslySetInnerHTML={{__html:this.props.content}}></Content>
      </DetailWrapper>
    );
  }
}
const mapState = (state)=>({
  title:state.getIn(["detail","title"]),
  content:state.getIn(["detail","content"])
})
export default connect(mapState,null)(Detail)
