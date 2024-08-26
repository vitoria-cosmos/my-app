// import React, { Component } from 'react';

// class Equipe extends Component {
//     render() {
//         return(
//             <div>
//                 <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
//                 <Social/>
//                 <hr/>
//             </div>
//         );
//     }
// }

// class Sobre extends Component {
//     render() {
//         return(
//             <div>
//                 <h2>Olá, sou o(a) {this.props.nome}</h2>
//                 <h3>Cargo: {this.props.cargo}</h3>
//                 <h3>Idade: {this.props.idade} anos</h3>
//             </div>
//         );
//     }
// }

// const Social = () => {
//     return (
//         <div>
//             <a>Faceboook</a> <br/>
//             <a>LinkedIn</a>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div>
//             <h1>Conheça nossa equipe:</h1>
//             <Equipe nome="Matheus" cargo="Programador" idade="24"/>
//             <Equipe nome="Vitoria" cargo="Software Engineer" idade="25"/>
//         </div>
//     );
// }

// export default App;

import React, { Component } from 'react';

class Equipe extends Component {
    render() {
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social/>
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component {
    render() {
        return(
            <div>
                <h1>Olá, sou o(a) {this.props.nome}</h1>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        )
    }
}

class Social extends Component {
    render() {
        return(
            <div>
                <h2>Minhas redes sociais:</h2>
                <a>Facebook</a>
                <a>LinkedIn</a>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Equipe nome="Marllon" cargo="Programador" idade="22"/>
            <Equipe nome="Vitoria" cargo="Engenheira de Software" idade="25"/>
        </div>
    );
}

export default App;