export function valorExisteEmEnum(valor: string, enumParam: object):boolean {
    let existe = false;
    Object.values(enumParam).map((e, indice) => {
        if (valor == e) {
            existe = true;
        }
    });
    return existe;
}

export function trocarValorEmIndice(stringPrincipal: string, valor: string, indice: number): string {
    let stringPrincipalArray = stringPrincipal.split("");

    if (indice >= 0) {
        stringPrincipalArray[indice] = valor;
    } else {
        stringPrincipalArray[stringPrincipalArray.length+indice] = valor
    }

    let resultado = "";

    for (const letra of stringPrincipalArray) {
        resultado += letra;
    }

    return resultado;
}

export function deletarUltimoCaractere(stringPrincipal: string): string {
    if (stringPrincipal == "") {
        return "";
    } else {
        return trocarValorEmIndice(stringPrincipal, "", -1);
    }
}