import { useState, createContext } from "react";
// import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBuqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado, setResultado] = useState({});

  const [cargando, setCargando] = useState(false);
  const [noResultado, setNoResultado] = useState(false);

  const datosBusqueda = (e) => {
    setBuqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const urlBase = "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "c0f14439fdb58bf309b25562b4c185cb";

  const consultarClima = async () => {
    try {
      setCargando(true);

      if (busqueda.ciudad) {
        const response = await fetch(
          `${urlBase}?q=${busqueda.ciudad}&appid=${API_KEY}`
        );

        if (response.ok) {
          const data = await response.json();
          setResultado(data);
        } else {
          setNoResultado("No se encontraron datos");
        }
      } else {
        setNoResultado("Todos los Campos son obligatorios");
      }
    } catch (error) {
      console.error("Error: ", error);
      setNoResultado("Ocurrio un error al consultar el clima");
    } finally {
      setCargando(false);
    }
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultado,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };

export default ClimaContext;
