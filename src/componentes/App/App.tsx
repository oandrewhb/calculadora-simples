import './App.css';

import Calculadora from '../Calculadora/Calculadora';
import Versoes from '../../classes/Versoes';

function Versao() {
    const versoes = new Versoes();
    return (
        <div className='versao'>
            <p>{versoes.obterDescricaoDeVersao()}</p>
        </div>
    );
}

function App() {
    return (
        <div className='App'>
            <div className='conteudo-app'>
                <Calculadora />
            </div>
            <div className='versao-app'>
                <Versao />
            </div>
        </div>
    );
}

export default App;
