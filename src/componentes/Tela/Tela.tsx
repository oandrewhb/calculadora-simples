import './Tela.css';


interface propsTela {expressao: string, resultado: string}
function Tela({expressao, resultado}: propsTela) {
    return (
        <div className='tela'>
            <div className='numeros'>
                <div className="expressao">
                    <p>{expressao}</p>
                </div>
                <div className="resultado">
                    <p>{resultado}</p>
                </div>
            </div>
        </div>
    );
}

export default Tela;