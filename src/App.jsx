
import { Header, MobileHeader } from './Componets/Header/Header'
import Dhruv from './Componets/Main/Main'
import Footer, { MobileFooter } from './Componets/Footer/Footer'

const App = () => {
    return (
        <div>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <Dhruv></Dhruv>
            <Footer />
            <MobileFooter />
        </div>
    )
}

export default App