import React from 'react';
import FormikForm from './components/MyForm/MyForm';
//styles
import './styles/styleVars';
import {GlobalStyle, Heading1, AppCont} from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppCont className="App">
        <Heading1>hello</Heading1>
        <FormikForm />
      </AppCont>
    </>
  );
}

export default App;
