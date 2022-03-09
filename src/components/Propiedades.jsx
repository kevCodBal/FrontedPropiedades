import React, { useEffect, useState } from 'react'
import Propiedad from './Propiedad'
import {gql} from '@apollo/client'
import axios from 'axios'

const getAllPropityes =
`
query{
  propiedades{
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
}
`


export default function Propiedades({propiedadesBusqueda, busqueda}) {
  const[ propiedades, setPropiedades]= useState()
  const [cargado, setCargado] = useState(false)

  useEffect(()=>{

    if(!busqueda){

      axios.post("http://localhost:8000/graphql",{
        query:getAllPropityes
      }).then(res =>{
         // console.log(res.data.data.propiedades)
          setPropiedades(res.data.data.propiedades)
          setCargado(true)
      })
    }else{
      setCargado(true)
    }
  },[])
  

  return (
    <div className='flex justify-center mt-10 mx-8 flex-wrap  gap-4 '>
      {
        propiedadesBusqueda?.length===0?<h1>No se encontraron resultados</h1>:<></>
      }
      {
        propiedadesBusqueda? propiedadesBusqueda.map(propiedad => <Propiedad key={propiedad.id} propiedad={propiedad}/>):
        <>
        {cargado? propiedades.map(propiedad => <Propiedad key={propiedad.id} propiedad={propiedad}/>):<p>...Cargando</p> } 
        </>
        
      }
       
    </div>
  )
}
