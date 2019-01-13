import React, { Component } from 'react';

export default class ScrollButton extends Component {
    constructor(props) {
        super(props);

        this.state = { intervalId: 0 };
    }

    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }

        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop = () => {
        let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
        console.log(intervalId);
        this.setState({ intervalId: intervalId });
    }

    render () {

        return (
            <button
            type="button"
            className="backToTopBtn"
            onClick={this.scrollToTop}
        >
            <i className="fas fa-angle-up" />
            <span>Top</span>
        </button>
        );
    }
}