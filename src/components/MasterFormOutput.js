import React from 'react';
import '../styles/components/_form.scss';

export default class MasterFormOutput extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>Character Name: {this.props.data.name}</label> <br />
                
                <label>Character Race: {this.props.data.race}</label> <br />
                
                <label>Character Level: {this.props.data.level}</label> <br />
                
                <label>Character Health: {this.props.data.health}</label> <br />
               
                <label>Character Magicka: {this.props.data.magicka}</label> <br />
               
                <label>Character Stamina: {this.props.data.stamina}</label> <br />
               
                <label>Character Light Armor Bonus: {this.props.data.light}</label> <br />
                
                <label>Character Light Armor Level: {this.props.data.lightlevel}</label> <br />
                
                <label>Character Heavy Armor Bonus: {this.props.data.heavy}</label> <br />
               
                <label>Character Heavy Armor Level: {this.props.data.heavylevel}</label> <br />
               
                <label>Character Archery Bonus: {this.props.data.archery}</label> <br />
                
                <label>Character Archery Level: {this.props.data.archerylevel}</label> <br />
               
                <label>Character One Handed Bonus: {this.props.data.onehand}</label> <br />
                
                <label>Character One Handed Level: {this.props.data.onehandlevel}</label> <br />
                
                <label>Character Two Handed Bonus: {this.props.data.twohand}</label> <br />
                
                <label>Character Two Handed Level: {this.props.data.twohandlevel}</label> <br />
                
                <label>Character Magicka Damage: {this.props.data.magickadmg}</label> <br />
                
                <label>Character Sneak Bonus: {this.props.data.sneak}</label> <br />
                
                <label>Character Helmet: {this.props.data.helmet}</label> <br />
                
                <label>Character Armor: {this.props.data.armor}</label> <br />
                
                <label>Character Gloves: {this.props.data.gloves}</label> <br />
                
                <label>Character Boots: {this.props.data.boots}</label> <br />
                
                <label>Character Necklace: {this.props.data.necklace}</label> <br />
                
                <label>Character Ring: {this.props.data.ring}</label> <br />
                
                <label>Character Arrow: {this.props.data.arrow}</label> <br />
                
                <label>Character Main Hand: {this.props.data.mainhand}</label> <br />
                
                <label>Character Off-Hand: {this.props.data.offhand}</label> <br />
            </div>
        );
    }
}

// const MasterFormOutput = (props) => (

//     <div>
//         {props.data}
//         <h2>test</h2>
//     </div>
// );

// export default MasterFormOutput;