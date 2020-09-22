import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import CharForm from '../src/components/CharForm';
import ArmForm from '../src/components/ArmForm';
import PerkForm from '../src/components/PerkForm';


const jsx = (
    <div>
        <p>This is my boilerplate for my Skyrim App!</p>
        <CharForm />
        <ArmForm />
        <PerkForm />
    </div>
    
);

ReactDom.render(jsx, document.getElementById('app'));
