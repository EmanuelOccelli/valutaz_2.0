import "./Contact.css"
import React, {useState,useEffect} from 'react'
import StampaDomande from "./Stampadomande1";
import StampaProf from "./StampaProf";
import 'bootstrap/dist/css/bootstrap.min.css';
let totale=0
const Contact = () => {
  const [jsonArray, setJsonArray] = useState([]); //stati dei 2 array
  const [json2Array, setjson2Array]= useState([])
  const [sommaValori, setSommaValori] = useState(0);
  const [numeroSlider, setNumeroSlider] = useState(0);
//Funzione per controllare gli slider della pagina contact nella sezione domande
  const onSliderChange = (nuoviValori) => {
    const nuovaSomma = nuoviValori.reduce((acc, valore) => acc + valore, 0);
    setSommaValori(nuovaSomma);
    setNumeroSlider(nuoviValori.length);
    //valori singoli
    console.log('Valori singoli:', nuoviValori);

    // Stampa il valore totale
    console.log('Valore totale:', nuovaSomma, 'totale:', totale);
    
  }
  const resetSliders = () => {
     // reset degli slider
    console.log('Reset degli slider');
    // Crea un array di lunghezza pari al numero di slider, con tutti i valori impostati a 0
    const nuoviValori = Array(jsonArray.length).fill(0);
    document.querySelectorAll('input[type="range"]').forEach((slider) => {
      slider.value = 0;
    });
    onSliderChange(nuoviValori);
  };

  //Ritorno dei 2 array dalla fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/1Lg20/ValutazioneDocenti/main/ProfJSON.json');
        const data = await response.json();
        setjson2Array(data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/1Lg20/ValutazioneDocenti/main/domandeProf.json');
        const data = await response.json();
        setJsonArray(data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []);

    
    return (
      <div className="container bordo centra">
        <div className="row spazia bordo">
          <div className="col-8 centra bordo">
            < StampaDomande Arraydomande={jsonArray} onSliderChange={onSliderChange} />
           
          </div>
          <div className="col-4 centra bordo">
            <div className="row" >
             < StampaProf Arrayprof={json2Array} resetSliders={resetSliders} />
              
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;