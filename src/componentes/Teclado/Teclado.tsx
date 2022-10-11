import React from 'react';
import './Teclado.css';

interface props {
    atualizarContador: Function,
}

function Teclado({atualizarContador}: props) {
    return (
        <div className='teclado'>
            <button onClick={() => {atualizarContador("mais")}}>Mais</button>
            <button onClick={() => {atualizarContador("menos")}}>Menos</button>
        </div>
    );
}

export default Teclado;