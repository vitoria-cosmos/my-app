import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            }
        };

        // uma função que muda os dados de cada campo, quando chamada
        this.dadosForm= this.dadosForm.bind(this);
        
    }

    dadosForm(e) {
        // o e é valor de cada campo que está sendo modificado. O react pega esse valor automaticamente
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        // esse e.target.name é o valor do campo, e o .name é o name do campo
        // estamos usando colchete para acessar os atributos dos inputs
        this.setState({form: form});
        // atualiza as mudanças feitas nos campos
    }

    render() {
        return ( 
            <div>
                <h2>Login</h2>
                Nome:
                <input type='text' name='nome' value={this.state.form.nome} onChange={this.dadosForm}></input>
                <br/>
                Email: 
                <input type='email' name='email' value={this.state.form.email}
                // onChange - é quando houver mudanças a gente faz alguma coisa, chamar uma função ou alterar o valor desta state
                onChange={this.dadosForm}
                />
                <br/>


                Senha:
                <input type='password' name='senha' value={this.state.form.senha} 
                onChange={this.dadosForm}
                // da mesma forma, aqui vamos poder mudar o valor do campo por meio do onChange, pegamos o que o usuário digitou e setamos o estado
                />
                <br/>

                Sexo:
                <select name='sexo' value={this.state.form.sexo} onChange={this.dadosForm}>
                    {/* esse value= fica fixo, pra podermos trocar, temos que utilizar o onChange */}
                    <option value='masculino'>Masculino</option>
                    <option value='faminino'>Feminino</option>

                </select>
                <div>
                    {this.state.form.email} <br/>
                    {this.state.form.senha} <br/>
                    {this.state.form.sexo}
                </div>

                
            </div>
        );
    }
}

export default App;