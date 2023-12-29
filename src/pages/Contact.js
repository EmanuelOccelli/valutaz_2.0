import "./Contact.css"

const Contact = () => {
  let domande=[]
  let prof=[]
  let i=0
  fetch('https://raw.githubusercontent.com/1Lg20/ValutazioneDocenti/main/ProfJSON.json') 
      .then(response => response.json())
      .then(result => {
        result.forEach(element=>{
          prof.push(element)
        })
        console.log(result)

        console.log("lista prof: " + prof[i].nome)
        
      })
  fetch('https://raw.githubusercontent.com/1Lg20/ValutazioneDocenti/main/domandeProf.json') 
    .then(response => response.json())
    .then(result => {
      result.forEach(element => {
        domande.push(element)
      });
      //console.log(result)
      //console.log("domande" + domande)
    })
    const caricalista=()=>{
      console.log("CARICA LISTA")
     for(i=0;i<prof.length;i++){
      console.log(prof[i].nome)
      console.log(i)
      return(<div class="col-12 entra bordo">{prof[i].nome}</div>)
     }
    }
    
    return (
      <div class="container bordo centra">
        <div class="row spazia bordo">
          <div class="col-8 centra bordo">
            <input type="button" onClick={caricalista} value="CARICALISTA"></input>
          </div>
          <div class="col-4 centra bordo">
            <div class="row centra bordo" >
              {caricalista}
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;