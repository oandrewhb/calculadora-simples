import { useState, useEffect } from 'react';
import './Calculadora.css';

import { EnumComando } from "../../enums/EnumComando";
import { EnumOperacao } from "../../enums/EnumOperacao";
import { EnumNumero } from "../../enums/EnumNumero";

import { valorExisteEmEnum, trocarValorEmIndice, deletarUltimoCaractere } from '../../classes/Util';
import { CerebroCalculadora } from '../../classes/CerebroCalculadora';

import Tela from '../Tela/Tela';
import Teclado from '../Teclado/Teclado';

function Calculadora() {

    const [expressao, setExpressao] = useState("");
    const [resultado, setResultado] = useState("");

    useEffect(() => {
        const cerebroCalculadora = new CerebroCalculadora(expressao);
        setResultado(cerebroCalculadora.getResultado());
    });

    const lidaComComando = {
        numero: (numero: string) => {
            setExpressao(expressao + numero)
        },
        operacao: (operacao: string) => {
            if (expressao == "" && operacao == EnumOperacao.SUBTRACAO) {
                setExpressao(expressao + operacao);
            } else if (expressao != "") {

                const ultimoCaractereExpressao = expressao[expressao.length-1];
                if (valorExisteEmEnum(ultimoCaractereExpressao, EnumOperacao)) {

                    if ((operacao == EnumOperacao.ADICAO || operacao == EnumOperacao.SUBTRACAO) && (ultimoCaractereExpressao == EnumOperacao.ADICAO || ultimoCaractereExpressao == EnumOperacao.SUBTRACAO)) {
                        setExpressao(trocarValorEmIndice(expressao, operacao, -1));
                    } else if (ultimoCaractereExpressao != EnumOperacao.ADICAO && ultimoCaractereExpressao != EnumOperacao.SUBTRACAO && operacao == EnumOperacao.SUBTRACAO) { 
                        setExpressao(expressao + operacao);
                    } else {
                        const penultimoCaractereExpressao = expressao[expressao.length-2];
                        if (valorExisteEmEnum(penultimoCaractereExpressao, EnumOperacao)) {
                            setExpressao(deletarUltimoCaractere(expressao))
                        } else {
                            setExpressao(trocarValorEmIndice(expressao, operacao, -1));
                        }
                    }

                } else {
                    setExpressao(expressao + operacao)
                }

            }
        },
        comando: (comando: string) => {
            if (comando == EnumComando.LIMPAR) {
                setExpressao("");
                return;
            }

            if (comando == EnumComando.APAGAR) {
                setExpressao(deletarUltimoCaractere(expressao));
                return;
            }

            if (comando == EnumComando.CALCULAR) {
                setExpressao(resultado);
            }
        },
    }

    function comandoDoTeclado(comando: string) {

        if (valorExisteEmEnum(comando, EnumNumero)) {
            lidaComComando.numero(comando);
        }

        if (valorExisteEmEnum(comando, EnumOperacao)) {
            lidaComComando.operacao(comando);
        }

        if (valorExisteEmEnum(comando, EnumComando)) {
            lidaComComando.comando(comando);
        }

    }
    

    return (
        <div className='calculadora'>
            <Tela expressao={expressao} resultado={resultado} />
            <Teclado comandoDoTeclado={comandoDoTeclado} />
        </div>
    )
}

export default Calculadora;