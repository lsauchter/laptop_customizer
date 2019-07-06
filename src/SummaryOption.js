import React, { Component } from 'react';
import SummaryOptionItem from './SummaryOptionItem.js';

class SummaryOption extends Component {
    render() {
        const summary = Object.keys(this.props.selected)
        .map(key => <SummaryOptionItem 
                        key={key}
                        label={key}
                        value={this.props.selected[key].name}
                        cost={this.props.selected[key].cost}/>
        )
        return (
            <div>{summary}</div>
        )
    }
}

export default SummaryOption