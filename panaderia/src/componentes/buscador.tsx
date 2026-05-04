import './buscador.css'

interface Props {
    busqueda : string
    setBusqueda : (value: string) => void
}

function Buscador({busqueda, setBusqueda}: Props) {
  return (
    <div className='buscador-container'>
        <input type="text" className='buscador-input' placeholder='Busque un producto...'
        value={busqueda}
        onChange={(e)=> setBusqueda (e.target.value)}
        />
    </div>
  )
}

export default Buscador