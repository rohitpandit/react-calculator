import React from 'react';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [], //different numbers as element of the array
      signs: [], //different symbols as element of the array
      last: 0, //the last number which is still unknown of its length
      flag: 0, //flag to avoid multiple clicks of number or signs
      show: '0', //the overall string which is viewed to the user
    };
  }

  cal() {
    let signs = this.state.signs;
    let nums = this.state.nums;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < signs.length; j++) {
        if (signs[j] === '/' && i === 0) {
          let res = nums[j] / nums[j + 1] || 0;
          nums.splice(j, 2, res);
          signs.splice(j, 1);
        }
        if (signs[j] === '*' && i === 1) {
          let res = nums[j] * nums[j + 1] || 0;
          nums.splice(j, 2, res);
          signs.splice(j, 1);
        }
        if (signs[j] === '+' && i === 2) {
          let res = nums[j] + nums[j + 1] || 0;
          nums.splice(j, 2, res);
          signs.splice(j, 1);
        }
        if (signs[j] === '-' && i === 3) {
          let res = nums[j] - nums[j + 1] || 0;
          nums.splice(j, 2, res);
          signs.splice(j, 1);
        }
      }
    }
    return nums[0];
  }

  handleButton(char) {
    if (char === 'C') {
      this.setState({ last: 0, nums: [], signs: [], flag: 0, show: '0' });
    } else if (char === '=') {
      if (this.state.flag === 1) {
        let nums = this.state.nums;
        if (this.state.last !== 0) {
          nums.push(this.state.last);
        }
        let res = 0;
        res = this.cal();
        this.setState({ nums: [], signs: [], show: res, last: res, flag: 1 });
      }
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
      let show = this.state.show;
      if (this.state.show === '0') {
        show = new String(char);
      } else {
        show += new String(char);
      }
      this.setState({ last: last, show: show, flag: 1 });
    } else {
      if (this.state.flag === 1) {
        let newNums = this.state.nums;
        newNums.push(this.state.last);
        let newSigns = this.state.signs;
        newSigns.push(char);
        let show = this.state.show;
        show = show + char;
        this.setState({
          nums: newNums,
          signs: newSigns,
          last: 0,
          show: show,
          flag: 0,
        });
      }
    }
  }

  render() {
    return (
      <div className="page">
        <div className='app'>
          <h1 className='result'>{this.state.show}</h1>
          <div className='numbers'>
            <div className='row'>
              <button onClick={(e) => this.handleButton(7, e)} className='num'>
                7
              </button>
              <button onClick={(e) => this.handleButton(8, e)} className='num'>
                8
              </button>
              <button onClick={(e) => this.handleButton(9, e)} className='num'>
                9
              </button>
              <button
                onClick={(e) => this.handleButton('C', e)}
                className='num'>
                C
              </button>
            </div>
            <div className='row'>
              <button onClick={(e) => this.handleButton(4, e)} className='num'>
                4
              </button>
              <button onClick={(e) => this.handleButton(5, e)} className='num'>
                5
              </button>
              <button onClick={(e) => this.handleButton(6, e)} className='num'>
                6
              </button>
              <button
                onClick={(e) => this.handleButton('/', e)}
                className='num'>
                /
              </button>
            </div>
            <div className='row'>
              <button onClick={(e) => this.handleButton(1, e)} className='num'>
                1
              </button>
              <button onClick={(e) => this.handleButton(2, e)} className='num'>
                2
              </button>
              <button onClick={(e) => this.handleButton(3, e)} className='num'>
                3
              </button>
              <button
                onClick={(e) => this.handleButton('*', e)}
                className='num'>
                *
              </button>
            </div>
            <div className='row'>
              <button onClick={(e) => this.handleButton(0, e)} className='num'>
                0
              </button>
              <button
                onClick={(e) => this.handleButton('=', e)}
                className='num'>
                =
              </button>
              <button
                onClick={(e) => this.handleButton('+', e)}
                className='num'>
                +
              </button>
              <button
                onClick={(e) => this.handleButton('-', e)}
                className='num'>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
