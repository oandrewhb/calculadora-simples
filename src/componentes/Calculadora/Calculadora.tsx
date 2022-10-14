import React, { useState } from 'react';
import './Calculadora.css';

import { EnumNumero } from '../../Enums/EnumNumero';
import { EnumOperacao } from '../../Enums/EnumOperacao';

import Tela from '../Tela/Tela';
import Teclado from '../Teclado/Teclado';

function Calculadora() {

    const [expressao, setExpressao] = useState("");
    const [resultado, setResultado] = useState("");

    function comandoDoTeclado(comando: string) {

        Object.values(EnumNumero).map((validaEnumNumero) => {
            if (comando == validaEnumNumero) {
                setExpressao(expressao + comando)
                return
            }
        })

        Object.values(EnumOperacao).map(validaEnumOperacao => {
            if (comando == validaEnumOperacao) {
                let ultimoElementoExpressao: string = expressao[expressao.length-1];

                if ((ultimoElementoExpressao == EnumOperacao.ADICAO || ultimoElementoExpressao == EnumOperacao.SUBTRACAO) && (comando == EnumOperacao.ADICAO || comando == EnumOperacao.SUBTRACAO)) {
                    let novaExpressao = expressao.slice(0, expressao.length-1);
                    novaExpressao += comando;
                    setExpressao(novaExpressao)
                    return
                } else {

                    let ultimoElementoExpressaoIsOperacao: boolean = false;
                    Object.values(EnumOperacao).map(elemento => {
                        if (ultimoElementoExpressao == elemento) {
                            ultimoElementoExpressaoIsOperacao = true;
                        }
                    })

                    if (!ultimoElementoExpressaoIsOperacao) {
                        setExpressao(expressao + comando);
                        return
                    }

                }

            }
        })

    }
    

    return (
        <div className='calculadora'>
            <Tela expressao={expressao} resultado={resultado} />
            <Teclado comandoDoTeclado={comandoDoTeclado} />
        </div>
    )
}

export default Calculadora;