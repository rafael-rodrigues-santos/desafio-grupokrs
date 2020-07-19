import React, { Component, useEffect, useState } from "react";
import "./list.css";
import api from "../../api.js";
import { Link } from "react-router-dom";

export default class List extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('/filmes');
    console.log(response.data);

    this.setState({filmes: response.data});
  }

  render() {

    const {filmes} = this.state;
    console.log("Teste", filmes);

    // const [filme, setUser ] = useState([]);

    // useEffect(() => {

    // }, []);

      // const loadMovie = async () => {
      //       const result = await api.get(`/filmes/${id}`);
      //       setUser(result.data);
      //   }

    const deleteMovie = async id => {
      await api.delete(`/filmes/${id}`);
      this.componentDidMount();
    }

    return (
      <div className="list">
          <div className="list_title">
            <h1> Lista de Filmes</h1>
          </div>
          <div className="list__content">
            <table border='1'>
              <th> ID </th>
              <th> Título do Filme </th>
              <th> Gênero </th>
              <th> Data de Lançamento </th>
              <th> Idioma </th>
              <th> Legendado </th>
              <th> Ação </th>
              
                  {filmes && filmes.map(filme => (
                  <tr key= {filme.id}>
                    <td>
                      {filme.id}
                    </td>
                    <td>
                      {filme.titulo}
                    </td>
                    <td>
                      {filme.genero}
                    </td>
                    <td>
                      {filme.lancamento}
                    </td>
                    <td>
                      {filme.idioma}
                    </td>
                    <td>
                      {filme.legenda}
                    </td>
                    <td>
                      <button onClick={() => deleteMovie(filme.id)}> Excluir</button>
                      <button> <Link to={`filmes/${filme.id}`}> Edit </Link> </button>
                    </td>
                  </tr>
                  )
                )}
              
             

            </table>

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
