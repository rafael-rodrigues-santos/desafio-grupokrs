import React, { Component, useState } from "react";
import "../../css/main.css";
import { useHistory } from "react-router-dom";
import api from "../../api.js";

const AddMovie = () => {
  let history = useHistory();
  const [filme, setMovie] = useState({
    titulo: "",
    sinopse: "",
    genero: "",
    lancamento: "",
    idioma: "",
    legenda: "",
    diretor: "",
    avaliacao: "",
    link: "",
  });

  const {
    titulo,
    sinopse,
    genero,
    lancamento,
    idioma,
    legenda,
    diretor,
    avaliacao,
    link,
  } = filme;
  const onInputChange = (e) => {
    setMovie({ ...filme, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    const titulo = document.querySelector(".titulo");

    if (titulo.value != "") {
      e.preventDefault();
      await api.post("/filmes", filme);
      history.push("/");
      return;
    } else {
      alert("Não pode gravar");
      e.preventDefault();
      return false;
    }
  };

  return (
    <div className="add">
      <div className="add__title">
        <h1> Adcionar Filmes</h1>
      </div>
      <div className="add__form">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <label> Título do Filme: </label>
          <input
            type="text"
            name="titulo"
            value={titulo}
            className="titulo"
            onChange={(e) => onInputChange(e)}
          />
          <label> Sinopse: </label>
          <input
            type="text"
            name="sinopse"
            value={sinopse}
            onChange={(e) => onInputChange(e)}
          />
          <label> Genero: </label>
          <input
            type="text"
            name="genero"
            value={genero}
            onChange={(e) => onInputChange(e)}
          />
          <label> Data de lançamento: </label>
          <input
            type="text"
            name="lancamento"
            value={lancamento}
            onChange={(e) => onInputChange(e)}
          />
          <label> Idioma: </label>
          <input
            type="text"
            name="idioma"
            value={idioma}
            onChange={(e) => onInputChange(e)}
          />
          <label> Legendado: </label>
          <input
            type="text"
            name="legenda"
            value={legenda}
            onChange={(e) => onInputChange(e)}
          />
          <label> Diretor: </label>
          <input
            type="text"
            name="diretor"
            value={diretor}
            onChange={(e) => onInputChange(e)}
          />
          <label> Link no IMDB: </label>
          <input
            type="text"
            name="link"
            value={link}
            onChange={(e) => onInputChange(e)}
          />
          <label> Avaliação do filme: </label>
          <input
            type="text"
            name="avaliacao"
            value={avaliacao}
            onChange={(e) => onInputChange(e)}
          />
          <div className="btns">
          <button type="reset" className="btns__clear"> Limpar </button>
          <button type="submit" className="btns__register"> Cadastrar </button>            
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddMovie;
