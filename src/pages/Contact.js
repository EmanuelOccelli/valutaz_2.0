import "./Contact.css"
import React, {useState,useEffect} from 'react'
import StampaDomande from "./Stampadomande1";
import StampaProf from "./StampaProf";

const Contact = () => {
  const [jsonArray, setJsonArray] = useState([]); //stati dei 2 array
  const [json2Array, setjson2Array]= useState([])
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
            < StampaDomande Arraydomande={jsonArray} />
           
          </div>
          <div className="col-4 centra bordo">
            <div className="row centra bordo" >
             < StampaProf Arrayprof={json2Array} />
              
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;