import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1 className='bg-dark-red'>Hello</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;