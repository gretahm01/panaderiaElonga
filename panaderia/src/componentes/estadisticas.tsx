import './estadisticas.css';

interface Props{
    total : number
    promedio : number
}


function Estadisticas({ total, promedio }: Props) {
  return (
    <div className='estadisticas'>
        <div className='estadistica-card'>
            <span className='estadistica-label'>Total de productos</span>
            <span className='estadistica-valor'>{total}</span>
        </div>
        <div className='estadistica-card'>
            <span className='estadistica-label'>Promedio de precios</span>
            <span className='estadistica-valor'>${promedio.toFixed(2)}</span>
        </div>
    </div>
  )
}

export default Estadisticas