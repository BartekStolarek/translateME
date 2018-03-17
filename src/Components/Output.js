import React, { Component } from 'react';

class Output extends Component {

  render() {
    return (
      <div className="Output">
        <div className="outputText">
          {this.props.value} 
        </div>
      </div>
    );
  }
}

export default Output;
