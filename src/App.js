import logo from './logo.svg';
import './App.css';
import Mail from './Components/Mail';
import { useState } from 'react';
import Header from './Components/utils/Header';
import Footer from './Components/utils/Footer';



function App() {


  const [inicio, setInicio] = useState('')

  const handleInput = (e) => {

    const data = document.getElementById('cantidad')
    setInicio(data.value)


  }



  if (!inicio) {
    return (
      <div>
        <Header />

        
<div class="section-title-one">
   <div class="container">
      <div class="row">
         <div class="col-lg-12">
            <div class="text-center">
               <div class="content">
                  <h2 class="fw-bold">Correos</h2>
                  <p>
                  Favor, indicar cuantos correos quiere crear
                  </p>
               </div>
            </div>
         </div>
      </div>
      
   </div>
   
</div>

<section class="signin-area signin-one">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-5">
            <form action="#">
               <div class="signin-form form-style-two rounded-buttons">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="form-input">
                           <label>Cantidad de correos</label>
                           <div class="input-items default">
                              <input type="number" placeholder='Ingrese cantidad de correos' id='cantidad' />
                              <i class="lni lni-envelope"></i>
                           </div>
                        </div>
                        
                     </div>
                   
                 
                     <div class="col-md-6">
                        <div class="form-input rounded-buttons">
                           <button
                           onClick={handleInput}
                              class="btn primary-btn rounded-full"
                              type="submit"
                              >
                           Generar
                           </button>
                        </div>
                        
                     </div>                     
                     
                  </div>
               </div>
               
            </form>
         </div>
      </div>
      
   </div>
   
</section>


  


      </div>
    )

  } else {
    return (
      <div>
         <Header />
         <Mail cantidad={inicio} />
         <Footer/>
      </div>
      
    )
  }
}

export default App;
