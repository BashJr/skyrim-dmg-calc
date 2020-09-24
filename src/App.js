import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import CharacterForm from '../src/components/CharForm';
import ArmorForm from '../src/components/ArmForm';
import PerkForm from '../src/components/PerkForm';


const jsx = (
    <div>
        <p>This is my boilerplate for my Skyrim App!</p>
        <CharacterForm />
    </div>
    
);

ReactDom.render(jsx, document.getElementById('app'));
