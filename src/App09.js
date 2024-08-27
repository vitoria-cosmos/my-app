import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nome: 'Vitoria',
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar() {
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    diminuir() {
        let state = this.state;
        if (state.contador === 0) {
            alert('Opa, chegou ao zero!');
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }
    render() {
        return (
            <div>
                <h1>Contador</h1>
                <button onClick={this.diminuir}>-</button>
                {this.state.contador}
                <button onClick={this.aumentar}>+</button>

            </div>
        );
    }
}

export default App;