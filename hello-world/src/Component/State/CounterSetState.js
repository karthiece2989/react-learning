import React, { Component } from 'react'

class CounterSetState extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('Callback value', this.state.count) //syncronous callback function to get the updated value of count after setState is executed
            })
        console.log(this.state.count) //asynchronous function, it will log the previous value of count before setState is executed, because setState is asynchronous and it does not update the state immediately, it schedules the update and re-renders the component, so the console.log will be executed before the state is updated, hence it will log the previous value of count
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default CounterSetState
