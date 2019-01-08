import React, { Component } from 'react';
import './footer.css'
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return(
      <section id="contact" className="s-contact container-fluid">

        <div class="row foot">

            <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6 spaceBtMenu">
                        <h4> Klantenservice </h4>
                        <ul class="text-left">
                            <li> <a href="#"> Bestelling </a> </li>
                            <li> <a href="#"> Betaling </a> </li>
                            <li> <a href="#"> Bezorging </a> </li>
                            <li> <a href="#"> Retouren & service </a> </li>
                        </ul>
            </div>

            <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6 spaceBtMenu">
                        <h4> Zakelijk </h4>
                        <ul class="text-left">
                            <li> <a href="#"> Zakelijke klanten </a> </li>
                            <li> <a href="#"> Samenwerking </a> </li>
                            <li> <a href="#"> Affiliate program </a> </li>
                            <li> <a href="#"> Waardebonnen </a> </li>
                        </ul>
            </div>
            
            <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                        <h4 class="winkels"> Winkels </h4>
                        <ul class="text-left">
                            <li> <a href="#"> Amsterdam </a> </li>
                            <li> <a href="#"> Rotterdam </a> </li>
                            <li> <a href="#"> Den Haag </a> </li>
                            <li> <a href="#"> Leiden </a> </li>
                        </ul>
            </div>

            <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6 winkel">
                        <h4> Betaalmethoden </h4>
                            <ul class="nav nav-pills payments icns">
                                <li><i class="fab fa-cc-paypal fa-3x"></i></li>
                                <li><i class="fab fa-cc-mastercard fa-3x"></i></li>
                                <li><i class="fab fa-cc-visa fa-3x"></i></li>
                                <li><i class="fab fa-cc-amazon-pay fa-3x"></i></li>
                                <li><i class="fab fa-bitcoin fa-3x"></i></li>
                                <li><i class="fab fa-cc-apple-pay fa-3x"></i></li>
                            </ul> 
                        
            </div>
        </div>
       
       <div className="row footer-bottom text-center">
           <div className="col-sm-11 contact-secondary" data-aos="fade-up">
               <h4 className="subhead subhead--light volgOns">Volg ons</h4>

               <ul className="contact-social">
                   <li>
                       <a href="#0"><i className="fab fa-twitter"></i></a>
                   </li>
                   <li>
                       <a href="#0"><i className="fab fa-instagram"></i></a>
                   </li>
                   <li>
                       <a href="#0"><i className="fab fa-facebook"></i></a>
                   </li>
                   <li>
                       <a href="#0"><i className="fab fa-google-plus"></i></a>
                   </li>
                   <li>
                       <a href="#0"><i className="fab fa-pinterest"></i></a>
                   </li>
               </ul>
           </div>
       </div>

       

       <div className="row pull-center">
       
           <div className="col-sm-12 cl-copyright">
                <span>
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                </span>
                <a href="/"><span><Link to='/termsandservices'>Algemene Voorwaarden</Link> - <Link to='/privacy'>Privacy Verklaring</Link> - <Link to='/faq'>FAQ</Link> - <Link to='/contact'>Contact</Link></span> </a>
           </div>
       </div>

       <div className="cl-go-top">
           <a className="smoothscroll" title="Terug naar boven" href="#top"><i className="icon-arrow-up" aria-hidden="true"></i></a>
       </div>

   </section>
    );
  };
}

export default Footer;
