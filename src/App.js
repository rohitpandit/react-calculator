import React from 'react';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [], //different numbers as element of the array
      signs: [], //different symbols as element of the array
      last: 0, //the last number which is still unknown of its length
      res: 0, //final result
      show: '0', //the overall string which is viewed to the user
    };
  }

  handleButton(char) {
    if (char === 'C') {
      this.setState({ last: 0, nums: [], signs: [], res: 0, show: 0 });
    } else if (char === '=') {
      let res = 0;
      // res = calculate()
      this.setState({ show: res });
    } else if (
      char === 1 ||
      char === 2 ||
      char === 3 ||
      char === 4 ||
      char === 5 ||
      char === 6 ||
      char === 7 ||
      char === 8 ||
      char === 9 ||
      char === 0
    ) {
      let last = this.state.last * 10 + char;
      this.setState((state, props) => ({ last: last }));
    } else {
      let newNums = this.state.nums;
      newNums.push(char);
      let newSigns = this.state.signs;
      newSigns.push(char);
      this.setState({
        nums: newNums,
        signs: newSigns,
        last: 0,
      });
    }
  }

  render() {
    return (
      <div className='app'>
        <h1 className='result'>{this.state.show}</h1>
        <div className='numbers'>
          <div className='row'>
            <button onClick={(e) => this.handleButton('C', e)} className='num'>
              C
            </button>
          </div>
          <div className='row'>
            <button className='num'>7</button>
            <button className='num'>8</button>
            <button className='num'>9</button>
            <button className='num'>*</button>
          </div>
          <div className='row'>
            <button className='num'>4</button>
            <button className='num'>5</button>
            <button className='num'>6</button>
            <button className='num'>/</button>
          </div>
          <div className='row'>
            <button className='num'>1</button>
            <button className='num'>2</button>
            <button className='num'>3</button>
            <button className='num'>+</button>
          </div>
          <div className='row'>
            <button className='num'>0</button>
            <button className='num'>=</button>
            <button className='num'>%</button>
            <button className='num'>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
