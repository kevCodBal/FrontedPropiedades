import React, { useContext, useRef } from 'react'
import Page from '../components/Page'
import { userContext } from '../context/UserContext'

export default function Login() {

    const {user, setUser}= useContext(userContext)

    const password = useRef()
    const email = useRef()

    const singnIn= ()=>{
        let emailF = email.current.value
        let passwordF = password.current.value 

        
        fetch('http://localhost:8000/api/auth/login',{
            method: "POST",
            credentials: 'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:emailF,
                password: passwordF
            })

        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            setUser({logged:true, name:user.data.name})
        }).catch(error=>setUser({logged:false}))
    }

  return (
      <Page>
          <div class=" mt-10">
              <div class="bg-sky-800 text-center w-1/5 px-3 py-4 text-black mx-auto rounded">
                <form >
                        <input ref={email} type="email" placeholder="Usuario" class="block w-full mx-auto text-sm py-2 px-3 rounded" />
                        <input ref={password}  type="password" placeholder="Pasword" class="block w-full mx-auto text-sm py-2 px-3 rounded my-3" />
                        
                    </form>
                    <button  onClick={singnIn} class="bg-blue text-white font-bold py-2 px-4 rounded border block mx-auto w-2/5">
                        Login
                    </button>
              </div>
                
         </div>

      </Page>
   
  )
}
