import React , {useState} from 'react'
import './Contact.css'

const StampaDomande = ({Arraydomande}) => {
    const[Valoreslider,setValoreSlider] = useState(0)
    const cambioValore=(event)=>{
       // Limita il range da 0 a 5
      const newValue = Math.max(1, Math.min(5, parseInt(event.target.value, 10)));
      setValoreSlider(newValue)
      console.log(Valoreslider)
    }

  return (
    <div>
        {Arraydomande.map((elemento , index)=>(
            <div key={index} className="col-12 sotto bordo">
                <p>{elemento.question}</p>
                <input type="range" min="1" max="5" value="0" onChange={cambioValore}></input>
                <p></p>
            </div>
        ))}
    </div>
  )
}

export default StampaDomande