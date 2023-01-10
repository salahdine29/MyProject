import React, { useState } from 'react'

function Password() {
    const [pass,setPass] = useState('')
    console.log(pass)
  return (
    <div>
      <form>
        <input type='password' onChange={(e)=>setPass(e.target.value)} />
      </form>
      <p>{pass.length <= 0? "" :pass.length < 4 ?"le mot passe doit avoir moins 4 caractéres":"Validée"}</p>
    </div>
  )
}

export default Password








