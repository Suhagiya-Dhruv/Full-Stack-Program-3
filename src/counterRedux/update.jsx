import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../slices/counter';

const Update = () => {

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment(3))}> Plus</button>
        </div>
    )
}

export default Update