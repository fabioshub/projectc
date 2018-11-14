import React, { Component } from 'react';
import './contact.css';


class Contact extends Component {
    render() {

        return (
            <div className='container contact-container'>
                <div className='row'>
                    <div className="col-md-6 contact-form">
                        <h1>Contact us</h1>
                        <h4>If you have any feedback or questions, feel free to fill in the form below:</h4>
                        <form>
                            <h5>Your name (optional):</h5>
                            <div className="form-group">
                                <input type='text' className="form-control"/>
                            </div>
                            <h5>Your company (optional):</h5>
                            <div className="form-group">
                                <input type='text' className="form-control"/>
                            </div>
                            <h5>Your e-mail address:</h5>
                            <div className="form-group">
                                <input type='text' className="form-control"/>
                            </div>
                            <h5>Brief description of your question:</h5>
                            <div className="form-group">
                                <input type='text' className="form-control" placeholder="Max 100 characters"/>
                            </div>
                            <h5>Your question:</h5>
                            <div className="form-group">
                                <input type='text' className="form-control" placeholder="Max 1000 characters"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;