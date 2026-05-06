import React, { useEffect } from 'react'
import { useState } from 'react'
import { type Productos } from '../types'
import { supabase } from '../utils/supabase'

function useProductos() {

  //creamos un estado para guardar los productos
const [productos, setProductos] = React.useState<Productos[]>([])
//creamos un estado para guardar el valor de la busqueda miestras se escriben
const [busqueda, setBusqueda] = useState<string>('')
//creamos un estado para guardar el valor de la busqueda filtrada por categoria en un boton 
const [categoria, setCategoria] = useState<string>('todas')

const categorias = ['todas', 'pan dulce', 'pan salado', 'bebida']

    const traerDatos = async () => {
        //esperamos una respuesta de la consulta (select)
        const { data } = await supabase.from('Productos').select("*")
        //si recibiomos datos, los guardamos en el estado
        if (data) {
            setProductos(data)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        traerDatos()
    }, [])

    //varuable para guardar el resultado de la busqueda 
     const buscarProducto = productos.filter((p)=>{
      return p.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
    })

    //variable para guardar las categorias filtradas por el boton en el menú
    const filtrarPorCategoria = productos.filter((p)=>{
      if(categoria === 'todas'){ //si la categoria es todas, mostramos todos los productos
        return true
      }
      return p.categoria === categoria //si no, mostramos solo los productos que coincidan con la categoria seleccionada
    })

    //estadisticas de los productos 
    //variable con la cantidad de productos
    const totalProductos = productos.length
    //variable con la suma de todos los precios de los productos
    const sumadeTodos =productos.reduce((suma, p) => suma + p.precio, 0)
    //variable con el precio promedio de los productos
    const precioPromedio = totalProductos > 0 ? sumadeTodos / totalProductos : 0


  return {
    traerDatos,
    buscarProducto,
    setBusqueda,
    categoria,
    setCategoria,
    filtrarPorCategoria,
    categorias,
    sumadeTodos,
    totalProductos,
    precioPromedio,
    busqueda

  }
}

export default useProductos