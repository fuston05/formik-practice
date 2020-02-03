import React from 'react';
import './styles/styleVars';
import {GlobalStyle, Heading1, AppCont} from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppCont className="App">
        <Heading1>hello</Heading1>
      </AppCont>
    </>
  );
}

export default App;
