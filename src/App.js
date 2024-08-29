import React, { Component } from 'react';
import Feed from '../src/components2/Feed';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Lucas', curtidas: 120, comentarios: 24},
                {id: 3, username: 'Amanda', curtidas: 30, comentarios: 12}
            ]
        };
    }
    render() {
        return (
            // forma sem o componente separado
            // <div>
            //     {/* o map roda a lista e passa por objeto por objeto */}
            //     {this.state.feed.map((item) => {
            //         return (
            //             // temos que passar essa key para o react não reclamar.
            //             // agora cada div tem um id unico
            //             <div key={item.id}>
            //                 <h3>{item.username}</h3>
            //                 <a>{item.curtidas} curtidas/ 
            //                     {item.comentarios} comentarios</a>
            //             </div>
            //         )
            //     })}
            // </div>
            <div>
                {this.state.feed.map((item) => {
                    return (
                        <Feed
                        id={item.id}
                        username={item.username}
                        curtidas={item.curtidas}
                        comentarios={item.comentarios}
                        />
                    )
                })}
            </div>
        );
    }
}

export default App;