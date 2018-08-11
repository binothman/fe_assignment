/*
* App: The wrapper for all application
*/
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'

// Components
import Header from './components/Header'
import Login from './components/Login'
import Products from './components/Products'

// main stylesheet
import './app.css'

const App = () => (
  <Container className="custom-container">
    <Header />
    <Login />
    <Products />
  </Container>
)

export default App;
