import React, { Component } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
    render(){
        return (
            <div className="menu">
                <div className="menu__container">
                    <div className="menu__container-itens">
                        <ul>
                            <Link to="/list" className="menu__container-link teste"><li >  Home </li> </Link> 
                            <Link to="/add" className="menu__container-link"> <li> Adicionar Filme </li> </Link> 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
