import React, { Component } from 'react';

class EventHandlerExample extends Component {
    handleClick(){
        console.log('Button Clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default EventHandlerExample