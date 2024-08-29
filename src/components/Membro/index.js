import React, { Component } from 'react';

class Membro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
            // já estamos dentro do this.state, por isso não precisamos acessar this.props.nome
            // o nome recebe o que vem da props
        };
        this.entrar = this.entrar.bind(this);
        // this.sair = this.sair.bind(this);
    }

    // entrar() {
    //     this.setState({ nome: 'Matheus'});
    //     // quando a pessoa clicar no botão, vamos mudar o valor da state nome
    // }

    // outra forma
    entrar(nome) {
        this.setState({ nome: nome});
    }

    // sair() {
    //     this.setState({ nome: 'Visitante'});
    // }
       
    render() {
        return (
            <div>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                {/* <button onClick={this.entrar}>
                    Entrar como Matheus
                </button> */}
                <button onClick={() =>this.entrar('Lucas')}>
                    {/* tem que passar uma função anonima se não dá erro, pois ele pensa que estamos chamando a função */}
                    {/* agora essa função so vai ser executada quando clicarmos nela */}
                    Entrar no sistema
                </button>
                <button onClick={() => this.setState({ nome: ''})}>
                    {/* podemos mudar o estado inline por meio de uma função anonima */}
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;