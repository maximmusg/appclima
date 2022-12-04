import { useState, createContext } from "react";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [busqueda, setBuqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = e => {
        setBuqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <ClimaContext.Provider value={{busqueda, datosBusqueda}} >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext
