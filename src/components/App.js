import React, { Component } from 'react';
import Header from './Header';
import Clicker from './Clicker';

export default class ClickerApp extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clicker'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <Clicker />
                </div>
            </div>
        );
    }
}
