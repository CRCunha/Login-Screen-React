import React from 'react';
import './aside.css';
import Rocket from './IMG/rocket.png';

const Aside = () => (
    <aside>
        <div className="conteudoDoTop">
            <img src={Rocket} alt="rocket" />
        </div>
        <div className="conteudoDoBot">
            <div className="tituloPrincipal">ROCKET ROOM 1</div>
            <div className="subPrincipal">
                Etiam luctus urna ex
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="controle">
                <div className="container">
                    <div className="unidadeControladora" id="controle1" onClick={handleClickCtrl1}></div>
                    <div className="unidadeControladora" id="controle2" onClick={handleClickCtrl2}></div>
                    <div className="unidadeControladora" id="controle3" onClick={handleClickCtrl3}></div>
                </div>
            </div>
        </div>
    </aside>
);

export default Aside;


function handleClickCtrl1(){
    let controle1 = document.querySelector("#controle1");
    let controle2 = document.querySelector("#controle2");
    let controle3 = document.querySelector("#controle3");
    let titulo = document.querySelector(".tituloPrincipal");

    titulo.innerHTML = "ROCKET ROOM 1";
    controle1.style.backgroundColor = "#ccc";
    controle2.style.backgroundColor = "#fff";
    controle3.style.backgroundColor = "#fff";
}

function handleClickCtrl2(){
    let controle1 = document.querySelector("#controle1");
    let controle2 = document.querySelector("#controle2");
    let controle3 = document.querySelector("#controle3");
    let titulo = document.querySelector(".tituloPrincipal");

    titulo.innerHTML = "ROCKET ROOM 2";
    controle1.style.backgroundColor = "#fff";
    controle2.style.backgroundColor = "#ccc";
    controle3.style.backgroundColor = "#fff";
}

function handleClickCtrl3(){
    let controle1 = document.querySelector("#controle1");
    let controle2 = document.querySelector("#controle2");
    let controle3 = document.querySelector("#controle3");
    let titulo = document.querySelector(".tituloPrincipal");

    titulo.innerHTML = "ROCKET ROOM 3";
    controle1.style.backgroundColor = "#fff";
    controle2.style.backgroundColor = "#fff";
    controle3.style.backgroundColor = "#ccc";
}