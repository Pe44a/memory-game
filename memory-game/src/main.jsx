import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/normalize.css';
import './css/style.css'
import Cards from './assets/cardsRender'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cards/>
  </React.StrictMode>,
)
