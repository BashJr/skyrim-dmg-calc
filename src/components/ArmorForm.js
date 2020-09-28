import React from 'react';

export default class ArmorForm extends React.Component {
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit here!');
    };
    onClear = (e) => {
        e.preventDefault();
        console.log('onClear here!');
    };
    render() {
        return (
            <form>
                <label>Helmet: </label>
                <input type="text" />
                <label>Armor: </label>
                <input type="text" />
                <label>Gloves: </label>
                <input type="text" />
                <label>Boots: </label>
                <input type="text" />
                <label>Necklace: </label>
                <input type="text" />
                <label>Ring: </label>
                <input type="text" />
                <label>Arrow: </label>
                <input type="text" />
                <label>Left Hand Weapon: </label>
                <input type="text" />
                <label>Right Hand Weapon: </label>
                <input type="text" />
                <button>Submit</button>
                <button onClick={this.onClear}>Clear</button>
            </form>
        );
    }
};