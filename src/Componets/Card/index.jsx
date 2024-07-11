import './card.css'

const Card = (props) => {

    const { icon = "", color = "", title = "", number = 0 } = props
    return (
        <div className='card'>
            <div className={`icon ${color}`}><i className={icon}></i></div>
            <div>
                <h2>{title}</h2>
                <p>{number}</p>
            </div>
        </div>
    )
}

export default Card