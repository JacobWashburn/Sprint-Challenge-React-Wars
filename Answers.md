# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

react is a component based ui creation application. pages that have a lot of data changing often have a problem with the page reloading a lot. react helps with this by using the virtual dom. data is stored in state and the page updates only what changes. posting of comments and pictures are a common way this is seen. 

1. What does it mean to think in react?

to think of everything getting broken down into very little pieces and having your data stored in state.

1. Describe state.

state is storing data in the virtual dom. it can be accessed and changed with out reloading the page. 

1. Describe props.

props is data that is passed from a parent to its children giving them access to data not within their scope.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

a side effect is something that changes something outside of the scope of a function. 
using useEffect is a way to change variable values, props, or even just make another api call. it happens when the thing that useEffect is watching changes.
