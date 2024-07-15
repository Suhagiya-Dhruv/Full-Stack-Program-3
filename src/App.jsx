import { useState } from 'react';
import Counter from './LifeCycle/Counter'
import LifeCycle from './LifeCycle/LifeCycle'

const App = () => {

    const [inputValue, setInputValue] = useState(0)

    function inputHandler(event) {
        setInputValue(event.target.value);
    }

    return (
        <>
            <LifeCycle inputHandler={inputHandler} inputValue={inputValue}/>
            <hr />
            <Counter inputValue={inputValue} setInputValue={setInputValue}/>
        </>
    )
}

export default App