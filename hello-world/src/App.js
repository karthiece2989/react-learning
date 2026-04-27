import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/FunctionalComponent/Greet.js';
import Welcome from './Component/ClassComponent/Welcome.js';
import FCGreetArrow from './Component/FunctionalComponent/FCGreetArrow.js';
import Message from './Component/State/Message.js';
import CounterSetState from './Component/State/CounterSetState.js';
import Destructuring from './Component/FunctionalComponent/Destructuring.js';
import EventHandlerExample from './EventHandler/EventHandlerExample.js';
import ParentComponent from './MethodProps/ParentComponent.js';

class App extends Component {
  render(){
    return(
    <div className="App">
   {/* <CounterSetState/>
    <Destructuring name="Bruce" heroName="Batman">
    </Destructuring>
    <EventHandlerExample/>*/}
    <ParentComponent/>
    </div>
    );
  }
}

export default App;
