import React, { useState } from 'react'
import CherchBar from './CherchBar'
import ResultatList from './ResultatList'
import './index.css';

const list=[
    {id:1,nom:"banane",type:"fruit"},
    {id:2,nom:"orange",type:"fruit"},
    {id:3,nom:"pomme",type:"fruit"},
    {id:4,nom:"kiwi",type:"fruit"},
    {id:5,nom:"tomate",type:"legume"},
    {id:6,nom:"carotte",type:"legume"},
    {id:7,nom:"pomme de terre",type:"legume"},
    {id:8,nom:"navet",type:"legume"},
]

function App() {

    const [data,setData] = useState([]);


    const categorie = (cat) =>{
        const newItem = list.filter((l)=>l.type === cat);
        setData(newItem);
    }
    

  return (
    <div className='app'>
    <div className='container'>
      <CherchBar  categorie={categorie} />
      <ResultatList data={data} /> 
    </div>
    </div>
  )
}

export default App
