import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('simple cehck', () => {
  const number = Math.floor((Math.random() * 2) + 1);
  expect(number).toBe(2);
});
