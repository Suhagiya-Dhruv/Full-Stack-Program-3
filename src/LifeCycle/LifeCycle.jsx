import { useState } from 'react'

const LifeCycle = () => { // function component

  //  useState - Hooks

  const [value, setValue] = useState("hello");


  // setTimeout(() => {
  //   setValue("hi")
  // }, 2000)

  // let value = "Hello"

  function changeValue() {
    // console.log("before changed", value)

    // value = "Hi"

    // console.log("after changed", value)

    setValue("Hi")
  }


  return ( // render
    <div>

      <h1>
        {value}

      </h1>
      <button onClick={changeValue}>Change Value</button>
    </div>
  )
}

export default LifeCycle