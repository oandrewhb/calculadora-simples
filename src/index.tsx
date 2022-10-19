import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/App/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);

serviceWorkerRegistration.register();