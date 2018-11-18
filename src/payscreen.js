import React, { Component } from 'react';
import './browse.css'
import Product from './product'
import { Link } from 'react-router-dom';
import CartWLI from './cartwishlistitem';

class Payscreen extends Component {

  constructor(props){
    super(props);

    this.listView = this.listView.bind(this);


    this.state = {
      cartList: [<div className="text-center"><div style={{fontSize: "20px"}}>Je winkelmandje is leeg :(</div> <br/>
                <Link to="/browse"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgb(45, 82, 163)", border: "none"}} type="button" id="addtocartbtn" class="btn">Let's get shoppin <i className="fas fa-shopping-cart"></i></button></Link></div>
                ],
      totalPrice: 0,
      listViewList1: [],
      cartify : []
    }

  }

  componentWillMount() {



  }

  componentDidMount() {

    window.scrollTo(0, 0)


    if(localStorage.getItem('arrayInLocalStorage') && localStorage.getItem('arrayInLocalStorage').length > 2) {


    let arrayInLocalStorage = JSON.parse(localStorage.getItem('arrayInLocalStorage'))
    let cartify = (arrayInLocalStorage.map((pic) => {return pic.product.productPrice}))
    let cartList = arrayInLocalStorage.map((pic) => {
      this.state.totalPrice  = this.state.totalPrice + pic.product.productPrice;
      // this.setState({totalPrice: totalPrice});
      return(
        <div>
          <p>{pic.product.productName}</p>
        </div>
      )
    })
    // this.setState({cartify: cartify})
    this.setState({cartList: cartList})


  } else{
    this.state.cartList = [<div className="text-center" style={{fontSize: "20px"}}>Je winkelmandje is leeg :(</div>]
  }

  }




  listView() {
    let listViewList = []
    for (let j = 0; j < this.state.cartList.length; j++) {
      // var randomnbr = Math.floor((Math.random() * 10) + 1);
      listViewList.push(<li>{this.state.cartList[j]}</li>)
    }

    console.log(listViewList)
    this.state.listViewList1 = listViewList;

    return this.state.listViewList1;
  }

  render() {
    return(
      <div id="paginaCart" style={{marginTop: "120px"}}>
        <div className="row text-center" style={{minHeight: "100px"}}>
          <div className="col-sm-12">
            <h1  style={{margin: '30px 0', fontWeight: "700"}}>Uw laatste gegevens</h1>
            <hr style={{border: "0px",
              height: "8px",
              width: "200px",
              backgroundColor: "rgb(69, 69, 69)"}} />
          </div>
        </div>

        <div className="container">
          <ul>
            {this.listView()}
          </ul>
          <div className="row">
            <div className="col-md-12 text-right">
              <Link to="/checkoutlogin"><button onClick={() => {this.checkOut()}}style={{fontSize: '17px', fontWeight: "300", padding: "10px"}} type="button" id="addtocartbtn" class="btn">Afrekenen</button></Link>
              <p>Totaal: {this.state.totalPrice +  ",-"}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Payscreen;
