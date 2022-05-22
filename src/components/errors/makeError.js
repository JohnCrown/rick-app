import React, {Component } from "react";
export default class MakeError extends Component {
  state = {
    renderError: false
  };
  render() {
    console.log('render error');
    if(this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
              style={{marginLeft: '28px' , width : '220px' , display: 'inline-block'}}
              onClick={() => this.setState({renderError: true})}
              className="btn btn-success">
                       ThrowError!
          </button>
    )
  }


}