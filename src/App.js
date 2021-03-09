
import React from 'react';
import NavBar from './components/partials/NavBar';
import Form from './components/partials/Form';

import Container from '@material-ui/core/Container';



import './App.css';

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Container maxWidth="lg">
        <Form></Form>
       
      </Container>
    </>
  );

}

export default App;
