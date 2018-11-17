import React, { Component } from 'react';
import './footer.css'
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return(
      <section id="contact" className="s-contact container-fluid">


       <div className="row">

           <div className="col-sm-12 contact-main" data-aos="fade-up">
               <p>
               <a href="mailto:#0" className="contact-email">info@backtobag.nl</a>
               <span className="contact-number">+31 (0) 6 45 74 70 32</span>
               </p>
           </div>

       </div>

       <div className="row">

           <div className="col-sm-5 tab-full contact-secondary" data-aos="fade-up">
               <h3 className="subhead subhead--light">Rotterdam</h3>

               <p className="contact-address">
                   Kepa10
                   6543JD<br/>
                 Rotterdam<br/>

               </p>
           </div>

           <div className="col-sm-5 tab-full contact-secondary" data-aos="fade-up">
               <h3 className="subhead subhead--light">Volg ons</h3>

               <ul className="contact-social">
                   <li>
                       <a href="#0"><i className="fab fa-facebook"></i></a>
                   </li>

               </ul>



           </div>

       </div>

       <div className="row">
           <div className="col-sm-12 cl-copyright">
               <span>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
</span> <br/>
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
