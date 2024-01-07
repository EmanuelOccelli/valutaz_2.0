import './Login.css'
import { Outlet, Link } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
let mail=""
let pass=""


const Home = () => {
  const [Credenziali, setCredenziali] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/1Lg20/ValutazioneDocenti/main/Credenziali.json');
        const data = await response.json();
        setCredenziali(data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []);
  const leggimail = (param) => {
    mail=param.target.value

  }
  const leggipsw = (param) => {
    pass=param.target.value
  }
  const [ris, setris] = useState("")
  const visualizza=()=>{
    
    if (miaMail==mail && MiaPassword==pass){
      setris(<Link to="/contact">VAI A QUESTIONARIO DOCENTI</Link>)
    }else if(miaMail!=mail && MiaPassword==pass){
      setris("Nome utente sbagliato")
    }else if(miaMail==mail && MiaPassword!=pass){
      setris("Password sbagliata")
    }else if(miaMail!=mail && MiaPassword!=pass){
      setris("Credenziali errate")
    }
    console.log(Credenziali)
  }  
  return (
      <div className='all'>
      <div className="container">
      <div className="row">
        <div className="col-12 cc">
          <div className="row">
            <div className="col-12 title">Valutazione Docenti</div>
            <div className="col-6 scritte">
              Nome utente:
            </div>
            <div className="col-6">
              <input className='t' type="text" placeholder="Inserisci Nome utente" onChange={leggimail}></input>
            </div>
            <div className="col-6 scritte">
              Password:
            </div>
            <div className="col-6">
              <input className='t' type="password" placeholder="Inserisci password" onChange={leggipsw}></input>
            </div>
            <div className="col-12 bt">
              <input type="button" onClick={visualizza} value="INVIA"></input>
            </div>
          </div>
          <div className="col-12 ris">{ris}</div>
        </div>
      </div>
      < Outlet/>
    </div>
    </div>
    );
  };
  
  export default Home;