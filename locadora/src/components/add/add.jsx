import React, { Component, useState } from "react";
import "./add.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import api from "../../api.js";

const AddUser = () => {
  let history = useHistory();
  const [filme, setUser ] = useState({
    titulo: "",
    sinopse: ""
  });

  const { titulo, sinopse } = filme;
      const onInputChange = e => {
        console.log(e.target.value);
        setUser({ ... filme, [e.target.name]: e.target.value });
        
      }

      const onSubmit = async e => {
        e.preventDefault();
        await api.post("/filmes", filme);
        // history.push('/');
      } ;
    
      return (
        <div className="add">
            <div className="add__title">
              <h1> Adcionar Filmes</h1>
            </div>
            <div className="add__form">
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <label> Título do Filme: </label>
                    <input type="text" name="titulo" value={titulo} onChange={e => onInputChange(e)} />
                    <label> Sinopse: </label>
                    <input type="text" name="sinopse" value={sinopse} onChange={e => onInputChange(e)} ></input>
                    <label> Genero: </label>
                    <input type="text"></input>
                    <label> Data de lançamento: </label>
                    <input type="text"></input>
                    <label> Idioma: </label>
                    <input type="text"></input>
                    <label> Legendado: </label>
                    <input type="text"></input>
                    <label> Diretor: </label>
                    <input type="text"></input>
                    <label> Link no IMDB: </label>
                    <input type="text"></input>
                    <label> Avaliação do filme: </label>
                    <input type="text"></input>
                    <button> Cadastrar </button>
                    {/* <button onClick={(e) => this.fSubmit(e)}> Cadastrar </button> */}
                    <button> Limpar </button>
                </form>
            </div>
          
        </div>
      );
    }
  export default AddUser;


// export default class Add extends Component {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     filmes: []
  //   }
  // }

//   render() {
//     const AddUser = () => {
//       let history = useHistory();
//       const [filme, setUser ] = useState({
//         titulo: "",
//         sinopse: ""
//       });
//     }
  
//       const { titulo, sinopse } = this.filme;
//       const onInputChange = e => {
//         console.log(e.target.value);
//         setUser({ ... this.filme, [e.target.titulo]: e.target.value });
//         history.push('/')
//       }
    
    

//     const onSubmit = async e => {
//       e.preventDefault();
//       await axios.post("http://localhost:4000/filmes", this.filme);

//     } ;
  
//     return (
//       <div className="add">
//           <div className="add__title">
//             <h1> Adcionar Filmes</h1>
//           </div>
//           <div className="add__form">
//               <form className="form" onSubmit={e => onSubmit(e)}>
//                   <label> Título do Filme: </label>
//                   <input type="text" name="titulo" value={this.titulo} onChange={e => onInputChange(e)} />
//                   <label> Sinopse: </label>
//                   <input type="text" name="sinopse" value={this.sinopse} onChange={e => onInputChange(e)} ></input>
//                   <label> Genero: </label>
//                   <input type="text"></input>
//                   <label> Data de lançamento: </label>
//                   <input type="text"></input>
//                   <label> Idioma: </label>
//                   <input type="text"></input>
//                   <label> Legendado: </label>
//                   <input type="text"></input>
//                   <label> Diretor: </label>
//                   <input type="text"></input>
//                   <label> Link no IMDB: </label>
//                   <input type="text"></input>
//                   <label> Avaliação do filme: </label>
//                   <input type="text"></input>
//                   <button> Cadastrar </button>
//                   {/* <button onClick={(e) => this.fSubmit(e)}> Cadastrar </button> */}
//                   <button> Limpar </button>
//               </form>
//           </div>
        
//       </div>
//     );
//   }
// }
