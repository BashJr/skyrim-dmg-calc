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
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                <label>Helmet: </label>
                <input type="text" name="helmet" value={this.state.helmet} onChange={this.onHandleChange}/>
                <label>Armor: </label>
                <input type="text" name="armor" value={this.state.armor} onChange={this.onHandleChange}/>
                <label>Gloves: </label>
                <input type="text" name="gloves" value={this.state.gloves} onChange={this.onHandleChange}/>
                <label>Boots: </label>
                <input type="text" name="boots" value={this.state.boots} onChange={this.onHandleChange}/>
                <label>Necklace: </label>
                <input type="text" name="necklace" value={this.state.necklace} onChange={this.onHandleChange}/>
                <label>Ring: </label>
                <input type="text" name="ring" value={this.state.ring} onChange={this.onHandleChange}/>
                <label>Arrow: </label>
                <input type="text" name="arrow" value={this.state.arrow} onChange={this.onHandleChange}/>
                <label>Left Hand Weapon: </label>
                <input type="text" name="lefthand" value={this.state.lefthand} onChange={this.onHandleChange}/>
                <label>Right Hand Weapon: </label>
                <input type="text" name="righthand" value={this.state.righthand} onChange={this.onHandleChange}/>
                <button type="submit">Submit</button>
                <button type="button" onClick={this.onFormClear}>Clear</button>
            </form>
        );
    }
};