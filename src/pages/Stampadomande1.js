import React , {useState} from 'react'
import './Stampadomande.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const StampaDomande = ({Arraydomande, onSliderChange}) => {
    const [media, setMedia] = useState(0);
    const[Valorislider,setValoriSlider] = useState(Arraydomande.map(()=>0))
    const cambioValore = (index, newValue) => {
      const nuoviValori = [...Valorislider];
      nuoviValori[index] = newValue;
      setValoriSlider(nuoviValori);
  
      //prende la funzione presa da contact per gestire gli slider singolarmente senza farli muovere tutti assieme
      onSliderChange(nuoviValori);
    }

  return (
    <div>
        {Arraydomande.map((elemento , index)=>(
            <div key={index} className="col-12 bd margine">
                <p>{elemento.question}</p>
                <input type="range"
            min="0"
            max="5"
            value={Valorislider[index]}
            onChange={(e) => cambioValore(index, parseInt(e.target.value, 10))}
            className="form-control-range">

            </input>
            <p>0&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5</p>
            </div>
        ))}
    </div>
  )
}

export default StampaDomande