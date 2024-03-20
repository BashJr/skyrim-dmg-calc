import React from 'react';
import '../styles/components/_form.scss';

const races = [
    {
        label: "",
        value: ""
    },
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
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            race: '',
            level: '',
            health: '',
            magicka: '',
            stamina: ''
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
          this.props.onHandleChange(e);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name || !this.state.race || !this.state.level || !this.state.health || !this.state.magicka || !this.state.stamina) {
            alert('Please complete form with all values.')
        } else {
            console.log(this.state);
            this.props.onFormSubmit();
        }
    };

    onFormClear = () => {
        this.setState({
            name: '',
            race: '',
            level: '',
            health: '',
            magicka: '',
            stamina: ''
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
            <div className="skyrim-form character-form">
                <form onSubmit={this.onFormSubmit} className="label">
                    <h2>Character Form</h2>
                    <div className='form-input'>
                        <label>Name: </label>
                        <input type="text" name="name" value={this.state.name} onChange={this.onHandleChange} />
                    </div>

                    <div className='form-input'>
                        <label>Character's Race: </label>
                        <select name="race" value={this.state.race} onChange={this.onHandleChange} >
                            {this.loadRaces(races)}
                        </select>
                    </div>

                    <div className='form-input'>
                        <label>Character Level: </label>
                        <input type="number" name="level" min="1" value={this.state.level} onChange={this.onHandleChange} /> 
                    </div>

                    <div className='form-input'>
                        <label>Health: </label>
                        <input type="number" name="health" min="1" value={this.state.health} onChange={this.onHandleChange} /> 
                    </div>

                    <div className='form-input'>
                        <label>Magicka: </label>
                        <input type="number" name="magicka" min="1" value={this.state.magicka} onChange={this.onHandleChange} />
                    </div>

                    <div className='form-input'>
                        <label>Stamina: </label>
                        <input type="number" name="stamina" min="1" value={this.state.stamina} onChange={this.onHandleChange} />
                    </div>
                    
                    <div className='form-buttons'>
                        <button className='clear-button' type="button" onClick={this.onFormClear}>Clear</button>
                        <button className='submit-button' type="submit">Submit</button>
                    </div>
                </form>
                <div className='character-image'>
                </div>
            </div>
        );
    }
};
