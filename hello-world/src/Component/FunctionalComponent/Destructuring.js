import React from "react";
//Instead of props object we can use the name directly in the destructing 
const Destructuring = ({ name, heroName }) => {
    console.log({ name, heroName });
     return(
        <div>
            <h1> Hello {name}  a.k.a {heroName} </h1>
        </div>
     ) 
};
export default Destructuring;