import React, { Component } from 'react';

class InputCustomizado extends Component {
    render () {
        return (
            <div className="input-field col s12">
                <input className='validate' type={this.props.type} name={this.props.name} id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}

export default InputCustomizado;