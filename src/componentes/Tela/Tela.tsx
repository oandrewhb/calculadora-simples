import './Tela.css';

import { AltoEnumElemento } from "../../enums/AltoEnumElemento";
import { AltoEnumOperacao } from "../../enums/AltoEnumOperacao";

import { BaixoEnumElemento } from "../../enums/BaixoEnumElemento";
import { BaixoEnumOperacao } from "../../enums/BaixoEnumOperacao";

function altoNivel(param: string): string {
    let resultado = param.replaceAll(BaixoEnumElemento.SEPARADOR_DECIMAL, AltoEnumElemento.SEPARADOR_DECIMAL);

    resultado = resultado.replaceAll(BaixoEnumOperacao.FATORIAL, AltoEnumOperacao.FATORIAL);
    resultado = resultado.replaceAll(BaixoEnumOperacao.PORCENTAGEM, AltoEnumOperacao.PORCENTAGEM);
    resultado = resultado.replaceAll(BaixoEnumOperacao.RADICIACAO, AltoEnumOperacao.RADICIACAO);
    resultado = resultado.replaceAll(BaixoEnumOperacao.POTENCIASAO, AltoEnumOperacao.POTENCIASAO);
    resultado = resultado.replaceAll(BaixoEnumOperacao.DIVISAO, AltoEnumOperacao.DIVISAO);
    resultado = resultado.replaceAll(BaixoEnumOperacao.MULTIPLICACAO, AltoEnumOperacao.MULTIPLICACAO);
    resultado = resultado.replaceAll(BaixoEnumOperacao.SUBTRACAO, AltoEnumOperacao.SUBTRACAO);
    resultado = resultado.replaceAll(BaixoEnumOperacao.ADICAO, AltoEnumOperacao.ADICAO);

    return resultado;
}

interface propsTela {expressao: string, resultado: string}
function Tela({expressao, resultado}: propsTela) {
    return (
        <div className='tela'>
            <div className='numeros'>
                <div className="expressao">
                    {/* <p>{altoNivel(expressao)}</p> */}
                    <p>524543278462375946327560423567423542678</p>
                </div>
                <div className="resultado">
                    {/* <p>{altoNivel(resultado)}</p> */}
                    <p>524543278462375946327560423567423542678</p>
                </div>
            </div>
        </div>
    );
}

export default Tela;