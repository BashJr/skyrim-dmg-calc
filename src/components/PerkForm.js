import React from 'react';

const percentages = [
    {
        label: "",
        value: "",
    },
    {
        label: "0%",
        value: "0",
    },
    {
        label: "20%", 
        value: "20",
    },
    {
        label: "40%",
        value: "40",
    },
    {
        label: "60%",
        value: "60",
    },
    {
        label: "80%",
        value: "80",
    },
    {
        label: "100%",
        value: "100",
    }
];

export default class PerkForm extends React.Component {
    constructor() {
        super();

        this.state = {
            light: '',
            heavy: '',
            archery: '',
            onehand: '',
            twohand: '',
            magickadmg: '',
            sneak: ''
        };

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormClear = this.onFormClear.bind(this);
        this.loadPercentages = this.loadPercentages.bind(this);
    }

    onHandleChange = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
          });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.light || !this.state.heavy || !this.state.archery || !this.state.onehand || !this.state.twohand || !this.state.magickadmg || !this.state.sneak) {
            alert('Please complete form with all values.')
        } else {
            console.log(this.state);
        }
    };

    onFormClear = () => {
        this.setState({
            light: '',
            heavy: '',
            archery: '',
            onehand: '',
            twohand: '',
            magickadmg: '',
            sneak: ''
          });
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
            <form onSubmit={this.onFormSubmit}>
                <h2>Perk Form</h2>
                <label>Light Armor: </label>
                <select name="light" value={this.state.light} onChange={this.onHandleChange}>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Heavy Armor: </label>
                <select name="heavy" value={this.state.heavy} onChange={this.onHandleChange}>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Archery: </label>
                <select name="archery" value={this.state.archery} onChange={this.onHandleChange}>
                    {this.loadPercentages(percentages)}
                </select>
                <label>One-Handed: </label>
                <select name="onehand" value={this.state.onehand} onChange={this.onHandleChange}>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Two-Handed: </label>
                <select name="twohand" value={this.state.twohand} onChange={this.onHandleChange}>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Magicka: </label>
                <select name="magickadmg" value={this.state.magickadmg} onChange={this.onHandleChange}>
                    {this.loadPercentages(percentages)}
                </select>
                <label>Sneak: </label>
                <select name="sneak" value={this.state.sneak} onChange={this.onHandleChange}>
                    {this.loadPercentages(percentages)}
                </select>
                <button type="submit">Submit</button>
                <button type="button" onClick={this.onFormClear}>Clear</button>
            </form>
        );
    }
};
