import './App.css';
import { useQuery, gql, useMutation} from '@apollo/client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import PropiedadesPage from './pages/PropiedadesPage';
import DetailPropiedades from './pages/DetailPropiedades';
import Login from './pages/Login';

const query = gql`
  query Users{
    users {
      name
      email
      role
    }
  }
`

const mutation = gql`
mutation UpdateUser($id:String!, $user:UserInput){
  updateUser(id:$id , user:$user) {
    name
    email
    role
  }
}
`

const queryGrapQl =
`
query{propiedades{
  id
  banos
  fotografias{img1}
  descripcion
}}
`




function App() {

  // const [usuario, setUser]= useState([])
  // const [cargado, setcargado]= useState(false)

  // useEffect(()=>{
  //   axios.post("http://localhost:8000/graphql", {
  //     query:queryGrapQl
  //   }).then(res =>{
  //       console.log(res.data, "aqui en el response")
  //       setUser(res.data)
  //       setcargado(true)
        
  //   })
  
  //   // axios.post("http://localhost:8000/api/auth/login",{
  //   //   "email": "kevpo@udemi.com",
  //   //   "password": "12345asd"
  //   // },{
  //   //   withCredentials:true
  //   // } ).then(res=>console.log(res))
  // },[])

 // const {loading, data, error} = useQuery(query)

  //const [ mutate, { loading:loadingmutation, data:mutationData , error:erorMutation}]=useMutation(mutation)

  //const chageRole = ()=>{
   // mutate({variables:{id:"61f0e7663d6ee333bebb2d9d", user:{name:"Jose"}}})
  //}
  return (

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories/' element={<PropiedadesPage/>} />
        <Route path='/propiedad/:id' element={<DetailPropiedades/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    

    
  );
}

export default App;
