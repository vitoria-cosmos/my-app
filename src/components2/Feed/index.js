import React, { Component } from 'react';

class Feed extends Component {
    render() {
        return (
            <div>
                {/* o map roda a lista e passa por objeto por objeto */}
                {this.state.feed.map((item) => {
                    return (
                        // temos que passar essa key para o react não reclamar.
                        // agora cada div tem um id unico
                        <div key={item.id}>
                            <h3>{item.username}</h3>
                            <a>{item.curtidas} curtidas/ 
                                {item.comentarios} comentarios</a>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Feed;