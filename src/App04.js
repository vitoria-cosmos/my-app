import React from 'react';

const Bemvindo = (props) => {
    return(
        <div>
            <h1>Bem-vindo(a) {props.nome}</h1>
            <h3>Tenho {props.anos} anos</h3>
            <hr/>
        </div>
    );
}

function App() {
    return(
        <div>
            Olá Mundo
            <Bemvindo nome="Lucas" anos="24"/>
            <Bemvindo nome="Amanda" anos="21"/>
            <Bemvindo nome="Vitoria" anos="19"/>
        </div>
    );
}

export default App;