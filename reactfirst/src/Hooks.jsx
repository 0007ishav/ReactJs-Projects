import React, { useState } from 'react'

export const Hooks = () => {
    let [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)   After repeating this, it will only update counter once.
        // setCounter(counter + 1)   React will check and update counter only one setCounter. All this setCounter updates will be bundled up and update only once. 

        // setCounter(counter => counter + 1);
        // setCounter(counter => counter + 1);   using this callback , it will update how much you want.
        // setCounter(counter => counter + 1);
        // setCounter(counter => counter + 1);
    }
    const removeValue = () => {
        setCounter(counter - 1);
    }
    return (
        <>
        <h1>Hooks</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value {counter}</button>
        <p>Footer: {counter}</p>
        </>
  )
}
