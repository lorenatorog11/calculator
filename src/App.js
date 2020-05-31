import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'

var Parser = require('expr-eval').Parser;
let contador = "";

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        valor: contador,
        resultado: "0"
      }
      this.handleClick = this.handleClick.bind(this)
      this.resetValue = this.resetValue.bind(this)
      this.resultado = this.resultado.bind(this)
  }

  handleClick (event){
    if(contador === "0"){
      contador = ""
    }
    contador = contador + event.target.innerHTML
    this.setState({
      valor:contador
    })
  }

  resetValue(){
    contador = ""
    this.setState({
      valor:contador,
      resultado: "0"
    })
  }

  resultado(){
    if(contador===""){
      this.setState({
        valor: "NAN",
        resultado: "NAN"
      })
    }else{
      this.setState({
        resultado: Parser.evaluate(contador)
      })
    }   
  }



  render(){
    return (
      <div className="App container" id="App">
        <div className="row col-12 px-0 m-0">
          <div className="col-12 col-md-12 col-lg-12" id="display">{this.state.valor}<br/>{this.state.resultado}</div>
        </div>
        <div className="row col-12 px-0 m-0">
          <Button className="col-6" id="clear" onClick={this.resetValue}>AC</Button>
          <Button className="col-3" id="divide" onClick={this.handleClick}>/</Button>
          <Button className="col-3" id="multiply" onClick={this.handleClick}>*</Button>
        </div>
        <div className="row col-12 px-0 m-0" >
          <Button className="col-3" id="seven" onClick={this.handleClick}>7</Button>
          <Button className="col-3" id="eight" onClick={this.handleClick}>8</Button>
          <Button className="col-3" id="nine" onClick={this.handleClick}>9</Button>
          <Button className="col-3" id="subtract" onClick={this.handleClick}>-</Button>
        </div>
        <div className="row col-12 px-0 m-0">
          <Button className="col-3" id="four" onClick={this.handleClick}>4</Button>
          <Button className="col-3" id="five" onClick={this.handleClick}>5</Button>
          <Button className="col-3" id="six" onClick={this.handleClick}>6</Button>
          <Button className="col-3" id="add" onClick={this.handleClick}>+</Button>
        </div>
        <div className="row col-12 px-0 m-0">
          <Button className="col-3" id="one" onClick={this.handleClick}>1</Button>
          <Button className="col-3" id="two" onClick={this.handleClick}>2</Button>
          <Button className="col-3" id="three" onClick={this.handleClick}>3</Button>
          <Button className="col-3" id="equals" onClick={this.resultado}>=</Button>
        </div>
        <div className="row col-12 px-0 m-0">
          <Button className="col-6" id="zero" onClick={this.handleClick}>0</Button>
          <Button className="col-3" id="decimal" onClick={this.handleClick}>.</Button>
  
        </div>
      </div>
    );
  }
  
}

export default App;
