import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

import { BrowserRouter as Router } from 'react-router-dom';
import { BooksProvider, useBooks } from './contexts/books-context';
import { UserProvider, useUser } from './contexts/user-context';

export { useBooks, useUser }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <BooksProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </BooksProvider>
    </Router>
  </React.StrictMode>,
)
