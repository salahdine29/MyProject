import React from 'react';
import './index.css';


function ResultatList({data}) {
  return (
    <ul className='result'>
     {data.map((d)=>{
        return (
            <li key={d.id}>{d.nom}</li>
        );
     })}
    </ul>
  )
}

export default ResultatList
