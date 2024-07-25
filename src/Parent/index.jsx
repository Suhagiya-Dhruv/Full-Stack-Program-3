import React, { useState } from 'react'
import A1 from '../Componets/A1'
import A2 from '../Componets/A2'

const Parent = () => { // re-render

    const [value, setValue] = useState(0);

    console.log('Parent Component');

    return (
        <div>
            <A1 value={value} />
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <A2 />
        </div>
    )
}

export default Parent