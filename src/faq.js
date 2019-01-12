import React, { Component } from 'react';
import './faq.css';
import {Link} from 'react-router-dom';

class Faq extends React.Component{
    constructor(){
        super();

        this.state = {
            show_faq1: false,
            show_faq2: false,
            show_faq3: false,
            show_faq4: false,
            show_faq5: false
        }

        this.show_faq1 = this.show_faq1.bind(this);
        this.show_faq2 = this.show_faq2.bind(this);
        this.show_faq3 = this.show_faq3.bind(this);
        this.show_faq4 = this.show_faq4.bind(this);
        this.show_faq5 = this.show_faq5.bind(this);
    }

    show_faq1(event) {
        event.preventDefault();

        this.setState({
            show_faq1: true,
            show_faq2: false,
            show_faq3: false,
            show_faq4: false,
            show_faq5: false
        });
    }

    show_faq2(event) {
        event.preventDefault();

        this.setState({
            show_faq1: false,
            show_faq2: true,
            show_faq3: false,
            show_faq4: false,
            show_faq5: false
        });
    }
    
    show_faq3(event) {
        event.preventDefault();

        this.setState({
            show_faq1: false,
            show_faq2: false,
            show_faq3: true,
            show_faq4: false,
            show_faq5: false
        })
    }

    show_faq4(event) {
        event.preventDefault();

        this.setState({
            show_faq1: false,
            show_faq2: false,
            show_faq3: false,
            show_faq4: true,
            show_faq5: false
        })
    }

    show_faq5(event) {
        event.preventDefault();
        
        this.setState({
            show_faq1: false,
            show_faq2: false,
            show_faq3: false,
            show_faq4: false,
            show_faq5: true
        })
    }

    render(){

        return(
            <div class='faq-container'>
                <div class='row'>
                    <div class='col-sm-7 col-sm-offset-1'>
                        <div class='well'>
                            <h1 style={{margin: '30px 0', fontWeight: "500", color: "rgba(71, 73, 88, 0.93)"}}>FAQ</h1>
                            <div class='form-group'>
                                <div id='faqpanel-1' className='panel faq-panel' onClick={this.show_faq1}>
                                    <h5>Hoe kan ik mijn favoriete producten opslaan?</h5>
                                </div>
                                {
                                    this.state.show_faq1
                                        ? (
                                            <div id='faq-answerpanel-1'className='panel faq-answerpanel'>
                                                <h5>Je kunt je favoriete producten opslaan in een persoonlijke wishlist. Daarvoor moet je eerst inloggen. Als je ingelogd bent kun je vanuit de <Link to='/browse'>browse-pagina</Link> en vanuit product-pagina's producten aan je wishlist toevoegen.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-2' className='panel faq-panel' onClick={this.show_faq2}>
                                    <h5>Waarom moet ik mijn gegevens invullen als ik als gast wil bestellen?</h5>
                                </div>
                                {
                                    this.state.show_faq2
                                        ? (
                                            <div id='faq-answerpanel-2' className='panel faq-answerpanel'>
                                                <h5>Omdat wij graag willen weten waar wij je pakketjes heen moeten sturen, hebben wij een paar adresgegevens nodig. Daarnaast hebben wij een aantal contactgegevens nodig zodat we je kunnen bereiken als er iets mis gaat. Deze gegevens worden voor niets anders gebruikt.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-3' className='panel faq-panel' onClick={this.show_faq3}>
                                    <h5>Waarom heb ik mijn bestelling nog niet ontvangen?</h5>
                                </div>
                                {
                                    this.state.show_faq3
                                        ? (
                                            <div id='faq-answerpanel-3' className='panel faq-answerpanel'>
                                                <h5>Soms kan het een aantal dagen duren voordat je bestelling binnen is. Dit kan zijn omdat het warenhuis je product niet meer in huis heeft, of omdat je gewoon iets verder weg woont.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-4' className='panel faq-panel' onClick={this.show_faq4}>
                                    <h5>Kan ik ook vanuit het buitenland bestellen?</h5>
                                </div>
                                {
                                    this.state.show_faq4
                                        ? (
                                            <div id='faq-answerpanel-4' className='panel faq-answerpanel'>
                                                <h5>Dit is helaas op dit moment nog niet mogelijk. Houd je ogen open, want misschien kan dit in de nabije toekomst wel!</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-5' className='panel faq-panel' onClick={this.show_faq5}>
                                    <h5>Waar kan ik vragen of klachten over een product indienen?</h5>
                                </div>
                                {
                                    this.state.show_faq5
                                        ? (
                                            <div id='faq-answerpanel-5' className='panel faq-answerpanel'>
                                                <h5>Een vraag of klacht kan bij ons telefonisch, via WhatsApp of gemakkelijk via de <Link to='/contact'>contact-pagina</Link> ingediend worden. Wij proberen zo snel mogelijk antwoord te geven! Natuurlijk kun je ook gewoon naar één van onze winkels met je vraag als je dat liever hebt.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq;