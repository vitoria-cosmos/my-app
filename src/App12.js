// aula 41 - renderização consicional
//  vamos renderizar uma coisa ou outra dentro do componente

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     status: 2
        // };

        this.state = {
            // booleano
            status: false
        };

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    sair() {
        this.setState({status: false});   
    }

    entrar() {
        this.setState({status: true});
    }
    render() {
        return (
            <div>
                {/* renderização consicional 1 */}
                {/* {
                    this.state.status === 1 &&
                    // se o status for 1, vai ser renderizado o h1
                    <h1>Bem-vindo ao sistema!</h1>
                } */}

                {/* renderização condicional 2 - comparação com operador ternário */}
                {/* aqui ele vai verificar com o operador tenário se a pessoa está logada ou não */}
                <div>
                    {this.state.status ? 
                    <div>
                        <h2>Bem-vindo ao sistema</h2>
                        <button onClick={this.sair}>Sair do sistema</button>
                    </div> : 
                    <div>
                        <h2>Olá visitante, faça o login!</h2>
                        <button onClick={this.entrar}>Entrar no sistema</button>
                    </div>

                    }
                </div>
                {/* <h2>Curso React JS</h2> */}
            </div>
        );
    }
}

export default App;