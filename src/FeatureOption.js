import React, { Component } from 'react';
import './FeatureOption.css';

class FeatureOption extends Component {
    render() {
        
        return (
          <div className="feature">
          <div className="feature__name">{this.props.keyText}</div>
          <ul className="feature__list">
            { this.props.options }
          </ul>
        </div>
        )
    }
}

export default FeatureOption