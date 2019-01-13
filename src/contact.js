import React, { Component } from 'react';
import './contact.css';


class Contact extends Component {
    render() {

        return (

          // contact pagina first lay-out
             <div class="container">
                 <h3 class="text-center h3Space">Service & Contact</h3>
                 <p class="text-center w-75 m-auto">Elke dag bereikbaar tussen 09.00 - 20.00 uur.</p>
                   <div class="row space">
                     <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                       <div class="card border-0">
                          <div class="card-body text-center">
                            <a href="">
                              <i class="fas fa-envelope fa-5x mb-3"></i>
                              <h4 class="mb-5">Stuur ons een bericht</h4>
                            </a>
                              <p >Zo snel mogelijk<br></br>antwoord op uw vraag</p>
                          </div>
                        </div>
                     </div>
                   <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                     <div class="card border-0">
                        <div class="card-body text-center">
                          <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                          <h4 class="mb-5">Store</h4>
                          <address>Kepa10 6543JD <br></br>Rotterdam</address>
                        </div>
                      </div>
                   </div>
                   <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                     <div class="card border-0">
                        <div class="card-body text-center">
                          <i class="fas fa-phone fa-5x mb-3"></i>
                          <h4 class="mb-5">U kunt ons bellen.</h4>
                          <p>06 45 74 70 32</p>
                        </div>
                      </div>
                   </div>
                   <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                     <div class="card border-0">
                        <div class="card-body text-center">
                          <i class="fab fa-whatsapp-square fa-5x mb-3"></i>
                          <h4 class="mb-5">Via Whatsapp</h4>
                          <p>+31 (0) 6 45 74 70 32<br></br> antwoord binnen 5 minuten</p>
                        </div>
                      </div>
                   </div>
                 </div>
             </div>

          // contact pagina pop up

        );
    }
}

export default Contact;
