
const LifeCycle = (props) => {

  const { inputValue, inputHandler } = props

  return (
    <div>
      <input type="number" onChange={inputHandler} value={inputValue} />
    </div>
  )
}

export default LifeCycle