import React, { memo } from 'react'

const A2 = () => {
    console.log('A2 Component');

    return (
        <h1>A2</h1>
    )
}

export default memo(A2)