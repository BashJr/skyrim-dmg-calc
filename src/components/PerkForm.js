import React from 'react';

export default class PerkForm extends React.Component {

    render() {
        return (
            <form>
                <label>Light Armor: </label>
                <select>
                    <option value="la-zero">0%</option>
                    <option value="la-twenty">20%</option>
                    <option value="la-forty">40%</option>
                    <option value="la-sixty">60%</option>
                    <option value="la-eighty">80%</option>
                    <option value="la-hundred">100%</option>
                </select>
                <label>Heavy Armor: </label>
                <select>
                    <option value="ha-zero">0%</option>
                    <option value="ha-twenty">20%</option>
                    <option value="ha-forty">40%</option>
                    <option value="ha-sixty">60%</option>
                    <option value="ha-eighty">80%</option>
                    <option value="ha-hundred">100%</option>
                </select>
                <label>Archery: </label>
                <select>
                    <option value="ar-zero">0%</option>
                    <option value="ar-twenty">20%</option>
                    <option value="ar-forty">40%</option>
                    <option value="ar-sixty">60%</option>
                    <option value="ar-eighty">80%</option>
                    <option value="ar-hundred">100%</option>
                </select>
                <label>One-Handed: </label>
                <select>
                    <option value="oh-zero">0%</option>
                    <option value="oh-twenty">20%</option>
                    <option value="oh-forty">40%</option>
                    <option value="oh-sixty">60%</option>
                    <option value="oh-eighty">80%</option>
                    <option value="oh-hundred">100%</option>
                </select>
                <label>Two-Handed: </label>
                <select>
                    <option value="th-zero">0%</option>
                    <option value="th-twenty">20%</option>
                    <option value="th-forty">40%</option>
                    <option value="th-sixty">60%</option>
                    <option value="th-eighty">80%</option>
                    <option value="th-hundred">100%</option>
                </select>
                <label>Magicka: </label>
                <select>
                    <option value="ma-zero">0%</option>
                    <option value="ma-twenty">20%</option>
                    <option value="ma-forty">40%</option>
                    <option value="ma-sixty">60%</option>
                    <option value="ma-eighty">80%</option>
                    <option value="ma-hundred">100%</option>
                </select>
                <label>Sneak: </label>
                <select>
                    <option value="sn-zero">0%</option>
                    <option value="sn-twenty">20%</option>
                    <option value="sn-forty">40%</option>
                    <option value="sn-sixty">60%</option>
                    <option value="sn-eighty">80%</option>
                    <option value="sn-hundred">100%</option>
                </select>
                <button>Submit</button>
                <button>Clear Form</button>
            </form>
        );
    }
};