import React from 'react';


// The higherOrderComponent is a function that takes a component called WrappedComponent as an argument. 
// We create a new component called HOC which returns the <WrappedComponent/> from its render function.

function higherOrderComponent (WrappedComponent) {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
    
  return HOC;
};

// We can invoke the HOC as follows:

var MyComponent = null;

export const SimpleHOC = higherOrderComponent(MyComponent);


// _____________________ Example ______________________


export function FunctionHello() {
    return <h1>Hello, FunctionHello</h1>;
  }
export class ClassHelloAgain extends React.Component {
    render() {
      return <h1>Hello, FunctionHelloAgain</h1>;
    }
  }

// our HOC logger function.
// it logs the name of the Component that was mounted

export function withLogger (WrappedComponent) {
    
  class HOC extends React.Component {
      render() {
        console.log(`-----> now Rendering ${WrappedComponent.name}`);
        return <WrappedComponent />;
      }
    }

    return HOC;
};


export default class Main extends React.Component {
  render() {

    var FunctionHelloWithLogger = withLogger(FunctionHello)
    var ClassHelloAgainAgainWithLogger = withLogger(ClassHelloAgain)
    return (
      <div>
      <FunctionHelloWithLogger/>
      <ClassHelloAgainAgainWithLogger/>
      </div>
    )
  }
}
