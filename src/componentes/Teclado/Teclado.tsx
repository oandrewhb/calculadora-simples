import React from 'react';
import './Teclado.css';

import { EnumComando } from "../../enums/EnumComando";
import { EnumOperacao } from "../../enums/EnumOperacao";
import { EnumNumero } from "../../enums/EnumNumero";

interface propsTeclado {
    comandoDoTeclado: Function,
}
function Teclado({comandoDoTeclado}: propsTeclado) {


    interface propsTecla {conteudo: string, disabled?: boolean}
    function Tecla({conteudo, disabled}: propsTecla) {
        return (
            <div className='teclado-coluna'>
                <button
                    className='tecla' onClick={() => {
                        comandoDoTeclado(conteudo)
                    }}
                    disabled={disabled}
                >
                    {conteudo}
                </button>
            </div>
        );
    }

    return (
        <div className='teclado'>
            <div className='teclado-linha'>
                <Tecla conteudo={EnumComando.LIMPAR} />
                <Tecla conteudo="( )" disabled={true} />
                <Tecla conteudo={EnumOperacao.PORCENTAGEM} disabled={true} />
                <Tecla conteudo={EnumOperacao.DIVISAO} />
            </div>
            <div className='teclado-linha'>
                <Tecla conteudo={EnumNumero.SETE} />
                <Tecla conteudo={EnumNumero.OITO} />
                <Tecla conteudo={EnumNumero.NOVE} />
                <Tecla conteudo={EnumOperacao.MULTIPLICACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.QUATRO} />
                <Tecla conteudo={EnumNumero.CINCO} />
                <Tecla conteudo={EnumNumero.SEIS} />
                <Tecla conteudo={EnumOperacao.SUBTRACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.UM} />
                <Tecla conteudo={EnumNumero.DOIS} />
                <Tecla conteudo={EnumNumero.TRES} />
                <Tecla conteudo={EnumOperacao.ADICAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.ZERO} />
                <Tecla conteudo="," disabled={true} />
                <Tecla conteudo={EnumComando.APAGAR} />
                <Tecla conteudo={EnumComando.CALCULAR} />
            </div>
        </div>
    );
}

export default Teclado;