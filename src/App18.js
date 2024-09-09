import React, { Component } from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: ''
        };
        this.frases = [
            'Siga os bons e aprenda com eles.', 
            'Cuidado com o seu corpo e a sua saúde.',
            'A força vem da perseverança.',
            'Você é mais importante do que você pensa.',
            'Amar é a coisa mais importante que você possa ser.'
        ];

        this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        // aqui vai ser gerado um número aleatório de 0 até o tamanho máximo da array

        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        // aqui ele vai pegar por meio do indice de um elemento da lista uma frase aleatória

        this.setState(state);
        // aqui atualizamos a state com a frase que foi sorteada
    }
    render() {
        return (
            <div className='container'>
                <img src={require('./assets/cookie01.jpg')} className='img' alt='biscoito da sorte'/>
                {/* aqui estamos acessando o endereço da imagem */}
                <Botao nome='abrir biscoito' acaoBtn={this.quebraBiscoito}/>
                {/* aqui estamos criando uma ação que vai chamar uma função */}
                <h3 className='textoFrase'>{this.state.textoFrase}</h3>

            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
                {/* aqui estamos usando a ação que criamos  */}
            </div>
        );
    }
}

export default App;