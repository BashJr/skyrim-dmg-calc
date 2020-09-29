import React from 'react';

const races = [
    {
        label: "High Elf",
        value: "High Elf",
    },
    {
        label: "Argonian",
        value: "Argonian",
    },
    {
        label: "Wood Elf",
        value: "Wood Elf",
    },
    {
        label: "Breton",
        value: "Breton",
    },
    {
        label: "Dark Elf",
        value: "Dark Elf",
    },
    {
        label: "Imperial",
        value: "Imperial",
    },
    {
        label: "Khajiit",
        value: "Khajiit",
    },
    {
        label: "Nord",
        value: "Nord",
    },
    {
        label: "Orc",
        value: "Orc",
    },
    {
        label: "Redguard",
        value: "Redguard",
    }
];

export default class CharacterForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            race: '',
            level: 0,
            health: 0,
            magicka: 0,
            stamina: 0
        };

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormClear = this.onFormClear.bind(this);
        this.loadRaces = this.loadRaces.bind(this);
    }

    onHandleChange = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
          });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    onFormClear = () => {
        this.setState({
            name: '',
            race: '',
            level: 0,
            health: 0,
            magicka: 0,
            stamina: 0
          });
    };

    loadRaces = (races) => {
        return (
            races.map((option) => (
                <option name="race" value={option.value} key={option.value}>{option.label}</option>
            ))
        );
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.onHandleChange} />
                <label>Character's Race: </label>
                <select name="race" value={this.state.race} onChange={this.onHandleChange} >
                    {this.loadRaces(races)}
                </select>
                <label>Character Level: </label>
                <input type="number" name="level" min="1" max="999" value={this.state.level} onChange={this.onHandleChange} />
                <label>Health: </label>
                <input type="number" name="health" value={this.state.health} onChange={this.onHandleChange} />
                <label>Magicka: </label>
                <input type="number" name="magicka" value={this.state.magicka} onChange={this.onHandleChange} />
                <label>Stamina: </label>
                <input type="number" name="stamina" value={this.state.stamina} onChange={this.onHandleChange} />
                <button type="submit">Submit</button>
                <button type="button" onClick={this.onFormClear}>Clear</button>
            </form>
        );
    }
};
