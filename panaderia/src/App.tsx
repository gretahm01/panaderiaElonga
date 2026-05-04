import './App.css'
import TarjetaProducto from './componentes/tarjetaProducto'
import useProductos from './hooks/useProductos'
import Buscador from './componentes/buscador'
import Estadisticas from './componentes/estadisticas'

function App() {
  const { buscarProducto, filtrarPorCategoria, setBusqueda, busqueda, categorias, categoria, setCategoria, totalProductos, precioPromedio } = useProductos()

  const productosAMostrar = busqueda !== '' ? buscarProducto : filtrarPorCategoria

  return (
    <div className="app">

      <header className="app-header">
        <h1>Panadería de Elonga </h1>
      </header>

      <div className="app-controles">

        <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

        <div className="app-categorias">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={categoria === cat ? 'cat-btn activo' : 'cat-btn'}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='app-estadisticas'>
          <Estadisticas total={totalProductos} promedio={precioPromedio} />
        </div>

      </div>

      <div className="app-grid">
        {productosAMostrar.map((p) => (
          <TarjetaProducto key={p.id} producto={p} />
        ))}
      </div>

    </div>
  )
}

export default App