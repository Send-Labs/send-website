import App from '../App'
import Transfer from '../pages/Transfer'
import Pool from '../pages/Pool'
import FarmAndPool from '../components/FarmAndPool'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Redirect from "react-router-dom"
const BaseRouter =()=>(
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path="/" component={<Transfer/>} exact />
                <Route path='/transfer' element={<Transfer />}>
                    
                 </Route>
                <Route path='/pool' element={<Pool />}> </Route>
                <Route path='/farm' element={<FarmAndPool/>}></Route>
            </Route>
        </Routes>
    </Router>
)

export default BaseRouter;