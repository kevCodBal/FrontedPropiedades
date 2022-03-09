import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Page from '../components/Page'

export default function DetailPropiedades() {

    const [propiedad, setPropiedad] =useState()
    const [cargado, setCargado] = useState(false)
    const {id} = useParams()
    //console.log(id)
    
    const getOne= 
    `
    query{
        propiedadonly(id:"${id}"){
          tamano
          parqueo
          precio
          ubicacion
          fotografias 
          banos
          numeroHabitaciones
          descripcion
        }
      }
    `

    useEffect(()=>{
    axios.post("http://localhost:8000/graphql",{
      query:getOne
    }).then(res =>{
        console.log(res.data.data.propiedadonly)
        setPropiedad(res.data.data.propiedadonly)
        setCargado(true)
    })
  },[id])

  return (

    <Page>
        
       { cargado?

       <div className=' w-full h-full'>

            <div className='flex m-6 bg-gray-100 '>
                    <div className='flex justify-center p-5'>
                        <img  className='w-3/3 h-3/3' src={propiedad.fotografias.length? propiedad.fotografias[0]:"https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"} alt="" />
                    </div>

                    <div className='flex justify-center justify-items-center  p-5 w-1/3'>
                        <div className='flex  flex-col'>
                            <h1>{propiedad.ubicacion.length? propiedad.ubicacion[0]:<p>Estado</p>}</h1>
                            <div className='flex p-5 m-3'>
                                <h1>Precio</h1>
                                {propiedad.precio? <h2>| {propiedad.precio}</h2>: <h2>|</h2>}
                            </div>

                            <div className='flex p-5 m-3 flex-col'>
                                <h1>Descripcion</h1>
                                {propiedad.descripcion? <h2>| {propiedad.descripcion}</h2>: <h2>|</h2>}
                            </div>
                                
                        </div>
                    </div>
            </div>
        </div>: <p>Cargando</p>
       } 
    </Page>
    


  )
}
