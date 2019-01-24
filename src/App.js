import React, { Component } from 'react';
import styled from 'styled-components'
import Name from './components/Name'
import Container from './components/Container';
import Options from './components/Options';



class App extends Component {
  render() {
    return (
      <Container>
        <Name/>
        <Options/>
      </Container >
    );
  }
}

export default App;
