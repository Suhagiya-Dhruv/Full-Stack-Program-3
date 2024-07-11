import OrderButton from './Componets/Bottons/Button'
import ShoppingPage from './Pages/ShoppingPage'

import Card from './Componets/Card'

const App = () => {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {/* <OrderButton innerText="Get Order"/>
            <OrderButton innerText="Now" color="green" /> */}
            {/* <ShoppingPage /> */}

            <Card color="blue" title="Visitors" number="1,294" icon="fa-solid fa-users" />
            <Card color="red" title="Subscribers" number="1300" icon="B" />
            <Card color="green" title="Sales" number="1585" icon="fa-brands fa-salesforce" />
            <Card color="yellow" title="Order" number="1502" icon="D" />

        </div>
    )
}

export default App