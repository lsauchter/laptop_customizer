import React, { Component } from 'react';
import './App.css';
import Features from './Features.js';
import Summary from './Summary.js';
import Header from './Header.js';
import STORE from './store.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { selected : STORE }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <div className="App">
        <Header />     
        <main>
            <Features features={this.props.features} selected={this.state.selected} handleUpdate={(feature, newValue) => this.updateFeature(feature, newValue)} />
            <Summary selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;  
