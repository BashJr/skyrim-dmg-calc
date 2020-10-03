import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import MasterForm from '../src/components/MasterForm';


// const jsx = (
//     <div>
//         <p>This is my boilerplate for my Skyrim App!</p>
//         <MasterForm />
//     </div>
    
// );

ReactDom.render(<MasterForm />, document.getElementById('app'));
