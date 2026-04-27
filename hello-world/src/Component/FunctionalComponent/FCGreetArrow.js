import React from "react";
//functional component with arrow function. It is a simple function which returns some JSX.
//It has props as an argument.
const FCGreetArrow = (props) => {
    console.log(props);
     return(
        <div>
            <h1> Hello {props.name}  a.k.a {props.heroName} </h1>
            {props.children}
        </div>
     ) 
};
export default FCGreetArrow;