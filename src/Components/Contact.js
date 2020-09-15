import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import { withRouter } from 'react-router-dom'
class Contact extends Component {
  render() {
    console.log(this.props) ;
    return (
      <div className="contact">
        Contact
        <Prompt when={true} 
        message = {(location)=> {
          return `Bạn Có Muốn Ròi Khỏi ${location.pathname}`
        }} />
      </div>
    );
  }
}
export default withRouter(Contact);
