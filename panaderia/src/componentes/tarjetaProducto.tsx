import { type Productos } from '../types'
import './tarjetaProducto.css'

interface Props {
  producto: Productos
}

function TarjetaProducto({ producto }: Props) {
  return (
    <div className='tarjeta'>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="tarjeta-img"
        /> 
        <div className='tarjeta-info'>
            <h3 className='tarjeta-nombre'>{producto.nombre}</h3>
            <p className='tarjeta-descripcion'>{producto.descripcion}</p>
            <p className='tarjeta-precio'>${producto.precio.toFixed(2)}</p>
        </div>
    </div>
      
  )
}

export default TarjetaProducto