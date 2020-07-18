import React, { Component } from "react";
import "./list.css";
import api from "../../api.js";

export default class List extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('/filmes');

    this.setState({filmes: response.data});
  }

  render() {

    const {filmes} = this.state;
    console.log("Teste", filmes);

    return (
      <div className="list">
          <div className="list_title">
            <h1> Lista de Filmes</h1>
          </div>
          <div className="list__content">
          <ul>
            {filmes && filmes.map(filme => (
              <li key= {filme.id}>
                Nome do filme: {filme.titulo}
              </li>
              )
            )}
          </ul>
              
          </div>
        
      </div>
    );
  }
}
