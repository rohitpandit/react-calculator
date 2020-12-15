import React from  'react';
import './app.css';


class App extends React.Component{
  render(){
    return (

      <div className="app">
        <h1 className="result">Results</h1>
        <div className="numbers">
          <div className="row">
            <button className="num">C</button>
            <button className="num"> -- </button>
            <button className="num">%</button>
            <button className="num">/</button>
          </div>
          <div className="row">
            <button className="num">7</button>
            <button className="num">8</button>
            <button className="num">9</button>
            <button className="num">*</button>
          </div>
          <div className="row">
            <button className="num">4</button>
            <button className="num">5</button>
            <button className="num">6</button>
            <button className="num">-</button>
          </div>
          <div className="row">
            <button className="num">1</button>
            <button className="num">2</button>
            <button className="num">3</button>
            <button className="num">+</button>
          </div>
          <div className="row">
            <button className="num">0</button>
            <button className="num">0</button>
            <button className="num">.</button>
            <button className="num">=</button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
