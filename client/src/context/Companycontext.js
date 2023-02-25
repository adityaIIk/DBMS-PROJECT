import React, { useState, createContext } from "react";

export const Companyscontext = createContext();

export const CompanysContextProvider = (props) => {

    const [companys, setCompanys] = useState([]);

    const [selectedCompany, setselectedCompany] = useState(null);

    const [cars, setCars] = useState([]);

    const [selectedCar,setSelectedCar] = useState(null)

    const [policys, setpolicys] = useState([]);

    const [selectedPolicy, setSelectedPolicy] = useState(null);



    const addCompany = (company) => {

        setCompanys([...companys, company])


    }

    const addCar = (car) => {

        setCars([...cars, car])

    }

    const addPolicy = (policyy) => {

        setpolicys([...policys, policyy])

    }

    return (
        <Companyscontext.Provider value={{ companys, setCompanys, addCompany, selectedCompany, setselectedCompany,cars,setCars,addCar,selectedCar,setSelectedCar,policys,setpolicys,addPolicy ,selectedPolicy,setSelectedPolicy }}>
            {props.children}
        </Companyscontext.Provider>
    )
} 