import { useEffect, useState } from 'react'
import './App.css'

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

function App() { // changes or re-render

  const [value, setValue] = useState(0); // state hook
  const [value1, setValue1] = useState(0); // state hook

  // console.log(value, setValue); //
  // useEffect(() => {
  //   console.log('Without dependencies')
  // })

  // useEffect(() => {
  //   console.log('With empty dependencies')
  // }, [])

  useEffect(() => {
    console.log('With argument dependencies')
  }, [value])


  function changeValue() {
    // Logic
    setValue1(value1 + 1)
    // value = value + 1;
    console.log(value1)
  }
  return ( // re-render
    <>
      <h1>{value}</h1>
      <h1>{value1}</h1>
      <button onClick={() => setValue(value + 1)}>Change IN</button>
      <button onClick={changeValue}>Change Out</button>
    </>
  )
}

export default App
