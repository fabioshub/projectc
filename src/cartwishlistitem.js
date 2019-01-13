import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './product.css'
import $ from 'jquery';


class CartWLI extends Component {

  constructor(props){
    super(props);
    this.state = {
      totalperitem: 0,
    }
  }

  componentDidMount() {
    console.log(this.props.price)
    this.setState({totalperitem: this.props.price * this.props.quantity})
  }

  // code() {
  //   <div className="row">
  //     <div className="col-xs-6 text-left">
  //       <h1 style={{ fontSize: '20px', fontWeight: '500',color:'rgb(71, 71, 71)', margin: "0 0 35px 0"}} id="productname">{this.props.name}</h1>
  //         <img src={this.props.image} style={{width: "50%"}}></img>
  //
  //         <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)'}} id="productname">Prijs: €{this.state.totalperitem}</p>
  //         <p style={{marginTop: '20px',fontFamily:'Roboto', fontWeight: '500',color:'rgb(71, 71, 71)'}} id="productname">Aantal: {this.props.quantity}</p>
  //     </div>
  //     <div className="col-xs-6 text-left">
  //         <ul style={{color: 'grey'}} >
  //           {ReactHtmlParser(this.props.productSpecification)}
  //         </ul>
  //     </div>
  //
  //   </div>
  // }

  render() {

    return(
      <div className="container text-center" id="productitem" >

        <div className="row">

          <div className="col-sm-6 text-center">
            <h3 style={{color: 'rgb(57, 57, 57)', fontWeight: "500", fontSize: "30px"}} className="text-left">{this.props.name}</h3>
            <hr/>
            <img src={this.props.image} style={{ width: "200px", marginBottom: "20px"}} ></img>
            <br/>

            </div>
          <div className="col-sm-6 text-left">
            <h3 style={{color: 'rgb(46, 46, 46)', fontWeight: "500", fontSize: "30px"}} >{"€" + Math.round(this.state.totalperitem / 100 * 100) }</h3>
            <hr/>
            <br/>
            <h3 style={{color: 'rgb(46, 46, 46)', fontWeight: "300", fontSize: "17px"}} >{"Aantal: " + this.props.quantity }</h3>

            <p style={{color: "rgb(57, 57, 57)", margin: "30px 0"}}>
              {ReactHtmlParser(this.props.productSpecification)}
            </p>
            </div>
          </div>
        </div>
    );
  };
}

export default CartWLI;
