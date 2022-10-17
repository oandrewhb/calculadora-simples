import { EnumElemento } from '../../enums/EnumElemento';
import './Tela.css';

function altoNivel(param: string): string {
    return param.replaceAll(".", EnumElemento.SEPARADOR_DECIMAL);
}

interface propsTela {expressao: string, resultado: string}
function Tela({expressao, resultado}: propsTela) {
    return (
        <div className='tela'>
            <div className='numeros'>
                <div className="expressao">
                    <p>{altoNivel(expressao)}</p>
                </div>
                <div className="resultado">
                    <p>{altoNivel(resultado)}</p>
                </div>
            </div>
        </div>
    );
}

export default Tela;