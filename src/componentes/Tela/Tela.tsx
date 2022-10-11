import React, { useState } from 'react';
import './Tela.css';

interface props {
    contador: number,
}

function Tela({contador}: props) {
    return (
        <div className='tela'>
            <p>Contador: {contador}</p>
        </div>
    );
}

export default Tela;