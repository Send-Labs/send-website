import App from '../App'
import Transfer from '../pages/Transfer'
import Pool from '../pages/Pool'
import Message from '../pages/Message'
import FarmAndPool from '../components/FarmAndPool'
import { BrowserRouter as Router, Routes , Route  } from "react-router-dom"
const BaseRouter =()=>(
    <Router>
        <Routes>
            <Route path='/' element={<App />} >
                <Route path="/" element={<Message />} index></Route>
                <Route path='/message' element={<Message />}> </Route>

                <Route path='/transfer' element={<Transfer />}>
                    
                 </Route>
                <Route path='/pool' element={<Pool />}> </Route>
                <Route path='/farm' element={<FarmAndPool/>}></Route>
            </Route>
        </Routes>
    </Router>
)

export default BaseRouter;