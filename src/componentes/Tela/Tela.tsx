import React from 'react';
import './Tela.css';

interface props {
    expressao: string,
    resultado: string,
}

function Tela({expressao, resultado}: props) {
    return (
        <div className='tela'>
            <div className="expressao">
                <p>Expressão:</p>
                <textarea value={expressao} />
            </div>
            <div className="resultado">
                <p>Resultado: {resultado}</p>
                <textarea value={resultado} />
            </div>
        </div>
    );
}

export default Tela;