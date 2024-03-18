import React from 'react';
import ReactDom from 'react-dom';
import './styles/styles.scss';
import MasterForm from '../src/components/MasterForm';

ReactDom.render(<MasterForm />, document.getElementById('root'));

function App() {
  return (
    <MasterForm />
  );
}

export default App;