import React from 'react';
import '../styles/components/_form.scss';

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
            mainhand: '',
            offhand: ''
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
        if(!this.state.helmet || !this.state.armor || !this.state.gloves || !this.state.boots || !this.state.necklace || !this.state.ring || !this.state.mainhand || !this.state.offhand) {
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
            mainhand: '',
            offhand: ''
          });
    };

    render() {
        return (
            <div className='skyrim-form armor-form'>
                <form onSubmit={this.onFormSubmit}>
                    <h2>Armory Form</h2>
                    
                    <div className='form-input'>
                        <label>Helmet: </label>
                        <input type="text" name="helmet" value={this.state.helmet} onChange={this.onHandleChange} placeholder="Helmet"/>
                    </div>

                    <div className='form-input'>
                        <label>Armor: </label>
                        <input type="text" name="armor" value={this.state.armor} onChange={this.onHandleChange} placeholder="Armor"/>
                    </div>

                    <div className='form-input'>
                        <label>Gloves: </label>
                        <input type="text" name="gloves" value={this.state.gloves} onChange={this.onHandleChange} placeholder="Gloves"/>
                    </div>

                    <div className='form-input'>
                        <label>Boots: </label>
                        <input type="text" name="boots" value={this.state.boots} onChange={this.onHandleChange} placeholder="Boots"/>
                    </div>

                    <div className='form-input'>
                        <label>Necklace: </label>
                        <input type="text" name="necklace" value={this.state.necklace} onChange={this.onHandleChange} placeholder="Necklace"/>
                    </div>

                    <div className='form-input'>
                        <label>Ring: </label>
                        <input type="text" name="ring" value={this.state.ring} onChange={this.onHandleChange} placeholder="Ring"/>
                    </div>

                    <div className='form-input'>
                        <label>Arrow: </label>
                        <input type="text" name="arrow" value={this.state.arrow} onChange={this.onHandleChange} placeholder="Arrow"/>
                    </div>

                    <div className='form-input'>
                        <label>Main Hand Weapon: </label>
                        <input type="text" name="lefthand" value={this.state.lefthand} onChange={this.onHandleChange} placeholder="Main Hand Weapon"/>
                    </div>

                    <div className='form-input'>
                        <label>Off-Hand Weapon: </label>
                        <input type="text" name="righthand" value={this.state.righthand} onChange={this.onHandleChange} placeholder="Off-Hand Weapon"/>
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