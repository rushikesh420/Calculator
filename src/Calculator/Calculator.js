import React from 'react';
import Screen from './Screen/Screen';
import CalculatorLogScreen from './Screen/LogScreen';
import Keypad from './Keys/Keypad';

class Calculator extends React.Component {

    state = {
        equation: '',
        result: 0,
        calculatorLog: []
    }
  websocket = new WebSocket('wss://sezzle-calculator-app-be.herokuapp.com//')

   componentDidMount() {
     this.websocket.onopen = () => {
       console.log('connected')
     }

     this.websocket.onclose = () => {
       console.log('disconnected')
     }
   }

    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.clear();
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton;
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' ';
        else if (pressedButton === '=') {
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
                this.setState({result});
                this.websocket.send(equation + ' = ' + result);
            } catch (error) {
                alert('ERROR!');
            }
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }

        this.setState({equation: equation});
    }

    clear() {
        this.setState({equation: '', result: 0});
    }

    render() {
      this.websocket.onmessage = evt => {

        console.log(evt.data)
        if (this.state.calculatorLog.length == 10)
            var prevLog = this.state.calculatorLog.slice(0,9);
        else
            prevLog = this.state.calculatorLog;


        this.setState({calculatorLog: [evt.data].concat(prevLog)})

      }
        return (
            <main className="calculator">
                <h1 className="head"><b>CALCULATOR</b></h1>
                <Screen result={this.state.result} equation={this.state.equation} />
                <Keypad onButtonPress={this.onButtonPress} />
                <CalculatorLogScreen calculatorLog={this.state.calculatorLog} />
            </main>
        );
    }
}

export default Calculator;