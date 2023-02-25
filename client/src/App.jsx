import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CompanysContextProvider } from './context/Companycontext';
import Company from './routes/Company'
import Home from './routes/Home'
import UpdatePage from './routes/UpdatePage'
import Info from './routes/Info';
import Policy from './routes/Policy';
import Land from './routes/Land';
import Customer from './routes/Customer';
import Custcar from './routes/Custcar';
import CustPolicy from './routes/CustPolicy';
import Login from './routes/Login';
import Error from './routes/Error';



const App = () => {
    return (
        <CompanysContextProvider>
            <div>
                <Router>

                    <Routes>
                        <Route path="/" element={<Land />} exact />
                        <Route path="/company" element={<Home />} exact />
                        <Route exact path="/company/:id/update" element={<UpdatePage />} />
                        <Route exact path="/company/:id" element={<Company />} />
                        <Route exact path="/company/:id/info" element={<Info />} />
                        <Route exact path="/company/:id/info/:make_model/policy" element={<Policy />} />
                        <Route path="/company/login" element={<Login />} exact />
                        <Route path="/error" element={<Error />} exact />




                        <Route path="/customer" element={<Customer />} exact />
                        <Route path="/customer/:id/info" element={<Custcar />} exact />
                        <Route exact path="/customer/:id/info/:make_model/policy" element={<CustPolicy />} />

                    </Routes>
                </Router>
            </div>

        </CompanysContextProvider>

    )
}

export default App