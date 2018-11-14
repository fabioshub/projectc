import React, {Component} from 'react';
import './termsandconditions.css';

class Terms extends React.Component {
    render(){

        return(
            <div className='container terms-container'>
                <div className='row'>
                    <div className='col-md-6 terms-form'>
                        <h1>Terms and Conditions</h1>
                        <div id='panel' className='panel terms-panel'>
                        <h6>[placeholder text]</h6>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Terms;