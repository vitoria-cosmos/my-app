import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event) {
        // recebe um evento para que possamos ter controle dos dados recarregados
        const {nome, email, senha } = this.state;
        if (nome !== '' && email !== '' && senha !== '') {
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
        } else {
            this.setState({error: 'Ops! Parece que está faltando algo!'});
        }
        event.preventDefault();
            // estamos prevenindo com que a página seja recarregada
    }


    render() {
        return (
            <div>
                <h1>Novo usuário</h1>
                {this.state.error && <p>{this.state.error}</p>}
                {/* se o state error tiver algum valor, ele vai renderizar este parágrafo */}
                <form onSubmit={this.cadastrar}>
                    {/* essa promp serve ara a gente enviar o formulario. Nela podemos chamar uma função anonima ou uma que a gente cria. */}
                    <label>Nome:</label>
                    <input type='text' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}></input>
                    <br/>

                    <label>Email:</label>
                    <input type='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
                    <br/>

                    <label>Senha:</label>
                    <input type='password' value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}></input>
                    <br/>

                    <button type='submit'>Cadastrar</button>
                    {/* quando temos um botão do tipo submit, quando apertamos nele, é chamada a função que está dentro de onSubmit */}



                </form>
            </div>
        );
    }
}

export default App;