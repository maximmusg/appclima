import React from 'react'

const Formulario = () => {
  return (
    <div className='contenedor' >
        <form action="">
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" id='ciudad' name='ciudad' />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select name="pais" id="pais">
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
            </div>
            <input type="submit" value='consultar clima'/>
        </form>
    </div>
  )
}

export default Formulario