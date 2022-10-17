import React from 'react';
import './Teclado.css';

import { EnumComando } from "../../enums/EnumComando";
import { EnumOperacao } from "../../enums/EnumOperacao";
import { EnumNumero } from "../../enums/EnumNumero";
import { EnumElemento } from '../../enums/EnumElemento';

interface propsTeclado {
    comandoDoTeclado: Function,
}
function Teclado({comandoDoTeclado}: propsTeclado) {


    interface propsTecla {conteudo: string, disabled?: boolean, vermelho?: boolean}
    function Tecla({conteudo, disabled, vermelho}: propsTecla) {


        return (
            <div className='teclado-coluna'>
                <button
                    className={vermelho? 'tecla vermelho' : 'tecla'} onClick={() => {
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
                <Tecla vermelho={true} conteudo={EnumComando.LIMPAR} />
                <Tecla vermelho={true} conteudo={EnumElemento.PARENTERES} disabled={true} />
                <Tecla vermelho={true} conteudo={EnumOperacao.PORCENTAGEM} disabled={true} />
                <Tecla vermelho={true} conteudo={EnumOperacao.DIVISAO} />
            </div>
            <div className='teclado-linha'>
                <Tecla conteudo={EnumNumero.SETE} />
                <Tecla conteudo={EnumNumero.OITO} />
                <Tecla conteudo={EnumNumero.NOVE} />
                <Tecla vermelho={true} conteudo={EnumOperacao.MULTIPLICACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.QUATRO} />
                <Tecla conteudo={EnumNumero.CINCO} />
                <Tecla conteudo={EnumNumero.SEIS} />
                <Tecla vermelho={true} conteudo={EnumOperacao.SUBTRACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.UM} />
                <Tecla conteudo={EnumNumero.DOIS} />
                <Tecla conteudo={EnumNumero.TRES} />
                <Tecla vermelho={true} conteudo={EnumOperacao.ADICAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.ZERO} />
                <Tecla conteudo={EnumElemento.SEPARADOR_DECIMAL} />
                <Tecla conteudo={EnumComando.APAGAR} />
                <Tecla vermelho={true} conteudo={EnumComando.CALCULAR} />
            </div>
        </div>
    );
}

export default Teclado;