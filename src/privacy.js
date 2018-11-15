import React, {Component} from 'react';
import './privacy.css';

class Privacy extends React.Component{
    render(){

        return(
            <div className='container privacy-container'>
                <div className='row'>
                    <div className='col-md-6 privacy-form'>
                        <h1>Privacy Statement</h1>
                        <div id='panel' className='panel privacy-panel'>
                        <h6>[placeholder text]</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Privacy;