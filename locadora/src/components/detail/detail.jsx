import React, { useState, useEffect } from "react";
import "../../css/main.css";
import { useParams } from "react-router-dom";
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
                    <p> Link IMDB: <a href={filme.link} target="_blank"> {filme.link} </a> </p>
                </div>
            </div>
          
        </div>
      );
    }
  export default Detail;
