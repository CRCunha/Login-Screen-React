import React from 'react'
import './formulario.css'

const Formulario = (props) => (
    <form action="" method="POST">
        <div className="tituloFormulario">
            <div className="container">{props.texto}</div>
        </div>
        <div className="subTituloFormulario">
            <div className="container">{props.sub}</div>
        </div>
        <div className="inputs">
            <input id="email" type="email" name="email" autoComplete="off" />
            <input id="senha" type="password" name="senha"  autoComplete="off" />
            <input type="submit" value="Enviar"  autoComplete="off" />
        </div>
        <div className="recover">
            <div class="container"><a href="#">Esqueceu sua senha?</a></div>
        </div>
    </form>
);

export default Formulario;