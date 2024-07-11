import OrderButton from "../Componets/Bottons/Button"

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shoping Page</h1>
            <OrderButton />
            <OrderButton innerText="Cancle" color="red"/>
        </div>
    )
}

export default ShoppingPage