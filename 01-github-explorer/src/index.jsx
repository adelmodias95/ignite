/**
 * Não é mais necessário importar o React em todos os arquivos.
 * Check o arquivo babel.config.js na linha 04
 */
// import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root'));
