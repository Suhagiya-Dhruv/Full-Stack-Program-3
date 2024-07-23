import { useEffect, useState } from 'react'
import './App.css'

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

// const data2 = [
//     {
//         id: "123",
//         image: "",
//         title: "",
//         price: "",
//         rating: "",
//         description: ""
//     },

//     {
//         id: "123",
//         image: "",
//         title: "",
//         price: "",
//         rating: "",
//         description: ""
//     },
// ]

// https://fakestoreapi.com/products


function Pagination() {

    const [pageItem, setPageItem] = useState(4);
    const [currPage, setCurrPage] = useState(1);
    const [currData, setCurrData] = useState(data.slice(0, pageItem))

    function dataRender(value, index) {
        return <div key={index}>
            <h1>{value}</h1>
        </div>
    }

    useEffect(() => {
        console.log("New data required")
        console.log(currPage, pageItem)

        const newData = data.slice((currPage - 1) * pageItem, currPage * pageItem);
        /* 0, 4 -> 1-1*4, 1*4
           4, 8 -> 2-1*4 2*4
           8, 12 -> 3-1*4
           12, 16 -> 4-1*4
        */


        setCurrData(newData)
    }, [currPage])

    function nextData() {
        setCurrPage(currPage + 1)
    }

    function prevData() {
        setCurrPage(currPage - 1)
    }

    return (
        <>
            {currData.map(dataRender)}
            {data.length > currPage * pageItem ?
                <button onClick={nextData}> next </button>
                : null}
            {(currPage - 1) * pageItem <= 0 ? null :
                <button onClick={prevData}> Prev </button>
            }
        </>
    )
}

export default Pagination
