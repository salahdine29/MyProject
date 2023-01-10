import React, { useState } from 'react'
import './index.css';

function CherchBar(props) {

    const [type,setType] = useState('');


    const show=(e)=>{
        setType(e.target.value)
    }

    const submit=(e)=>{
        e.preventDefault();
        props.categorie(type)
        
    }

  return (
    <div>
      <form>
        <input  type='text' onChange={show}/>
        <button onClick={submit}>Chercher</button>
      </form>
    </div>
  )
}

export default CherchBar
