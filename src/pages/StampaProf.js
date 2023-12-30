import React from 'react'
import './Contact.css'

const StampaProf = ({Arrayprof}) => {
    
  return (
    <div>
        {Arrayprof.map((elemento , index)=>(
            <div key={index} className="col-12 centra bordo">
                <p>{elemento.nome}</p>
                <br></br>
                
            </div>
        ))}
    </div>
  )
}

export default StampaProf