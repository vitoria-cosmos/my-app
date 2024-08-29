// aula 40 - eventos
 
import React, { Component } from 'react';
import Membro from './components/Membro';
// quando eu acesso a pasta membro, ele já reconhece o arquivo index automaticamente

class App extends Component {
    render() {
        return (
            <div>
                <Membro nome="Visitante"/>
            </div>
        );
    }
}

export default App;