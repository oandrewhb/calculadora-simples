import './App.css';

import { useQuery } from 'react-query';
import Calculadora from '../Calculadora/Calculadora';

function Versao() {
    const { data, status } = useQuery('versoes', () => fetch('./versoes.json').then(promessa => promessa.json()))

    if (status === "loading") {
        return (
            <div className='versao'>
                <p>...</p>
            </div>
        )
    }

    if (status === "error") {
        return (
            <div className='versao'>
                <p>e</p>
            </div>
        )
    }

    return (
        <div className='versao'>
            <p>{data[0].versao}</p>
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
