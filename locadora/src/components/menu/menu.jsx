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
                            <li> <Link to="/list"> Home </Link> </li>
                            <li> <Link to="/add"> Adcionar Filme </Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
