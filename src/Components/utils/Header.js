

const Header = () => {
    return(
        
<section class="header-area header-one">
   <div class="header-content-area">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-6 col-12">
               <div class="header-wrapper">
                  <div class="header-content">
                     <h1 class="header-title">
                        Generador de correos temporales.
                     </h1>
                     <p class="text-lg">
                        Bienvendios al generador de correos temporales, para evitar ingresar nuestros correos a los sitios que lo solicitan.
                     </p>
                     <p class="text-lg">
                        Está aplicación está realizada mediante el framework Reactjs y ayroui por el area de fronted
                     </p>
                     <p class="text-lg">
                        Para el funcionamiento de la aplicación, se utilizo una api llamada https://www.1secmail.com/. Que permite generar correos de manera aleatoria
                     </p>
                     <div class="header-btn rounded-buttons">
                        <a
                           class="btn primary-btn-outline btn-lg"
                           href="https://www.1secmail.com/"
                           target="_blank"
                           >
                        Link de la API
                        </a>
                     </div>
                  </div>
                  
               </div>
            </div>
            <div class="col-lg-6 col-12">
               <div class="header-image d-none d-lg-block">
                  <div class="image">
                     <img
                        src="mail.svg"
                        alt="Header"
                        />
                  </div>
               </div>
            </div>
         </div>
         
      </div>
      
      <div class="header-shape">
         <img src="https://cdn.ayroui.com/1.0/images/header/header-shape.svg" alt="shape" />
      </div>
      
   </div>
   
</section>

    )
}

export default Header;