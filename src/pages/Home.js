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
      setris(<Link to="/contact">VAI A QUESTIONARIO DOCENTI</Link>)
    }else if(miaMail!=mail && MiaPassword==pass){
      setris("Nome utente sbagliato")
    }else if(miaMail==mail && MiaPassword!=pass){
      setris("Password sbagliata")
    }else if(miaMail!=mail && MiaPassword!=pass){
      setris("Credenziali errate")
    }
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