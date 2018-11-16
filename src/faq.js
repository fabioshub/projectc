import React, {Component} from 'react';
import './faq.css';

class Faq extends React.Component{
    render(){

        return(
            <div class='faq-container'>
                <div class='row'>
                    <div class='col-sm-7 col-sm-offset-1'>
                        <div class='well'>
                            <h1>FAQ</h1>
                            <div class='form-group'>
                                <div id='faqpanel-1' className='panel faq-panel'>
                                    <h5>What is the meaning of life?</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq;