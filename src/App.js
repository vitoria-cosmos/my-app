import React, { Component } from 'react';

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


// const Equipe = (props) => {
//   return (
//     <div>
//       <Sobre 
//       nome={props.nome} 
//       cargo={props.cargo} 
//       idade={props.idade}
//       />
//       <Social
//       insta={props.insta}
//       linkedln={props.linkedln}     
//       />
//       <hr/>
//     </div>
//   )
// }

// const Sobre = (props) => {
//   return (
//     <div>
//       <h2>Olá, sou o(a) {props.nome}</h2>
//       <h3>Cargo: {props.cargo}</h3>
//       <h3>Idade: {props.idade} anos</h3>
//     </div>
//   )
// }

// const Social = (props) => {
//   return (
//     <div>
//       <h2>Redes sociais:</h2>
//        <a href={props.insta}>Instagram</a>
//        <br/>
//        <a href={props.linkedln}>linkedin</a>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>   
//       <h1>Conheça nossa equipe:</h1>
//       <Equipe 
//       nome="Lucas" 
//       cargo="Programador" 
//       idade="29"
//       insta="https://www.instagram.com/"
//       linkedln="https://www.linkedin.com/"
//       />
//       <Equipe 
//       nome="Vitoria" 
//       cargo="Desenvolvedora Front-end" 
//       idade="18"
//       insta="https://www.instagram.com/"
//       linkedln="https://www.linkedin.com/"
//       />
//     </div>
//   )
// }

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <Social fb={this.props.fb} lk={this.props.lk}/>
        <hr/>
      </div>
    )
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h3>Olá, sou o(a) {this.props.nome}</h3>
        {/* o this indica que estamos referenciando a este componente */}
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
      // Depois do return, sempre temos que colocar um elemento pai, nesse caso colocamos uma div
    );
  }
  // A classes já tem acesso a props
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <br/>
      <a href={props.lk}>LinkedIn</a>
    </div>
  )
}
function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Vitoria" cargo="Desenvolvedora Front-end" idade="18" fb="https://www.facebook.com/" lk="https://www.linkedin.com/"/>
      <Equipe nome="Ana" cargo="Desenvolvedora Back-end" idade="20" fb="https://www.facebook.com/" lk="https://www.linkedin.com/"/>
    </div>
  )
}

export default App;

