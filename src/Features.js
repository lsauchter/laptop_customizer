import React, { Component } from 'react';
import './Features.css';
import FeatureOption from './FeatureOption.js';

class Features extends Component {
    render() {  
      const features = Object.keys(this.props.features)
      .map(key => {
        const options = this.props.features[key].map((item, index) => {
            console.log(item);
          const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return <li key={index} className="feature__item">
            <div className={featureClass}
              onClick={e => this.props.handleUpdate(key, item)}>
                { item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(item.cost) })
            </div>
          </li>
        });

        return <FeatureOption key={key} options={options} />
      });
          
          return (
            <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
            </section>
          )
    }
}

export default Features