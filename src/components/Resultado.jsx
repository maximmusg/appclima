import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();

  const { name, main } = resultado;

  console.log(resultado);

  //Grados Kelvin
  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es: </h2>
      <div className="result">
        <div className="result-flex">
          <img
            src={`https://openweathermap.org/img/wn/${resultado.weather[0].icon}@2x.png`}
            alt="icono clima"
          />
          <p>
            {" "}
            {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>{" "}
          </p>
        </div>
        <p className="result-condition">
          Condición meteorológica: {resultado.weather[0].description}
        </p>
      </div>
      <div className="temp_min_max">
        <p>
          {" "}
          Min: {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          {" "}
          Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
