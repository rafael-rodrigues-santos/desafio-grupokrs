import React, { Component, useState, useEffect } from "react";
import "./edit.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import api from "../../api.js";

const Edit = () => {
  let history = useHistory();
  const { id } = useParams();
  const [filme, setUser ] = useState({
    titulo: "",
    sinopse: "",
    genero: "",
    lancamento: "",
    idioma: "",
    legenda: "",
    diretor: "",
    avaliacao: "",
    link: ""
  });

  const { titulo, sinopse, genero, lancamento, idioma, legenda, diretor, avaliacao, link } = filme;
      const onInputChange = e => {
        console.log(e.target.value);
        setUser({ ... filme, [e.target.name]: e.target.value });
        
      }

      useEffect(() => {
          loadMovie()
      }, []);

      const onSubmit = async e => {
        e.preventDefault();
        await api.put(`/filmes/${id}`, filme);
        history.push('/');
      } ;

      const loadMovie = async () => {
          const result = await api.get(`/filmes/${id}`);
          setUser(result.data);
      }
    
      return (
        <div className="add">
            <div className="add__title">
              <h1> Editar Filmes</h1>
            </div>
            <div className="add__form">
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <label> Título do Filme: </label>
                    <input type="text" name="titulo" value={titulo} onChange={e => onInputChange(e)} />
                    <label> Sinopse: </label>
                    <input type="text" name="sinopse" value={sinopse} onChange={e => onInputChange(e)} />
                    <label> Genero: </label>
                    <input type="text" name="genero" value={genero} onChange={e => onInputChange(e)} />
                    <label> Data de lançamento: </label>
                    <input type="text" name="lancamento" value={lancamento} onChange={e => onInputChange(e)} />
                    <label> Idioma: </label>
                    <input type="text" name="idioma" value={idioma} onChange={e => onInputChange(e)} />
                    <label> Legendado: </label>
                    <input type="text" name="legenda" value={legenda} onChange={e => onInputChange(e)} />
                    <label> Diretor: </label>
                    <input type="text" name="diretor" value={diretor} onChange={e => onInputChange(e)} />
                    <label> Link no IMDB: </label>
                    <input type="text" name="link" value={link} onChange={e => onInputChange(e)} />
                    <label> Avaliação do filme: </label>
                    <input type="text" name="avaliacao" value={avaliacao} onChange={e => onInputChange(e)} />
                    <button> Editar </button>
                    {/* <button onClick={(e) => this.fSubmit(e)}> Cadastrar </button> */}
                </form>
            </div>
          
        </div>
      );
    }
  export default Edit;
