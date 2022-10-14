import './Tela.css';

const expressaoAltoNivel = (expressao: string) => {
    if (expressao === "") {
        return "_";
    } else {
        return expressao;
    }
}

const resultadoAltoNivel = (resultado: string) => {
    if (resultado === "") {
        return "_";
    } else {
        return resultado;
    }
}

interface propsTela {expressao: string, resultado: string}
function Tela({expressao, resultado}: propsTela) {
    return (
        <div className='tela'>
            <div className="expressao">
                <p>Expressão:</p>
                <p>{expressaoAltoNivel(expressao)}</p>
            </div>
            <div className="resultado">
                <p>Resultado:</p>
                <p>{resultadoAltoNivel(resultado)}</p>
            </div>
        </div>
    );
}

export default Tela;