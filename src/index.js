import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Presentation from './presentation';

if (process.env.REACT_APP_RUN === 'presentation') {
  console.log('run presentation')
  ReactDOM.render(<Presentation />, document.getElementById('root'));
} else {
  console.log('run app')
  ReactDOM.render(<App />, document.getElementById('root'));
}
