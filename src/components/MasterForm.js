/* 
    Master Form will be the parent to the 3 child forms
    We will need to make sure that the state lives in each form, props sent in-between
    This will just wrap them all into 1 area.
    Let's go ahead and finish up each individually, then we'll see if we can pass in-between.
*/

import React from 'react';
import ArmorForm from './ArmorForm.js';
import CharacterForm from './CharacterForm.js';
import PerkForm from './PerkForm.js';
import Header from './Header.js';
import Footer from './Footer.js'


export default class MasterForm extends React.Component {
    render() {

        const title = 'Skyrim Damage Calculator';
        const author = 'Zach Watts';

        return (
            <div className="container">
                <Header title={title} />
                <CharacterForm />
                <Footer author={author} />
            </div>

        );
    }
}
