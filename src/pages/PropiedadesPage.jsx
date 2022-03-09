import React, { useRef, useState, useEffect } from 'react'
import Page from '../components/Page'
import Propiedades from '../components/Propiedades'
import axios from 'axios'

export default function PropiedadesPage() {

    const [propiedades, setPropiedades] = useState()
    const [numHabitaciones, setnumeroHabitaciones]= useState()
    const nombreUbicacion = ['Guatemala', 'Quetzaltenango', 'Chimaltenango', 'Solola'  ]
    const [peticion, setPeticion]= useState(false)
   
    const onChangeUbicacion = (e)=>{
        
        console.log(e.currentTarget.value)
        let  ubicacionQuery= e.currentTarget.value
        let query=`ubicacion:["${ubicacionQuery}"]`
        console.log(query)
        busqueda(query)
        setPeticion(true)
        
    }


    const onChangePrecio = (e)=>{
        console.log(e.currentTarget.value)
        let precio1query = e.currentTarget.value
        let precio2query = precio1query *2
        let query=`precio:{valor1:${precio1query}, valor2:${precio2query}}`
        console.log(busqueda)
        busqueda(query)
        setPeticion(true)

    }

    const onChangeNumeroHabitacion = (e)=>{
        console.log(e.currentTarget.value)
        let numeroBusqueda = e.currentTarget.value
        let query=`numeroHabitaciones:${numeroBusqueda}` 
        console.log(numHabitaciones)
        busqueda(query)
        setPeticion(true)
          
    }

    const busqueda=(query)=>{
        var busquedaquery=`
            query{
                    propiedadesBusqueda(${query})
                    {
                        ubicacion
                    tamano
                    numeroHabitaciones
                    banos
                    fotografias
                    descripcion
                    parqueo
                    precio
                    id
                    }
                }`
        //console.log(busquedaquery)

        axios.post("http://localhost:8000/graphql",{
        query:busquedaquery
        }).then(res =>{
            console.log(res.data.data.propiedadesBusqueda)
            setPropiedades(res.data.data.propiedadesBusqueda)
            
        }).catch(erorr=>{
            setPeticion(false)
        })
    }

    useEffect(()=>{

            
    },[propiedades])
    
  return (
    <Page>
        <div className='flex justify-center gap-5 border-orange-200 '> 
          <div className='flex rounded flex-col shadow-md border border-gray-200  m-3 p-2'>
              <h3>Estado</h3>
              <select   onChange={(e)=>onChangeUbicacion(e) }>
                  {
                      nombreUbicacion.map((p)=>(
                        <option>{p}</option>
                      ))
                  }
              </select>
          </div>

          <div  className='flex rounded flex-col shadow-md border border-gray-200  m-3 p-2'>
              <h3>Precio</h3>
              <select onChange={(e)=>onChangePrecio(e)} >
                  <option value="25000"> mayor $25000</option>
                  <option value="50000" >mayor $50000</option>
                  <option value="100000" >mayor $100000</option>
                  <option value="200000" >mayor $200000</option>
              </select>
          </div>

          <div  className='flex rounded flex-col shadow-md border border-gray-200 m-3 p-2'>
              <h3>Numero Habitaciones</h3>
              <select onChange={(e)=>onChangeNumeroHabitacion(e)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
              </select>
          </div>


        </div>
        
        {
            propiedades?<Propiedades busqueda={true} propiedadesBusqueda={propiedades} />:<Propiedades busqueda={false}/>
        }
    </Page>
  )
}
