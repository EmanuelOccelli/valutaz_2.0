import React , {useState} from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const StampaDomande = ({Arraydomande, onSliderChange}) => {
    const [media, setMedia] = useState(0);
    const[Valorislider,setValoriSlider] = useState(Arraydomande.map(()=>0))
    const cambioValore = (index, newValue) => {
      const nuoviValori = [...Valorislider];
      nuoviValori[index] = newValue;
      setValoriSlider(nuoviValori);
  
      //prende la funzione presa da contact per fare la media e gestire gli slider singolarmente senza farli muovere tutti assieme
      onSliderChange(nuoviValori);
    }

  return (
    <div>
        {Arraydomande.map((elemento , index)=>(
            <div key={index} className="col-12 sotto bordo">
                <p>{elemento.question}</p>
                <input type="range"
            min="0"
            max="5"
            value={Valorislider[index]}
            onChange={(e) => cambioValore(index, parseInt(e.target.value, 10))}
            className="form-control-range">

            </input>

            </div>
        ))}
        <div className="col-12 centra bordo">
          <input type="button" value="Calcola media"></input>
          {media !== 0 && <p>Media: {media}</p>}
        </div>
    </div>
  )
}

export default StampaDomande