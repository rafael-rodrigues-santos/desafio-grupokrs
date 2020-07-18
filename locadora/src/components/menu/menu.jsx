import React, { Component } from "react";
import "./menu.css";

export default class Menu extends Component {
    render(){
        return (
            <div className="menu">
                <div className="menu__container">
                    <div className="menu__container--itens">
                        <div>
                            Inicio
                        </div>
                        <div>
                            Sobre
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
