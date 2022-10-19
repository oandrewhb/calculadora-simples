import './Teclado.css';

import { FiDelete } from 'react-icons/fi';

import { AltoEnumComando } from "../../enums/AltoEnumComando";
import { AltoEnumOperacao } from "../../enums/AltoEnumOperacao";
import { EnumNumero } from "../../enums/EnumNumero";
import { AltoEnumElemento } from "../../enums/AltoEnumElemento";

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
                    {conteudo === AltoEnumComando.APAGAR ? <FiDelete /> : conteudo}
                </button>
            </div>
        );
    }

    return (
        <div className='teclado'>
            <div className='teclado-linha'>
                <Tecla vermelho={true} conteudo={AltoEnumComando.LIMPAR} />
                <Tecla vermelho={true} conteudo={AltoEnumElemento.PARENTERES} disabled={true} />
                <Tecla vermelho={true} conteudo={AltoEnumOperacao.PORCENTAGEM} disabled={true} />
                <Tecla vermelho={true} conteudo={AltoEnumOperacao.DIVISAO} />
            </div>
            <div className='teclado-linha'>
                <Tecla conteudo={EnumNumero.SETE} />
                <Tecla conteudo={EnumNumero.OITO} />
                <Tecla conteudo={EnumNumero.NOVE} />
                <Tecla vermelho={true} conteudo={AltoEnumOperacao.MULTIPLICACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.QUATRO} />
                <Tecla conteudo={EnumNumero.CINCO} />
                <Tecla conteudo={EnumNumero.SEIS} />
                <Tecla vermelho={true} conteudo={AltoEnumOperacao.SUBTRACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.UM} />
                <Tecla conteudo={EnumNumero.DOIS} />
                <Tecla conteudo={EnumNumero.TRES} />
                <Tecla vermelho={true} conteudo={AltoEnumOperacao.ADICAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.ZERO} />
                <Tecla conteudo={AltoEnumElemento.SEPARADOR_DECIMAL} />
                <Tecla conteudo={AltoEnumComando.APAGAR} />
                <Tecla vermelho={true} conteudo={AltoEnumComando.CALCULAR} />
            </div>
        </div>
    );
}

export default Teclado;