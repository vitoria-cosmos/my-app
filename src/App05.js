import React from 'react';

const Informacoes = (props) => {
    return(
        <div>
            <h1>Bem vindo(a) {props.nome}</h1>
            <h3>idade: {props.idade}</h3>
            <h3>Cidade: {props.cidade}</h3>
            <hr/>
        </div>
    );
}

function App () {
    return (
        <div>
            <Informacoes nome="Vitoria" idade="19" cidade="Maracanaú"/>
            <Informacoes nome="Samuel" idade="18" cidade="Itapajé"/>
            <Informacoes nome="Gabrielle" idade="18" cidade="Fortaleza"/>
        </div>

    );
}

export default App;