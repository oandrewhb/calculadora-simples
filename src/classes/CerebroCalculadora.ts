import { valorExisteEmEnum } from '../classes/Util';
import { EnumOperacao } from '../enums/EnumOperacao';

export class CerebroCalculadora {
    private expressao: string;
    private resultado: string;

    constructor(expressao: string = "") {
        this.expressao = expressao;
        this.resultado = "";
    }

    private obterExpressaoBaixoNivel(): string {
        let expressaoBaixoNivel = this.expressao;

        const ultimoCaractereExpressao = expressaoBaixoNivel[expressaoBaixoNivel.length-1];
        if (valorExisteEmEnum(ultimoCaractereExpressao, EnumOperacao)) {
            if (ultimoCaractereExpressao === EnumOperacao.MULTIPLICACAO || ultimoCaractereExpressao === EnumOperacao.DIVISAO) {
                expressaoBaixoNivel += "1";
            } else if (ultimoCaractereExpressao === EnumOperacao.ADICAO || ultimoCaractereExpressao === EnumOperacao.SUBTRACAO) {
                expressaoBaixoNivel += "0";
            }
        }

        expressaoBaixoNivel = expressaoBaixoNivel.replaceAll(EnumOperacao.MULTIPLICACAO, "*");

        if (expressaoBaixoNivel === "") {
            expressaoBaixoNivel = "0";
        }

        return expressaoBaixoNivel;
    }

    private gerarResultado(): void {
        try {
            const expressao = this.obterExpressaoBaixoNivel();
            // eslint-disable-next-line
            const resultado = eval(expressao).toString();
            if (resultado === expressao) {
                this.resultado = "";
            } else {
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

    public getResultado(): string {
        this.gerarResultado();
        return this.resultado;
    }

}