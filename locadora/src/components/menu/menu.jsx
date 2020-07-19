import React, { Component } from "react";
import "./menu.css";

export default class Menu extends Component {
    render(){
        return (
            <div className="menu">
                <div className="menu__container">
                    <div className="menu__container-itens">
                        <ul>
                            <li> Home </li>
                            <li> Adcionar Filme </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
