import { valorExisteEmEnum } from '../classes/Util';

import { BaixoEnumElemento } from '../enums/BaixoEnumElemento';
import { BaixoEnumOperacao } from '../enums/BaixoEnumOperacao';
import { EnumStatusExpressao } from '../enums/EnumStatusExpressao';
import { EnumNumero } from '../enums/EnumNumero';

export class CerebroCalculadora {
    private expressao: string;
    private resultado: string = "";
    private statusExpressao: string;

    // O método construtor deve fazer as devidas formatações da expressão
    constructor(expressao: string = "") {
        let expressaoFormatada = expressao;
        let statusExpressao = EnumStatusExpressao.FINALIZADA;

        // Determina o status da expressão, se está FINALIZADA ou se ainda está CONSTRUINDO
        const ultimoCaractere = expressaoFormatada[expressaoFormatada.length-1];
        if (valorExisteEmEnum(ultimoCaractere, BaixoEnumOperacao)) {
            statusExpressao = EnumStatusExpressao.CONSTRUINDO;
        }

        // Adiciona multiplicação entre abre e fecha parenteses. Ex: ")("
        expressaoFormatada = expressaoFormatada.replaceAll(BaixoEnumElemento.FECHA_PARENTERES + BaixoEnumElemento.ABRE_PARENTERES, BaixoEnumElemento.FECHA_PARENTERES + BaixoEnumOperacao.MULTIPLICACAO + BaixoEnumElemento.ABRE_PARENTERES)

        // Adiciona multiplicação entre números e abre/fecha parenteses. Ex: "8(8)", "(8)8"
        Object.values(EnumNumero).forEach(num => {
            expressaoFormatada = expressaoFormatada.replaceAll(num + BaixoEnumElemento.ABRE_PARENTERES, num + BaixoEnumOperacao.MULTIPLICACAO + BaixoEnumElemento.ABRE_PARENTERES)
            expressaoFormatada = expressaoFormatada.replaceAll(BaixoEnumElemento.FECHA_PARENTERES + num, BaixoEnumElemento.FECHA_PARENTERES + BaixoEnumOperacao.MULTIPLICACAO + num)
        })

        // Fecha parenteses faltantes
        let parenteses = 0
        for (const car of expressao.split('')) {
            if (car === BaixoEnumElemento.ABRE_PARENTERES) {
                parenteses++
            } else if (car === BaixoEnumElemento.FECHA_PARENTERES) {
                parenteses--
            }
        }
        while (parenteses > 0) {
            expressaoFormatada = expressaoFormatada + BaixoEnumElemento.FECHA_PARENTERES
            parenteses--
        }

        this.expressao = expressaoFormatada;
        this.statusExpressao = statusExpressao;
    }


    private gerarResultado(): void {
        if (this.statusExpressao === EnumStatusExpressao.FINALIZADA) {
            try {
                // eslint-disable-next-line
                const resultado = eval(this.expressao).toString();
                if (resultado !== this.expressao) {
                    this.resultado = resultado;
                }
            } catch (e) {
                const mostrarExceptions = false;
                if (window.location.href.includes("localhost") && mostrarExceptions) {
                    console.log(
                        " >-------------------{ Exception em CerebroCalculadora.ts }-------------------< \n",
                        e,
                        "\n >--------------------------------------------------------------------------<"
                    );
                }
            }
        }
    }

    public getResultado(): string {
        this.gerarResultado();
        return this.resultado;
    }

}