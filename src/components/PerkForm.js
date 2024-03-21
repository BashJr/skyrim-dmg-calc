import React from 'react';
import '../styles/components/_form.scss';

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
            light: '0',
            lightlevel: '15',
            heavy: '0',
            heavylevel: '15',
            archery: '0',
            archerylevel: '15',
            onehand: '0',
            onehandlevel: '15',
            twohand: '0',
            twohandlevel: '15',
            magickadmg: '0',
            sneak: '0'
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
        this.props.onHandleChange(e);
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.light || !this.state.heavy || !this.state.archery || !this.state.onehand || !this.state.twohand || !this.state.magickadmg || !this.state.sneak) {
            alert('Please complete form with all values.')
        } else {
            console.log(this.state);
            this.props.onFormSubmit();
        }
    };

    onFormClear = () => {
        this.setState({
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
            <div className="skyrim-form perk-form">
                <form onSubmit={this.onFormSubmit}>
                    <h2>Damage Bonus Form</h2>

                    <div className='form-input'>
                        <label>Light Armor: </label>
                        <select name="light" value={this.state.light} onChange={this.onHandleChange}>
                            {this.loadPercentages(percentages)}
                        </select>
                        <input type="number" name="lightlevel" min="1" value={this.state.lightlevel} onChange={this.onHandleChange} placeholder="Light Armor Level"/>
                    </div>

                    <div className='form-input'>
                        <label>Heavy Armor: </label>
                        <select name="heavy" value={this.state.heavy} onChange={this.onHandleChange}>
                            {this.loadPercentages(percentages)}
                        </select> 
                        <input type="number" name="heavylevel" min="1" value={this.state.heavylevel} onChange={this.onHandleChange} placeholder="Heavy Armor Level"/>
                    </div>

                    <div className='form-input'>
                        <label>Archery: </label>
                        <select name="archery" value={this.state.archery} onChange={this.onHandleChange}>
                            {this.loadPercentages(percentages)}
                        </select> 
                        <input type="number" name="archerylevel" min="1" value={this.state.archerylevel} onChange={this.onHandleChange} placeholder="Archery Level"/>
                    </div>

                    <div className='form-input'>
                        <label>One-Handed: </label>
                        <select name="onehand" value={this.state.onehand} onChange={this.onHandleChange}>
                            {this.loadPercentages(percentages)}
                        </select> 
                        <input type="number" name="onehandlevel" min="1" value={this.state.onehandlevel} onChange={this.onHandleChange} placeholder="One Handed Level" />
                    </div>

                    <div className='form-input'>
                        <label>Two-Handed: </label>
                        <select name="twohand" value={this.state.twohand} onChange={this.onHandleChange}>
                            {this.loadPercentages(percentages)}
                        </select> 
                        <input type="number" name="twohandlevel" min="1" value={this.state.twohandlevel} onChange={this.onHandleChange} placeholder="Two Handed Level" />
                    </div>

                    <div className='form-input'>
                        <label>Magicka: </label>
                        <select name="magickadmg" value={this.state.magickadmg} onChange={this.onHandleChange}>
                            {this.loadPercentages(percentages)}
                        </select> 
                    </div>

                    <div className='form-input'>
                        <label>Sneak: </label>
                        <select name="sneak" value={this.state.sneak} onChange={this.onHandleChange}>
                            {this.loadPercentages(percentages)}
                        </select>
                    </div>

                    <div className='form-buttons'>
                        <button className='back-button' type="button" onClick={this.onFormClear}>Back</button>
                        <button className='clear-button' type="button" onClick={this.onFormClear}>Clear</button>
                        <button className='submit-button' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
};
