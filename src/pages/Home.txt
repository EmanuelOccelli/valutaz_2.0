import './Login.css'
import { Outlet, Link } from "react-router-dom";
import React, {useState,useRef} from 'react'
let mail=""
let pass=""
let miaMail="prova"
let MiaPassword="prova"

const Home = () => {
  const leggimail = (param) => {
    mail=param.target.value

  }
  const leggipsw = (param) => {
    pass=param.target.value
  }
  const [ris, setris] = useState("")
  const visualizza=()=>{
    
    if (miaMail==mail && MiaPassword==pass){
      setris(<Link to="/contact">Lista_prof</Link>)
    }else if(miaMail!=mail && MiaPassword==pass){
      setris("Nome utente sbagliato")
    }else if(miaMail==mail && MiaPassword!=pass){
      setris("Password sbagliata")
    }else if(miaMail!=mail && MiaPassword!=pass){
      setris("Credenziali errate")
    }
  }  
  return (
      <div className="container margcont  centra">
      <div className="row bordo">
        <div className="col-12">
          <div className="row">
            <div className="col-12  centra testo">Valutazione Docenti</div>
            <div className="col-6 margine centra">
              Nome utente:
            </div>
            <div className="col-6 margine centra">
              <input type="text" placeholder="Inserisci Nome utente" onChange={leggimail}></input>
            </div>
            <div className="col-6 margine centra">
              Password:
            </div>
            <div className="col-6 margine centra">
              <input type="password" placeholder="Inserisci password" onChange={leggipsw}></input>
            </div>
            <div className="col-12 margine centra">
              <input type="button" onClick={visualizza} value="INVIA"></input>
            </div>
          </div>
        </div>
        <div className="col-12 bordo centra">{ris}</div>
      </div>
      < Outlet/>
    </div>
    );
  };
  
  export default Home;