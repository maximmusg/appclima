import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const { ciudad } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (Object.values(busqueda).includes("")) {
    //   setAlerta("Todos los campos son obligatorios ");
    //   return;
    // }
    // setAlerta("");
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor cont-form">
      {alerta && <p>{alerta}</p>}

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        {/* <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
            <option value="">Seleccione un pais</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">Espana</option>
            <option value="BO">Bolivia</option>
            <option value="FR">Francia</option>
            <option value="PE">Peru</option>
            <option value="PB">Paises Bajos</option>
          </select>
        </div> */}
        <input type="submit" value="Consultar clima" />
      </form>
    </div>
  );
};

export default Formulario;
