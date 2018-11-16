import React, { Component } from 'react';
import './faq.css';

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
                            <h1>FAQ</h1>
                            <div class='form-group'>
                                <div id='faqpanel-1' className='panel faq-panel' onClick={this.show_faq1}>
                                    <h5>Dit is vraag 1</h5>
                                </div>
                                {
                                    this.state.show_faq1
                                        ? (
                                            <div id='faq-answerpanel-1'className='panel faq-answerpanel'>
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate neque enim, nec dapibus nunc tempus a. Aenean in porttitor felis. Praesent et enim sagittis, interdum eros quis, pharetra ligula. Aliquam erat volutpat. Ut id eros sed arcu blandit auctor. Suspendisse et eros molestie, vehicula felis quis, placerat enim. Nunc sed porttitor lectus. Praesent a sapien non eros aliquet pellentesque nec ut purus. Sed congue urna in enim auctor, ut condimentum dui facilisis.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-2' className='panel faq-panel' onClick={this.show_faq2}>
                                    <h5>Dit is vraag 2</h5>
                                </div>
                                {
                                    this.state.show_faq2
                                        ? (
                                            <div id='faq-answerpanel-2' className='panel faq-answerpanel'>
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate neque enim, nec dapibus nunc tempus a. Aenean in porttitor felis. Praesent et enim sagittis, interdum eros quis, pharetra ligula. Aliquam erat volutpat. Ut id eros sed arcu blandit auctor. Suspendisse et eros molestie, vehicula felis quis, placerat enim. Nunc sed porttitor lectus. Praesent a sapien non eros aliquet pellentesque nec ut purus. Sed congue urna in enim auctor, ut condimentum dui facilisis.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-3' className='panel faq-panel' onClick={this.show_faq3}>
                                    <h5>Dit is vraag 3</h5>
                                </div>
                                {
                                    this.state.show_faq3
                                        ? (
                                            <div id='faq-answerpanel-3' className='panel faq-answerpanel'>
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate neque enim, nec dapibus nunc tempus a. Aenean in porttitor felis. Praesent et enim sagittis, interdum eros quis, pharetra ligula. Aliquam erat volutpat. Ut id eros sed arcu blandit auctor. Suspendisse et eros molestie, vehicula felis quis, placerat enim. Nunc sed porttitor lectus. Praesent a sapien non eros aliquet pellentesque nec ut purus. Sed congue urna in enim auctor, ut condimentum dui facilisis.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-4' className='panel faq-panel' onClick={this.show_faq4}>
                                    <h5>Dit is vraag 4</h5>
                                </div>
                                {
                                    this.state.show_faq4
                                        ? (
                                            <div id='faq-answerpanel-4' className='panel faq-answerpanel'>
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate neque enim, nec dapibus nunc tempus a. Aenean in porttitor felis. Praesent et enim sagittis, interdum eros quis, pharetra ligula. Aliquam erat volutpat. Ut id eros sed arcu blandit auctor. Suspendisse et eros molestie, vehicula felis quis, placerat enim. Nunc sed porttitor lectus. Praesent a sapien non eros aliquet pellentesque nec ut purus. Sed congue urna in enim auctor, ut condimentum dui facilisis.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <div class='form-group'>
                                <div id='faqpanel-5' className='panel faq-panel' onClick={this.show_faq5}>
                                    <h5>Dit is vraag 5</h5>
                                </div>
                                {
                                    this.state.show_faq5
                                        ? (
                                            <div id='faq-answerpanel-5' className='panel faq-answerpanel'>
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate neque enim, nec dapibus nunc tempus a. Aenean in porttitor felis. Praesent et enim sagittis, interdum eros quis, pharetra ligula. Aliquam erat volutpat. Ut id eros sed arcu blandit auctor. Suspendisse et eros molestie, vehicula felis quis, placerat enim. Nunc sed porttitor lectus. Praesent a sapien non eros aliquet pellentesque nec ut purus. Sed congue urna in enim auctor, ut condimentum dui facilisis.</h5>
                                            </div>
                                        )
                                    : (
                                        null
                                    )
                                }
                            </div>
                            <h5>Heb je een andere vraag? Neem gerust contact met ons op!</h5>
                            <button /*onClick=''*/  type="button" id="tocontactbtn" class="tocontactbtn">Vraag stellen</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq;