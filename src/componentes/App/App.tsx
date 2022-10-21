import './App.css';

import { useQuery } from 'react-query';
import Calculadora from '../Calculadora/Calculadora';

import Versoes from '../../classes/Versoes';

function Versao() {
    const versoes = new Versoes();
    const versaoAtual = versoes.obterVersaoAtual();
    return (
        <div className='versao'>
            <p>{versaoAtual.obterPrefixo()}-{versaoAtual.obterVersao()}</p>
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
