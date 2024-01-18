import React, { useEffect } from "react";

function Counter () {
    //hooks concept  
    //2.useReducer-pannanum
    
    
    //3.useEffects
    useEffect(() => {
        console.log("useEffect");
    }, []);

    useEffect(() => {
        console.log("useEffect update");
    },);

    // useEffect(() => {
    //     console.log("useEffect");
    // }, []);//giving what we need in array

    //1.useState 
    const[count,setCount] = React.useState(0);  // for separate varaiable 
    const[name,setName] = React.useState("sunali");

    return (
        <>
        <p>count : {count}</p>
        <button onClick={() =>setCount(count + 1)}>increment</button>
        <button onClick={() =>setCount(count - 1)}>decrement</button> 
        <button onClick={() =>setCount(0)}>reset</button>
        <p>name : {name}</p>
        <button onClick={() =>setName("suna")}>reset</button>

        </>
    )



}

export default Counter;