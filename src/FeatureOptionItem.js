import React, { Component } from 'react';
import './FeatureOptionItem.css';

class FeatureOptionItem extends Component {
    render() {
        return (
            <li key={this.props.index} className="feature__item">
            <div className={this.props.featureClass}
              onClick={e => this.props.handleUpdate(this.props.updateKey, this.props.item)}>
                { this.props.item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.item.cost) })
            </div>
          </li>
        )
    }
}

export default FeatureOptionItem