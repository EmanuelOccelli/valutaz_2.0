import React , {useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './stampaprof.css'

const StampaProf = ({Arrayprof, resetSliders}) => {
  return (
    <div>
        {Arrayprof.map((elemento , index)=>(
            <div key={index} className="col-12 centra bordo pulsante" onClick={resetSliders}>
                <p>{elemento.nome}</p>
                <br></br>
                
            </div>
        ))}
    </div>
  )
}

export default StampaProf