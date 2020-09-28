import React from 'react';

const percentages = [
    {
        label: "0%",
        value: "0%",
    },
    {
        label: "20%", 
        value: "20%",
    },
    {
        label: "40%",
        value: "40%",
    },
    {
        label: "60%",
        value: "60%",
    },
    {
        label: "80%",
        value: "80%",
    },
    {
        label: "100%",
        value: "100%",
    }
];

export default class PerkForm extends React.Component {
    constructor() {
        super();
        this.loadPercentages = this.loadPercentages.bind(this);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit here!');
    };

    onClear = (e) => {
        e.preventDefault();
        console.log('onClear here!');
    };

    loadPercentages = (percentages) => {
        return (
            percentages.map((option) => (
                <option value={option.value} key={option.value} >{option.label}</option>
            ))
        );
    };

    render() {
        return (
            <form>
                <label>Light Armor: </label>
                <select>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Heavy Armor: </label>
                <select>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Archery: </label>
                <select>
                    {this.loadPercentages(percentages)}
                </select>
                <label>One-Handed: </label>
                <select>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Two-Handed: </label>
                <select>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Magicka: </label>
                <select>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Sneak: </label>
                <select>
                    {this.loadPercentages(percentages)}
                </select>
                <button>Submit</button>
                <button onClick={this.onClear}>Clear</button>
            </form>
        );
    }
};
