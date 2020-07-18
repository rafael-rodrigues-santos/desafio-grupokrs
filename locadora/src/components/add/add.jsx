import React, { Component } from "react";
import "./add.css";

export default class Add extends Component {
  render() {
    return (
      <div className="add">
          <div className="add__title">
            <h1> Adcionar Filmes</h1>
          </div>
          <div className="add__form">
              <form className="form">
                  <label> Título do Filme: </label>
                  <input></input>
                  <label> Sinopse: </label>
                  <input></input>
                  <label> Genero: </label>
                  <input></input>
                  <label> Data de lançamento: </label>
                  <input></input>
                  <label> Idioma: </label>
                  <input></input>
                  <label> Legendado: </label>
                  <input></input>
                  <label> Diretor: </label>
                  <input></input>
                  <label> Link no IMDB: </label>
                  <input></input>
                  <label> Avaliação do filme: </label>
                  <input></input>
                  <button> Cadastrar </button>
                  <button> Limpar </button>
              </form>
          </div>
        
      </div>
    );
  }
}
