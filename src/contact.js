import React, { Component } from 'react';
import './contact.css';


class Contact extends Component {
    render() {

        return (
            <div class='container contact-container'>
                <div class='row'>
                    <div class="col-md-6 contact-form">
                        <h1>Contact us:</h1>
                        <h3>If you have any feedback or questions, feel free to fill in the form below:</h3>
                        <form>
                            <h3>Your name (optional):</h3>
                            <div class="form-group">
                                <input type='text' class="form-control" placeholder="Name" value="" />
                            </div>
                            <h3>Your e-mail address:</h3>
                            <div class="form-group">
                                <input type='text' class="form-control" value="" />
                            </div>
                            <h3>Your company (optional):</h3>
                            <div class="form-group">
                                <input type='text' class="form-control" value="" />
                            </div>
                            <h3>Brief description of your question:</h3>
                            <div class="form-group">
                                <input type='text' class="form-control" placeholder="Max 100 characters" value="" />
                            </div>
                            <h3>Your question:</h3>
                            <div class="form-group">
                                <input type='text'class="form-control" placeholder="Max 1000 characters" value="" />
                            </div>
                            <div class="form-group">
                                <a href="#" class="AccountMade">Do you already have an account?</a>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btnSubmit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;