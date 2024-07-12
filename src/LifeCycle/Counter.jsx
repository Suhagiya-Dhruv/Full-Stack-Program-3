import {useState} from 'react'

const Counter = () => {

    let [number, setNumber] = useState(0) // Hooks
    // let number = 0;

    function plusHandler() {
        setNumber(number+1)
        // console.log("Plus", number)
    }

    const minusHandler = () => {
        setNumber(number-1)
        // console.log("Minus", number)
    }

    return ( // re-render
        <>
            <h1>{number}</h1>
            <button onClick={plusHandler}>Plus</button>
            <button onClick={minusHandler}>Minus</button>
            {/* <button onClick={resetNumber}>Reset</button> */}
        </>
    )
}

export default Counter