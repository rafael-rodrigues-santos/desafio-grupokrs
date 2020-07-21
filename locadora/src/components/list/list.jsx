import React, { Component } from "react";
import "../../css/main.css";
import api from "../../api.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faEye } from '@fortawesome/free-solid-svg-icons'

export default class List extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('/filmes');

    this.setState({filmes: response.data.reverse()});
  }

  render() {

    const {filmes} = this.state;

    const deleteMovie = async id => {
      await api.delete(`/filmes/${id}`);
      this.componentDidMount();
    }

    return (
      <div className="list">
          <div className="list_title">
            <h1> Filmes</h1>
          </div>
          <div className="list__content">
            <table className="tabela">
            <thead>
            <tr>
              <th> ID </th>
              <th> Título do Filme </th>
              <th> Gênero </th>
              <th> Data de Lançamento </th>
              <th> Idioma </th>
              <th> Legendado </th>
              <th> Link </th>
              <th> Ação </th>
              </tr>
            </thead>
              <tbody>
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
                      <a href={filme.link} target="_blank">{filme.link}</a>
                    </td>
                    <td className="list__icons">
                    <Link to={`filmes/list/${filme.id}`} className="icon edit"> <FontAwesomeIcon icon={faEdit} /> </Link>
                    <Link to={`filmes/${filme.id}`} className="icon view"> <FontAwesomeIcon icon={faEye} /> </Link>
                      <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteMovie(filme.id)} className="icon trash"/>
                    </td>
                  </tr>
                  )
                )}

              </tbody>
                  
            </table>
              
          </div>
        
      </div>
    );
  }
}
