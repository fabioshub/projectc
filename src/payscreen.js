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


  pushorder(){
  let  jsoncart = JSON.parse(localStorage.getItem('cartforcheckout'));
fetch('http://localhost:5000/api/order/MakeOrder', {
      method: 'POST',
      body: JSON.stringify(jsoncart),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log("cart added to database")
 };

  render() {
    return(
      <div id="paginaCart" style={{marginTop: "120px"}}>
        <div className="container">
        <div className="row" style={{minHeight: "100px"}}>
          <div className="col-sm-12 text-center" style={{marginBottom: "100px"}}>
            <h1  style={{margin: '30px 0', fontWeight: "700"}}>Betalen</h1>
            <hr style={{border: "0px",
              height: "8px",
              width: "200px",
              backgroundColor: "rgb(69, 69, 69)"}} />
          </div>

        <div className="col-sm-6">
          <h1 style={{marginBottom: "40px"}}>Selectie:</h1>
          <ul>
            {this.listView()}
          </ul>
        </div>
            <div className="col-md-6 text-right">
              <div class="container login-container">
                    <div class="row">
                        <div class="col-md-6 login-form-1">
                            <h3>Je laatste gegevens</h3>
                            <form onSubmit={() => {this.pushorder()}}>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="je email *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="name" class="form-control" placeholder="je naam *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="adres *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="huisnummer *" required/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="woonplaats *" required/>
                                </div>
                                <div class="form-group">
                                    <input  style={{fontSize: '17px', fontWeight: "300", padding: "10px"}} type="submit" class="btnSubmit" value="Afrekenen" />
                                </div>

                                <p>Totaal: {this.state.totalPrice +  ",-"}</p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
      </div>
    </div>
    </div>

    )
  }
}

export default Payscreen;
