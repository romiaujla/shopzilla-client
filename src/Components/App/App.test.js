import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";

//this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});
