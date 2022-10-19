import { useState, useEffect } from 'react';
import './Calculadora.css';

import { valorExisteEmEnum, trocarValorEmIndice, deletarUltimoCaractere } from '../../classes/Util';
import { CerebroCalculadora } from '../../classes/CerebroCalculadora';

import { AltoEnumComando } from "../../enums/AltoEnumComando";
import { AltoEnumOperacao } from "../../enums/AltoEnumOperacao";
import { EnumNumero } from "../../enums/EnumNumero";
import { AltoEnumElemento } from "../../enums/AltoEnumElemento";

import { BaixoEnumOperacao } from "../../enums/BaixoEnumOperacao";
import { BaixoEnumElemento } from "../../enums/BaixoEnumElemento";

import Tela from '../Tela/Tela';
import Teclado from '../Teclado/Teclado';

import { AltoBaixoEnumOperacao } from "../../classes/EnumConversor";

function Calculadora() {

    const [expressao, setExpressao] = useState("");
    const [resultado, setResultado] = useState("");

    useEffect(() => {
        const cerebroCalculadora = new CerebroCalculadora(expressao);
        setResultado(cerebroCalculadora.getResultado());
    }, [expressao]);

    const lidaComComando = {
        numero: (numero: string) => {
            setExpressao(expressao + numero)
        },
        operacao: (operacao: string) => {
            const baixoOperacao: string = AltoBaixoEnumOperacao(operacao) as string;

            if (expressao === "" && operacao === BaixoEnumOperacao.SUBTRACAO) {
                setExpressao(expressao + operacao);
            } else if (expressao !== "") {

                const ultimoCaractereExpressao = expressao[expressao.length-1];
                if (valorExisteEmEnum(ultimoCaractereExpressao, BaixoEnumOperacao)) {

                    if ((operacao === BaixoEnumOperacao.ADICAO || operacao === BaixoEnumOperacao.SUBTRACAO) && (ultimoCaractereExpressao === BaixoEnumOperacao.ADICAO || ultimoCaractereExpressao === BaixoEnumOperacao.SUBTRACAO)) {
                        setExpressao(trocarValorEmIndice(expressao, baixoOperacao, -1));
                    } else if (ultimoCaractereExpressao !== BaixoEnumOperacao.ADICAO && ultimoCaractereExpressao !== BaixoEnumOperacao.SUBTRACAO && operacao === BaixoEnumOperacao.SUBTRACAO) { 
                        setExpressao(expressao + baixoOperacao);
                    } else {
                        const penultimoCaractereExpressao = expressao[expressao.length-2];
                        if (valorExisteEmEnum(penultimoCaractereExpressao, BaixoEnumOperacao)) {
                            setExpressao(deletarUltimoCaractere(expressao))
                        } else {
                            setExpressao(trocarValorEmIndice(expressao, baixoOperacao, -1));
                        }
                    }

                } else {
                    setExpressao(expressao + baixoOperacao)
                }

            }
        },
        comando: (comando: string) => {
            if (comando === AltoEnumComando.LIMPAR) {
                setExpressao("");
            } else if (comando === AltoEnumComando.APAGAR) {
                setExpressao(deletarUltimoCaractere(expressao));
            } else if (comando === AltoEnumComando.CALCULAR) {
                if (resultado) {
                    setExpressao(resultado);
                }
            }
        },
        elemento: (elemento: string) => {
            if (elemento === AltoEnumElemento.SEPARADOR_DECIMAL) {

                let temSeparadorDecimal = false;
                let posicao = 1;
                while (posicao <= expressao.length && temSeparadorDecimal === false) {
                    const caractereAtual = expressao[expressao.length-posicao];
                    if (caractereAtual === BaixoEnumElemento.SEPARADOR_DECIMAL) {
                        temSeparadorDecimal = true;
                    } else if (!valorExisteEmEnum(caractereAtual, EnumNumero)) {
                        posicao = expressao.length;
                    }
                    posicao++;
                }

                if (!temSeparadorDecimal) setExpressao(expressao + BaixoEnumElemento.SEPARADOR_DECIMAL);

            }
        }
    }

    function comandoDoTeclado(comando: string) {

        if (valorExisteEmEnum(comando, EnumNumero)) {
            lidaComComando.numero(comando);
            return;
        } else if (valorExisteEmEnum(comando, AltoEnumOperacao)) {
            lidaComComando.operacao(comando);
            return;
        } else if (valorExisteEmEnum(comando, AltoEnumComando)) {
            lidaComComando.comando(comando);
            return;
        } else if (valorExisteEmEnum(comando, AltoEnumElemento)) {
            lidaComComando.elemento(comando);
            return;
        }

    }
    

    return (
        <div>
            <div className='calculadora'>
                <Tela expressao={expressao} resultado={resultado} />
                <Teclado comandoDoTeclado={comandoDoTeclado} />
            </div>
            <div className='versao'>
                <p>v0.6.4</p>
            </div>
        </div>
    )
}

export default Calculadora;