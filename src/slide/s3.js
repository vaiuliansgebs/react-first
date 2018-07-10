import React from 'react'

// ________________________ STATE ________________________

// Like props, state holds information about the component. However, the kind of information and how it is handled is different.

// By default, a component has no state. The Welcome component from before is stateless

// When a component needs to keep track of information between renderings the component itself can create, update, and use state.



// The Constructor is where state gets it’s initial data.

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  


// setState - the only way to change state inside an component

// We change the state to keep track of the total number of clicks. 
// The important bit is setState. First off, notice that setState takes a function, that’s becuase setState can run asynchronously. 
// It needs to take a callback function rather than updating the state directly. 
// You can see we have access to prevState within the callback, this will contain the previous state,
// even if the state has already been updated somewhere else. Pretty slick, huh?

// But React goes one step better, setState updates the state object and re-renders the component automagically.


export class Button extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
  
    updateCount() {
      this.setState((prevState, props) => {
        return { count: prevState.count + 1 }
      });
    }
  
    render() {
      return (
        <button
            onClick={() => this.updateCount()}
        >
        Clicked {this.state.count} times
        </button>);
    }
  }

// ________________________ Lifecycle Methods ________________________


export class ClockWithLifecycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
      console.log("now tick at: " + this.state.date )
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }


// ________________________ MAIN Example ________________________

  export class Main extends React.Component {
    constructor() {
      super();
      this.state = {
        showClock: false,
      };
    }
  
    toggleClock() {
      this.setState((prevState, props) => {
        return { showClock: !prevState.showClock }
      });
    }
  
    render() {
      return (
          <div>
        <button
            onClick={() => this.toggleClock()}
        >
        Toggle Clocks
        </button>

        {this.state.showClock && <ClockWithLifecycle/> }
        {this.state.showClock && <Clock/>}
        </div>
      )
    }
  }