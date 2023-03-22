import React, { Component } from 'react';
// import {connect} from 'react-redux';
import {WriterWrapper} from '../style'
export default class Writer extends Component {
  render() {
    return (
      <WriterWrapper>writer</WriterWrapper>
    );
  }
}


// const mapStateToProps=(state)=>({
//   list:state.getIn(['home','recommendList'])
// })

// const mapDispatchToProps=(dispatch)=>{
//   // return dispatch();
// }

// export default connect(
//   mapStateToProps,null
//   // mapDispatchToProps
// )(Writer);
