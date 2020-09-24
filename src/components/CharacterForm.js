import React from 'react';

export default class CharacterForm extends React.Component {
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
            <form onSubmit={this.onFormSubmit}>
                <label>Name: </label>
                <input type="text" />
                <label>Character's Race: </label>
                <select>
                    <option value="high elf">High Elf</option>
                    <option value="argonian">Argonian</option>
                    <option value="wood elf">Wood Elf</option>
                    <option value="breton">Breton</option>
                    <option value="dark elf">Dark Elf</option>
                    <option value="imperial">Imperial</option>
                    <option value="khajiit">Khajiit</option>
                    <option value="nord">Nord</option>
                    <option value="orc">Orc</option>
                    <option value="redguard">Redguard</option>
                </select>
                <label>Character Level: </label>
                <input type="number" min="1" max="999" />
                <label>Health: </label>
                <input type="number" />
                <label>Magicka: </label>
                <input type="number" />
                <label>Stamina: </label>
                <input type="number" />
                <button>Submit</button>
                <button onClick={this.onClear}>Clear</button>
            </form>
        );
    }
};