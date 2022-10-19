import { valorExisteEmEnum } from '../classes/Util';

import { BaixoEnumOperacao } from '../enums/BaixoEnumOperacao';
import { EnumStatusExpressao } from '../enums/EnumStatusExpressao';

export class CerebroCalculadora {
    private expressao: string;
    private resultado: string = "";
    private statusExpressao: string;

    constructor(expressao: string = "") {
        let expressaoFormatada = expressao;
        let statusExpressao = EnumStatusExpressao.FINALIZADA;

        const ultimoCaractere = expressaoFormatada[expressaoFormatada.length-1];
        if (valorExisteEmEnum(ultimoCaractere, BaixoEnumOperacao)) {
            statusExpressao = EnumStatusExpressao.CONSTRUINDO;
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