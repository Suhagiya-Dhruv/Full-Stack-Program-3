import './app.css'

const OrderButton = (props) => {

  const { color, innerText = "button" } = props

  return (
    <button className={` button ${color}`}>{innerText}</button>
  )
}

export default OrderButton