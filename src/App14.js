import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo: 'masculino'
            // aqui setamos o sexo masculino para aparecer como padrão
        };
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(e) {
        // a gnt recebe por parametro um evento que podemos acessar o valor que a pessoa digitou
        let valorDigitado = e.target.value;
        // target significa qual que é o input que a gente está mirando e value é o valor que foi digitado
        this.setState({email: valorDigitado});

    }

    trocaSexo(e) {
        let valorDigitado = e.target.value;
        this.setState({sexo: valorDigitado});
    }

    render() {
        return ( 
            <div>
                <h2>Login</h2>


                Email: 
                <input type='email' name='email' value={this.state.email}
                // onChange - é quando houver mudanças a gente faz alguma coisa, chamar uma função ou alterar o valor desta state
                onChange={this.trocaEmail}
                />
                <br/>


                Senha:
                <input type='password' name='senha' value={this.state.senha} 
                onChange={(e) => this.setState({senha: e.target.value})}
                // da mesma forma, aqui vamos poder mudar o valor do campo por meio do onChange, pegamos o que o usuário digitou e setamos o estado
                />
                <br/>

                Sexo:
                <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo}>
                    {/* esse value= fica fixo, pra podermos trocar, temos que utilizar o onChange */}
                    <option value='masculino'>Masculino</option>
                    <option value='faminino'>Feminino</option>

                </select>
                <div>
                    {this.state.email} <br/>
                    {this.state.senha} <br/>
                    {this.state.sexo}
                </div>

                
            </div>
        );
    }
}

export default App;