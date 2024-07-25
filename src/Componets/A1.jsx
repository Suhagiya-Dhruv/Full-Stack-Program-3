import React, { memo, useMemo } from 'react'

let count = 0

const A1 = (props) => {
    const { value } = props
    console.log('A1 Component');

    const memoData = useMemo(() => {
        const data = {
            id: "123",
            name: "John Doe",
            age: 30,
            count,
            fn: function () {
                count++;
            }
        }
        data.fn();

        return data;
    }, [])


    console.log(memoData);

    return (
        <h2>Count : {value}</h2>
    )
}

export default memo(A1) // memorization