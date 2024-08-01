import React from 'react';

// const Bemvindo = () => <h2>Bem-vindo(a)</h2>

const Bemvindo = (props) => {
  return (
    <div>
      <h1>Bem-vindo(a) {props.nome}!</h1>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
}
// const Teste = () => <h2>Oi teste</h2>
function App() {
  return (
    <div>
      {/* <h1>Bem-vindo ao sistema</h1>
      <h2>@vitoria_cosmos</h2> */}
      <div>
        {/* Olá Mundo! */}
        <Bemvindo nome="Vitoria" idade="18"/>
        <Bemvindo nome="Ana" idade="20"/>
        {/* <h1>Curso React</h1> */}
        {/* <Teste/> */}
      </div>
    </div>
  )
}

export default App;

