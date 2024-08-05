// import React, { Component } from 'react';

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


// 2° PARTE
// import React, { Component } from 'react';

// class Equipe extends Component {
//   render() {
//     return (
//       <div>
//         <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
//         <Social fb={this.props.fb} lk={this.props.lk}/>
//         <hr/>
//       </div>
//     )
//   }
// }

// class Sobre extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Olá, sou o(a) {this.props.nome}</h3>
//         {/* o this indica que estamos referenciando a este componente */}
//         <h3>Cargo: {this.props.cargo}</h3>
//         <h3>Idade: {this.props.idade} anos</h3>
//       </div>
//       // Depois do return, sempre temos que colocar um elemento pai, nesse caso colocamos uma div
//     );
//   }
//   // A classes já tem acesso a props
// }

// const Social = (props) => {
//   return (
//     <div>
//       <a href={props.fb}>Facebook</a>
//       <br/>
//       <a href={props.lk}>LinkedIn</a>
//     </div>
//   )
// }
// function App() {
//   return (
//     <div>
//       <h1>Conheça nossa equipe:</h1>
//       <Equipe nome="Vitoria" cargo="Desenvolvedora Front-end" idade="18" fb="https://www.facebook.com/" lk="https://www.linkedin.com/"/>
//       <Equipe nome="Ana" cargo="Desenvolvedora Back-end" idade="20" fb="https://www.facebook.com/" lk="https://www.linkedin.com/"/>
//     </div>
//   )
// }

// export default App;


// 3° PARTE

import React, { Component } from 'react';
//  importando a biblioteca react para podermos usar suas funcionalidades e a classe Component que nos ajuda a criar componentes em react


// A classe App vai estender de Component, ou seja, vai poder usar todas as funcionalidades de Component.
class App extends Component {


  // Estamos construindo a classe 
  // props são os dados que são passados para o componente
  constructor(props) {
    super(props);
    // super possibilita que possamos usar this.props
    this.state = {
      // estamos criando nosso estado, ele recebe um objeto
      nome: 'Matheus',
      contador: 0
    };

    // aqui a gente permite que as funções acessem os estados
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
    // bind serve para que possamos acessar exatamento os valores dos estados dentro do componente
  }

  aumentar() {
    // console.log('Aumentou!');

    let state = this.state;
    state.contador += 1;
    state.nome = 'Jose';
    this.setState(state);
    // setState altera o valor do estado
  }

  diminuir() {
    let state = this.state;
    if (state.contador === 0) {
      alert('Opa chegou a zero!');
      return;
      // o return vai parar e vai pular para o próximo comando
    }
    state.contador -= 1;
    this.setState(state);
  }

  //  método render define o que vai ser exibido na tela
  render() {
    return (
      <div>
        {/* {this.state.nome}  */}
        {/* Aparece o nome matheus */}

        <h1>Contador</h1>
        {this.state.nome}

        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        
        </h3>

      </div>
    );
  }
}
 
export default App;

