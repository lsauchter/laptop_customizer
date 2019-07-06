import React, { Component } from 'react';
import './Features.css';
import FeatureOption from './FeatureOption.js';
import FeatureOptionItem from './FeatureOptionItem.js';

class Features extends Component {
    render() {  
      const features = Object.keys(this.props.features)
      .map(key => {
        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return <FeatureOptionItem
                    featureClass={featureClass}
                    handleUpdate={this.props.handleUpdate}
                    index={index}
                    updateKey={key}
                    key={key + index}
                    item={item} />
        });

        return <FeatureOption
                  key={key}
                  keyText={key}
                  options={options} />
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