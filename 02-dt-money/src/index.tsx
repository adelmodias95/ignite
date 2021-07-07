import React from 'react'
import ReactDOM from 'react-dom'
import { createServer } from 'miragejs'
import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel Escritório',
          amount: 1100,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
