import React from 'react'


// ________________________ COMPONENTS ________________________

// The simplest way to define a component is to write a JavaScript function:

export default function FunctionHello() {
    return <h1>Hello, from a “functional” component</h1>;
  }

// We call such components “functional” because they are literally JavaScript functions.


export class ClassHello extends React.Component {
    render() {
      return <h1>Hello, from a “class” component</h1>;
    }
  }

// The above two components are equivalent from React’s point of view.


//  ________________________ COMPOSITION ________________________

// Components can refer to other components in their output. 
// This lets us use the same component abstraction for any level of detail. 
// A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.


var element1 = <h1>element h1</h1>
var element2 = <h2>element h2</h2>

export class WelcomeSimple extends React.Component {
    render() {
      return <h1>Welcome, yourNameHere</h1>;
    }
  }

export class WelcomeComposition extends React.Component {
    render() {
      return (
          <div>
              {element1}
              {element2}
              <WelcomeSimple />
            </div>
      )
    }
  }


// ________________________ PROPS ________________________

// Props
// What does “props” even mean?

// To get the jargon out of the way, “props” is short for “properties” so nothing particularly fancy there.

// props are passed into the component


export class WelcomeClassProp extends React.Component {
    render() {
      return <h1>Hello Class {this.props.name}</h1>
    }
  }

export function WelcomeFuncProp(props) {
    return <h1>Hello Function {props.name}</h1>
  }

export class WelcomeWithProsp extends React.Component {
    render() {
      return (
            <div>
                <WelcomeClassProp name={'My name passed from props'} />
                <WelcomeFuncProp name={'My name passed from props'} />
            </div>
      )
    }
  }
  