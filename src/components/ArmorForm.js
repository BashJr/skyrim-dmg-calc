import React from 'react';

export default class ArmorForm extends React.Component {
    constructor() {
        super();

        this.state = {
            helmet: '',
            armor: '',
            gloves: '',
            boots: '',
            necklace: '',
            ring: '',
            arrow: '',
            lefthand: '',
            righthand: ''
        };

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormClear = this.onFormClear.bind(this);
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
        if(!this.state.helmet || !this.state.armor || !this.state.gloves || !this.state.boots || !this.state.necklace || !this.state.ring || !this.state.lefthand || !this.state.righthand) {
            alert('Please complete form with all values.')
        } else {
            console.log(this.state);
            this.props.onFormSubmit();
        }
    };

    onFormClear = () => {
        this.setState({
            helmet: '',
            armor: '',
            gloves: '',
            boots: '',
            necklace: '',
            ring: '',
            arrow: '',
            lefthand: '',
            righthand: ''
          });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h2>Armory Form</h2>
                <label>Helmet: </label>
                <input type="text" name="helmet" value={this.state.helmet} onChange={this.onHandleChange}/> <br />
                <label>Armor: </label>
                <input type="text" name="armor" value={this.state.armor} onChange={this.onHandleChange}/> <br />
                <label>Gloves: </label>
                <input type="text" name="gloves" value={this.state.gloves} onChange={this.onHandleChange}/> <br />
                <label>Boots: </label>
                <input type="text" name="boots" value={this.state.boots} onChange={this.onHandleChange}/> <br />
                <label>Necklace: </label>
                <input type="text" name="necklace" value={this.state.necklace} onChange={this.onHandleChange}/> <br />
                <label>Ring: </label>
                <input type="text" name="ring" value={this.state.ring} onChange={this.onHandleChange}/> <br />
                <label>Arrow: </label>
                <input type="text" name="arrow" value={this.state.arrow} onChange={this.onHandleChange}/> <br />
                <label>Left Hand Weapon: </label>
                <input type="text" name="lefthand" value={this.state.lefthand} onChange={this.onHandleChange}/> <br />
                <label>Right Hand Weapon: </label>
                <input type="text" name="righthand" value={this.state.righthand} onChange={this.onHandleChange}/> <br />
                <button type="submit">Submit</button>
                <button type="button" onClick={this.onFormClear}>Clear</button>
            </form>
        );
    }
};