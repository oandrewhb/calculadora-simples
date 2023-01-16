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
    function Tecla({conteudo, disabled}: propsTecla) {

        const obterIcone = () => {
            if (conteudo === AltoEnumComando.APAGAR) return <FiDelete />;
            return conteudo;
        }

        return (
            <div className='teclado-coluna'>
                <button
                    className={'tecla'}
                    onClick={() => {
                        comandoDoTeclado(conteudo)
                    }}
                    disabled={disabled}
                >
                    {obterIcone()}
                </button>
            </div>
        );
    }

    return (
        <div className='teclado'>
            <div className='teclado-linha'>
                <Tecla conteudo={AltoEnumComando.LIMPAR} />
                <Tecla conteudo={AltoEnumElemento.PARENTERES} />
                <Tecla conteudo={AltoEnumOperacao.PORCENTAGEM} disabled={true} />
                <Tecla conteudo={AltoEnumOperacao.DIVISAO} />
            </div>
            <div className='teclado-linha'>
                <Tecla conteudo={EnumNumero.SETE} />
                <Tecla conteudo={EnumNumero.OITO} />
                <Tecla conteudo={EnumNumero.NOVE} />
                <Tecla conteudo={AltoEnumOperacao.MULTIPLICACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.QUATRO} />
                <Tecla conteudo={EnumNumero.CINCO} />
                <Tecla conteudo={EnumNumero.SEIS} />
                <Tecla conteudo={AltoEnumOperacao.SUBTRACAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.UM} />
                <Tecla conteudo={EnumNumero.DOIS} />
                <Tecla conteudo={EnumNumero.TRES} />
                <Tecla conteudo={AltoEnumOperacao.ADICAO} />
            </div>
            <div className='teclado-linha'>
            <Tecla conteudo={EnumNumero.ZERO} />
                <Tecla conteudo={AltoEnumElemento.SEPARADOR_DECIMAL} />
                <Tecla conteudo={AltoEnumComando.APAGAR} />
                <Tecla conteudo={AltoEnumComando.CALCULAR} />
            </div>
        </div>
    );
}

export default Teclado;