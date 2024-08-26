import React from 'react';

const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social fb={props.fb} lk={props.lk}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h1>Olá, meu nome é {props.nome}</h1>
            <h2>Tenho {props.idade}</h2>
            <h2>Sou {props.cargo}</h2>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <h2>Minhas redes sociais:</h2>
            <a href={props.fb}>Facebook</a> <br/>
            <a href={props.lk}>LinkedIn</a>
        </div>
    );
}

function App() {
    return (
        <div>
            <Equipe nome="Lucas" cargo="Data Engineer" idade="25" fb="https://www.facebook.com/" lk="https://www.linkedin.com/"/>
            <Equipe nome="Vitoria" cargo="Software Engineer" idade="24" fb="https://www.facebook.com/" lk="https://www.linkedin.com/"/>
            <Equipe nome="Gabrielle" cargo="Front-end Developer" idade="23" fb="https://www.facebook.com/" lk="https://www.linkedin.com/"/>
        </div>
    )
}

export default App;