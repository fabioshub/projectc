import React, { Component } from 'react';
import './contact.css';
import './contactform.js';


class Contact extends Component {
    render() {

        return (
            <div id='contact'>
                <div class='container'>
                    <div class='page-header'>
                        <h1>Contact us:</h1>
                        <p>If you have any feedback or questions, feel free to fill in the form below:</p>            
                    </div>
                    <div id='contactform'></div>
                </div>
                <script type="text/jsx" src="contactform.js"></script>
            </div>
        );
    }
}

export default Contact;