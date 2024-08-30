import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''

        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event) {
        // vamos receber um evento

        const {nome, email, senha} = this.state;
        // estamos cada objeto e armazenado em uma const
        alert(`Nome: ${nome} \n Email: ${email} \nSenha: ${senha}`);
        // aqui estamos mostrando todas as states
        // \n é para quebrar linha

        // alert(nome);
        // vamos mostrar na tela somente a variável nome

        event.preventDefault();
        // aqui é para que a nossa página não seja atualizada
    }

    render() {
        return(
            <div>
                <h1>Novo usuário</h1>

                <form onSubmit={this.cadastrar}>
                    {/* prop onSubmit - podemos chamar uma função anonima ou uma função que criamos*/}
                    <label>Nome:</label>
                    <input type='text' value={this.state.nome}
                    onChange={(e) => this.setState({nome: e.target.value})}/>
                    <br/>
                    

                    <label>Email:</label>
                    <input type='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/>

                    <label>Senha:</label>
                    <input type='password' value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/>
                    <br/>

                    <button type='submit'>Cadastrar</button>
                    {/* quando temos um botão do tipo submit dentro de um form com onSubmit, ele chama a função que está dentro de onSubmit */}

                </form>
            </div>
        );
    }
}

export default App;