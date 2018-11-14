import React, { Component } from 'react';
import './contact.css';


class Contact extends Component {
    render() {

        return (
          <div class='container'>
            <div class='row'>
                <div class='col-sm-10 col-sm-offset-1'>
                    <div class='well'>
                        <form>
                            <div class='row'>
                                <div class='col-sm-4'>
                                    <div class='form-group'>
                                        <label for='fname'>First Name</label>
                                        <input type='text' name='fname' class='form-control' placeholder="Heb het aangepast;) Gr, Soner."/>
                                    </div>
                                    <div class='form-group'>
                                        <label for='lname'>Last Name</label>
                                        <input type='text' name='lname' class='form-control' />
                                    </div>
                                    <div class='form-group'>
                                        <label for='email'>Email</label>
                                        <input type='email' name='email' class='form-control' />
                                    </div>
                                    <div class='form-group'>
                                        <label for='subject'>Subject</label>
                                        <select name='subject' class='form-control'>
                                            <option>General Inquiry</option>
                                            <option>Site Suggestions</option>
                                            <option>Product Support</option>
                                        </select>
                                    </div>
                                </div>
                                <div class='col-sm-8'>
                                    <div class='form-group'>
                                        <label for='message'>Message</label>
                                        <textarea class='form-control' name='message' rows='10'></textarea>
                                    </div>
                                    <div class='text-right'>
                                        <input type='submit' class='btn btn-primary' value='Submit' />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>

        );
    }
}

export default Contact;
