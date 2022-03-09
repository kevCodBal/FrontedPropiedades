import React from 'react'
import { Link } from 'react-router-dom'

const Propiedad = ({propiedad}) => {

    // const {img1}= propiedad.fotografias
    // console.log(img1, "deeeeeeee")

    const id = propiedad.id
  return (
    <>
        
        
        <div class="max-w-md mx-2 basis-1/3">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <Link to={`/propiedad/${id}`}>
                    <img class="rounded-t-lg max-h-60 w-full object-none" src={propiedad.fotografias.length? propiedad.fotografias[0]:"https://flowbite.com/docs/images/blog/image-1.jpg"} alt=""/>
                </Link>
                <div class="p-5">
                    <a href="#">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{propiedad.ubicacion.length? propiedad.ubicacion[0]:<p>Estado</p>}</h5>
                        <h3 className='text-2xl'>{propiedad.precio}</h3>
                    </a>
                    <p class="font-normal text-gray-700 mb-3">{propiedad.descripcion?propiedad.descripcion :"Hola a la Propiedad"}</p>
                    
                    <Link  to={`/propiedad/${id}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" >
                        Read more
                    </Link>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Propiedad