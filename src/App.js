import React from 'react';

// const Bemvindo = () => <h2>Bem-vindo(a)</h2>


// const Bemvindo = (props) => {
//   return (
//     <div>
//       <h1>Bem-vindo(a) {props.nome}!</h1> 
//       <h3>Tenho {props.idade} anos</h3>
//     </div>
//   )
// }


// const Teste = () => <h2>Oi teste</h2>


const Equipe = (props) => {
  return (
    <div>
      <Sobre 
      nome={props.nome} 
      cargo={props.cargo} 
      idade={props.idade}
      />
      <Social
      insta={props.insta}
      linkedln={props.linkedln}     
      />
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá, sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <h2>Redes sociais:</h2>
       <a href={props.insta}>Instagram</a>
       <br/>
       <a href={props.linkedln}>linkedin</a>
    </div>
  )
}

function App() {
  return (
    <div>   
      <h1>Conheça nossa equipe:</h1>
      <Equipe 
      nome="Lucas" 
      cargo="Programador" 
      idade="29"
      insta="https://www.instagram.com/"
      linkedln="https://www.linkedin.com/"
      />
      <Equipe 
      nome="Vitoria" 
      cargo="Desenvolvedora Front-end" 
      idade="18"
      insta="https://www.instagram.com/"
      linkedln="https://www.linkedin.com/"
      />
    </div>
  )
}

export default App;

