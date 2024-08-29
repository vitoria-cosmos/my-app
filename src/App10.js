import React, { Component } from 'react';

class App extends Component {

    // CICLO DE VIDA 1: constructor
    constructor(props) {
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }

    // CICLO DE VIDA 2 - componentDidMount
    // depois que o componente é montado, ele pode rodar o que tem dentro da função didmount
    // ele só é rodado uma única vez, que é apenas quando o componente é rodado
    componentDidMount() {
        // a função é rodada depois que o componente já está montado na tela
        // estamos atualizando o valor de hora. No caso, vai aparecer a hora atual rodando sem parar
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
    }
    // didMount é muito usado pra consumir api extra, pegar webservice

    // CICLO DE VIDA 3 - componentDidUpdate
    // toda vez que atualizou um componente ou state, a gente pode fazer alguma coisa
    componentDidUpdate() {
        // quando o estado hora for atualizado, vai mostrar esse console
        // ou seja vai chamar essa função componentDidUpdate
        console.log('Atualizou!!!');
    }
    // usamos pra ve se teve alguma atualização de algum estado e fazer alguma ação

    // CICLO DE VIDA 4 - shouldComponentUpdate
    
    // ele vai retornar true ou false
    // pergunta: esse componente deve atualizar?
    // ai vc retorna true ou false
    // se vc quer que ele atualize ou não





    render() {
        return (
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;