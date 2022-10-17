import React from 'react';
import './Teclado.css';

import { EnumComando } from "../../enums/EnumComando";
import { EnumOperacao } from "../../enums/EnumOperacao";
import { EnumNumero } from "../../enums/EnumNumero";

interface propsTeclado {
    comandoDoTeclado: Function,
}
function Teclado({comandoDoTeclado}: propsTeclado) {


    interface propsBotao {conteudo: string, disabled?: boolean}
    function Botao({conteudo, disabled}: propsBotao) {
        return (
            <button onClick={() => comandoDoTeclado(conteudo)} disabled={disabled}>{conteudo}</button>
        );
    }

    return (
        <div className='teclado'>
            <Botao conteudo={EnumComando.LIMPAR} />
            <Botao conteudo={"()"} disabled={true} />
            <Botao conteudo={EnumOperacao.PORCENTAGEM} disabled={true} />
            <Botao conteudo={EnumOperacao.DIVISAO} />
            <br/>
            <Botao conteudo={EnumNumero.SETE} />
            <Botao conteudo={EnumNumero.OITO} />
            <Botao conteudo={EnumNumero.NOVE} />
            <Botao conteudo={EnumOperacao.MULTIPLICACAO} />
            <br/>
            <Botao conteudo={EnumNumero.QUATRO} />
            <Botao conteudo={EnumNumero.CINCO} />
            <Botao conteudo={EnumNumero.SEIS} />
            <Botao conteudo={EnumOperacao.SUBTRACAO} />
            <br/>
            <Botao conteudo={EnumNumero.UM} />
            <Botao conteudo={EnumNumero.DOIS} />
            <Botao conteudo={EnumNumero.TRES} />
            <Botao conteudo={EnumOperacao.ADICAO} />
            <br/>
            <Botao conteudo={EnumNumero.ZERO} />
            <Botao conteudo={","} disabled={true} />
            <Botao conteudo={EnumComando.APAGAR} />
            <Botao conteudo={EnumComando.CALCULAR} />
        </div>
    );
}

export default Teclado;