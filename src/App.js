import React, { Component } from 'react';
import styled from 'styled-components'
import Name from './components/Name'
import Container from './components/Container';



class App extends Component {
  render() {
    return (
      <Container>
        <Name/>
      </Container >
    );
  }
}

export default App;
