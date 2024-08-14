import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00'
        };
    }
    

    // CICLOS DE VIDA DO REACT:


    // Depois que o componente é montado, ele pode rodar o que 
    // tem dentro desta função: componentDidMount
    // consumir uma api ...
    // Ele só é rodado uma única vez, apenas quando o componente é montado
    componentDidMount() {
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
            // exibe o horário atual, aumentando de 1 em 1 segundo
        }, 1000);
        // esse componente aparece depois que é montado o componente anterior na tela,
        // que no caso é o constructor
        // MAIS UTILIZADO: pra consumir api, pegar um web service
    }

    componentDidUpdate() {
        console.log('Atualizou!');
        // toda vez que state sofrer alguma atualização, vai aparecer na tela esse console
        // muito utilizado também pra ve se teve alguma atulização de estado pra fazer alguma ação
    }

    shouldComponentUpdate() {
        // este componente vai retornar um true ou false
        // é como perguntar: esse componente deve atualizar?
        // vc escolhe se vai ser true ou false

    }
    render() {
        return(
            <div>
                <h1>Meu projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;