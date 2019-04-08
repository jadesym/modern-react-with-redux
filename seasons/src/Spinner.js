import React from 'react';

export default class Spinner extends React.Component {
  // The below does not work with ES6 classes!
  getDefaultProps() {
    return {
      message: "Loading -!@#$%^&*()..."
    };
  }  

  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{this.props.message}</div>
      </div>
    );
  }
}

Spinner.defaultProps = {
  message: "Loading..."
}
