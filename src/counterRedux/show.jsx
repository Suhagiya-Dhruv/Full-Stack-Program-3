import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {

    const { value } = useSelector(state => state.counetSlice)

    return (
        <div>{value}</div>
    )
}

export default Show