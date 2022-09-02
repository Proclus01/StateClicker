import React, { Component } from 'react';

class StatefulClick extends Component {
    constructor(props) {
        super(props); // super lets you set state, super(props) lets you call props in the constructor
        this.state = { number: 0 }; // this is our initial state
        this.handleClick = this.handleClick.bind(this); // manually bind the method with the component instance
    }

    handleClick(event) {
        this.setState({number: this.rng()});
    }

    rng() {
        return Math.floor((Math.random() * 10) + 1);
    }

    makeTitle() {
        return (
            <h1>
                Number is: { this.state.number }
            </h1>
        );
    }

    makeButton() {
        return (
            <button>Random Number</button>
        );
    }

    winningButton() {
        return (
            <h2>
                YOU WIN!
            </h2>
        );
    }
}

export default StatefulClick;