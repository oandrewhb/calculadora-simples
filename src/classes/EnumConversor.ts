import { AltoEnumOperacao } from "../enums/AltoEnumOperacao";
import { BaixoEnumOperacao } from "../enums/BaixoEnumOperacao";

export function AltoBaixoEnumOperacao(operacao: string): BaixoEnumOperacao | undefined {
    
    if (operacao === AltoEnumOperacao.ADICAO) return BaixoEnumOperacao.ADICAO
    if (operacao === AltoEnumOperacao.SUBTRACAO) return BaixoEnumOperacao.SUBTRACAO
    if (operacao === AltoEnumOperacao.MULTIPLICACAO) return BaixoEnumOperacao.MULTIPLICACAO
    if (operacao === AltoEnumOperacao.DIVISAO) return BaixoEnumOperacao.DIVISAO
    if (operacao === AltoEnumOperacao.POTENCIASAO) return BaixoEnumOperacao.POTENCIASAO
    if (operacao === AltoEnumOperacao.RADICIACAO) return BaixoEnumOperacao.RADICIACAO
    if (operacao === AltoEnumOperacao.PORCENTAGEM) return BaixoEnumOperacao.PORCENTAGEM
    if (operacao === AltoEnumOperacao.FATORIAL) return BaixoEnumOperacao.FATORIAL

}