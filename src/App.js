import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { value: '', items: [] };
    
    // bind event method
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  contador = 0;
  handleClick (event) {
    let arrayCosas = [];
    const valorInt = parseInt(this.state.value);

    for (var i = 0; i < valorInt; i++) {
      arrayCosas.push(i);
      this.contador++;
    }
    this.setState({ items: [...this.state.items, ...arrayCosas] })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    let i = 0;
    const listItems = this.state.items.map(item =>{
      i++;
      return (
          <li key={this.contador+i}>N°{item}: {item}
          </li>
      );
    });
    return (
      <div className="App">
        <input type="number" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>dsds</button>
        <ol>
            {listItems}
        </ol>
      </div>
    );
  }
}

export default App;
