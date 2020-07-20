import React, { Component, useState, useEffect } from "react";
import "./detail.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import api from "../../api.js";

const Detail = () => {
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

  const { id } = useParams();

  useEffect(() => {
    loadMovie()
}, []);

  const loadMovie = async () => {
    const result = await api.get(`/filmes/${id}`);
    setUser(result.data);
}

//   const { titulo, sinopse, genero, lancamento, idioma, legenda, diretor, avaliacao, link } = filme;
//       const onInputChange = e => {
//         console.log(e.target.value);
//         setUser({ ... filme, [e.target.name]: e.target.value });
        
//       }

      

//       const onSubmit = async e => {
//         e.preventDefault();
//         await api.put(`/filmes/${id}`, filme);
//         history.push('/');
//       } ;

    
      return (
        <div className="detail">
            <div className="detail__title">
              <h1>{filme.titulo} <span className="detail__year">({filme.lancamento})</span></h1>
            </div>
            <div className="detail__content">
                <div className="detail__content-note">
                    <p> <span className="destaque">{filme.avaliacao}</span>/10</p>
                </div>
                <div className="detail__content-information">
                    <p> Gênero: {filme.genero} </p>
                    <p> Idioma: {filme.idioma}</p>
                    <p> Legenda: {filme.legenda} </p>
                </div>
                <div className="detail__content-sinopse">
                    <p>{filme.sinopse}</p>
                </div>
                <div className="detail__content-link">
                    <p> Diretor: {filme.diretor} </p>
                    <p> Link IMDB: {filme.link} </p>
                </div>
            </div>
          
        </div>
      );
    }
  export default Detail;
