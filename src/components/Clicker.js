import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clicker extends Component {

    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    decrementCount() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    resetCount() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div className="container">
                <div className="clicker border border-secondary rounded">
                    <div className="clicker-display d-flex align-items-center bg-light text-secondary">                        
                        <div className="mx-auto display-1">{this.state.count}</div>
                    </div>
                    <div className="clicker-button-panel d-flex flex-row">
                        <button className="btn btn-success w-100" onClick={this.incrementCount}>
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                        <button className="btn btn-warning w-100" onClick={this.resetCount}>
                            <i className="fa fa-refresh fa-2x"></i>
                        </button>
                        <button className="btn btn-danger w-100" onClick={this.decrementCount}>
                            <i className="fa fa-minus fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Clicker.defaultProps = {
    count: 0
};

Clicker.propTypes = {
    count: PropTypes.number
};

export default Clicker;