// import {useState} from 'react'

// const Counter = () => {

//     let [number, setNumber] = useState(0) // Hooks
//     // let number = 0;

//     function plusHandler() {
//         setNumber(number+1)
//         // console.log("Plus", number)
//     }

//     const minusHandler = () => {
//         setNumber(number-1)
//         // console.log("Minus", number)
//     }

//     return ( // re-render
//         <>
//             <h1>{number}</h1>
//             <button onClick={plusHandler}>Plus</button>
//             <button onClick={minusHandler}>Minus</button>
//             {/* <button onClick={resetNumber}>Reset</button> */}
//         </>
//     )
// }

// export default Counter


import { useState } from 'react'


const data = [
    {
        name: "plus",
        value: "+"
    },
    {
        name: "minus",
        value: "-"
    },
    {
        name: "reset",
        value: ""
    }
]

const Counter = (porps) => {

    const [number, setNumber] = useState(0) // Hook

    const { inputValue, setInputValue } = porps
    // const [inputValue, setInputValue] = useState(0) // Hook

    function clickHandler(value) {
        if (value === '+') {

            setNumber(number + Number(inputValue))
        } else if (value === '-') {
            setNumber(number - 1)
        } else {
            setNumber(0)
            setInputValue(0)
        }
    }

    // function inputHandler(event) {
    //     setInputValue(event.target.value);
    // }


    return (
        <>
            {/* <input type="number" onChange={inputHandler} value={inputValue} /> */}
            <h1>{number}</h1>

            {data.map((item) => {
                return(
                    <button onClick={() => clickHandler(item.value)}>{item.name}</button>
                )
            })}
            {/* <button onClick={() => clickHandler('+')}>Plus</button>
            <button onClick={() => clickHandler('-')}>Minus</button>
            <button onClick={() => clickHandler()}>Reset</button> */}
        </>
    )
}

export default Counter