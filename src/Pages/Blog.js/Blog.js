import React from 'react';

const Blog = () => {
    return (
        <div className="mx-40 my-20 text-lg">
            <h1 className="text-4xl text-center text-blue-500">Welcome To Blog Our Blog :)</h1>
            <h2 className="text-red-800 mt-12 text-2xl">Q1. What are the different ways to manage a state in a React application?</h2>
            <p>
                The four major forms of state you need to keep track of in your React projects are: Local state,
                Global state, Server state, and URL state. A component's local state refers to the data it keeps.
                Managing local state in React is often accomplished via the usage of the useState hook.
                Additionally, for both local and global states, useReducer is an option that may be 
                implemented in any way. Under the hood, it is quite similar to useState, except that it takes
                a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.
            </p>
            <h2 className="text-red-800 mt-12 text-2xl">Q2.How does prototypical inheritance work?</h2>
            <p>
                There is an unnoticed[[Prototype]]property in every object in addition to its methods and attributes.
                JavaScript's Prototypal Inheritance capability may be used to provide extra methods and properties to objects.
                Inheritance is a process through which an object may take on the traits and behaviors of another object.
                The [[Prototype]] of an object may typically be obtained and modified using the Object.
                getPrototypeOf and Object.setPrototypeOf methods. The __proto__ method is now often used in modern languages to
                set it.
             </p>
            <h2 className="text-red-800 mt-12 text-2xl">Q3.What is a unit test? Why should we write unit tests?</h2>
            <p>
                Using JavaScript Unit Testing, a web page or web application module may be tested using JavaScript code.
                After that, it's included into the HTML as an inline event handler and tested in the browser to ensure that all
                of the needed features are available. These unit tests are then grouped together in a test suite for easy access.
                Unit testing in JavaScript is made easier by a variety of frameworks. The Unit.js library, for example,
                is a Javascript assertion library that runs on Node.js and the browser. For React and React Native web apps, 
                Jest is a JavaScript-based open-source testing framework. With the Jest framework, this complexity may be
                greatly minimized. If you're using Mocha, Jasmine, Karma or protractor (a testing framework for Angular projects), 
                you'll be able to use it with any of these frameworks. Node.js and browser-based test framework Mocha.
                Serial test execution in this framework simplifies asynchronous testing.
             </p>
            <h2 className="text-red-800 mt-12 text-2xl">Q4.React vs. Angular vs. Vue?</h2>
            <p>
                Angular is a Javascript framework built using Typescript, while Reactjs is a Javascript library and built using JSX.
                 Angular is mostly used to build complex enterprise-grade apps like single-page apps and progressive web apps, 
                while React is used to build UI components in any app with frequently variable data.
             </p>
        </div>
    );
};

export default Blog;