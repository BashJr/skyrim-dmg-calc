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
import MasterFormOutput from './MasterFormOutput.js';
import '../styles/components/_form.scss';

export default class MasterForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            race: '',
            level: '',
            health: '',
            magicka: '',
            stamina: '',
            showCharacter: true,
            light: '',
            lightlevel: '',
            heavy: '',
            heavylevel: '',
            archery: '',
            archerylevel: '',
            onehand: '',
            onehandlevel: '',
            twohand: '',
            twohandlevel: '',
            magickadmg: '',
            sneak: '',
            showPerk: false,
            helmet: '',
            armor: '',
            gloves: '',
            boots: '',
            necklace: '',
            ring: '',
            arrow: '',
            mainhand: '',
            offhand: '',
            showArmor: false,
            showMasterFormOutput: false
        }
    }

    handleCharacterSubmit = () => {
        console.log(this.state);
        this.handleVisibleForm();
    }

    handleCharacterChange = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    handleVisibleForm = () => {
        if (this.state.showCharacter === true) {
            this.setState({
                showCharacter: false,
                showPerk: true
            });
        }
        else if (this.state.showPerk === true) {
            this.setState({
                showPerk: false,
                showArmor: true
            });
        }
        else {
            this.setState({
                showArmor: false,
                showMasterFormOutput: true
            })
        }
    }

    render() {

        const title = 'Skyrim Damage Calculator';
        const author = 'Zach Watts';
        let data = this.state;

        return (
            <div className="container">
                <Header
                    title={title}
                />
                {this.state.showCharacter && <CharacterForm
                    onFormSubmit={this.handleCharacterSubmit}
                    onHandleChange={this.handleCharacterChange}
                />}
                {this.state.showPerk && <PerkForm
                    onFormSubmit={this.handleCharacterSubmit}
                    onHandleChange={this.handleCharacterChange}
                />}
                {this.state.showArmor && <ArmorForm
                    onFormSubmit={this.handleCharacterSubmit}
                    onHandleChange={this.handleCharacterChange}
                />}
                {this.state.showMasterFormOutput && <MasterFormOutput 
                    data={data}
                />}
                <Footer
                    author={author}
                />
            </div>

        );
    }
}
