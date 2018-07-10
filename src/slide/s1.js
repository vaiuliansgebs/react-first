import React from 'react'

// ________________________ JSX ________________________ 

// const element = <h1>Hello, world!</h1>;

// This funny tag syntax is neither a string nor HTML.

// It is called JSX, and it is a syntax extension to JavaScript. 
// We recommend using it with React to describe what the UI should look like. 
// JSX may remind you of a template language, but it comes with the full power of JavaScript.

export default function(){

    const name = 'My name is JSX';
    
    return <h1>Hello, {name}</h1>;
    // return <div></div>
    // return <p></p>
    
}