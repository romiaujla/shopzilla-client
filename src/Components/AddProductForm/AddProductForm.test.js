import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import AddProductForm from './AddProductForm';


it('renders without crashing', () => {
  const div = document.createElement('div');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
      <AddProductForm />
    , div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});
