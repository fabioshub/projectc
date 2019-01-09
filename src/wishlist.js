import React, { Component } from 'react';
import './browse.css'
import Product from './product'
import { Link } from 'react-router-dom';
import CartWLI from './cartwishlistitem';
import $ from 'jquery';


class Wishlist extends Component {

  constructor(props){
    super(props);

    this.listView = this.listView.bind(this);
    this.deleteFromWishlist = this.deleteFromWishlist.bind(this);
    this.addtowishtocart = this.addtowishtocart.bind(this);



    this.state = {
      cartList: [<div className="text-center"><div style={{fontSize: "20px"}}>Je verlanglijstje is leeg :(</div> <br/>
                <Link to="/browse"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgb(80, 80, 80)", border: "none"}} type="button" id="addtocartbtn" class="btn">Breng me naar de tassen! <i className="fas fa-shopping-cart"></i></button></Link></div>
                ],
      listViewList1: [],
      wishlisttocart: [100]
    }

  }

  componentWillMount() {



  }
  fetchCartData() {


      $(".spinner").show()
      $(".browsegridder").hide()

      let authstring = `Bearer ${localStorage.getItem("auth_token")}`
      fetch(`http://localhost:5000/api/wishlist/`,{
        host: 'localhost',
        port: 5000,
        // path: '/',
        method: 'GET',

        // rejectUnauthorized: false,
        // requestCert: true,
        // mode: "no-cors",
        headers:{
          // "Access-Control-Allow-Credentials" : true,
          'Authorization' : authstring
        },
          agent: false
        })
        .then(results => {
          console.log("RETRIEVED ITEMS SUCCES!")
          console.log(results)
          return results.json();
        }).then(data => {
          console.log(data)
          // this.setState({totalPrice: data.totalPrice})
          let cartList = data.products.map((pic) => {
            console.log(pic)
            return(
                <div>
                  <CartWLI name={pic.product.productName} ID={pic.product.id} productSpecification={pic.product.productSpecification} price={"€" + pic.product.productPrice + ",-"} image={pic.product.images}></CartWLI>
                    <button onClick={()=>this.deleteFromWishlist(pic.product.id)} style={{fontSize: '17px', fontWeight: "300", padding: "10px"}} type="button" id="" class="btn"><i style={{}} className="far fa-times-circle"></i> </button>
                      <hr style={{border: "0px", height: "1px", backgroundColor: "lightgrey"}} />
                </div>
              )
            })

            this.setState({cartList: cartList})


            $(".spinner").fadeOut("fast");
            $(".browsegridder").fadeIn("fast");
            // console.log("ITEM SET IN STATE")
          })
        }

  componentDidMount() {

    window.scrollTo(0, 0)
    this.fetchCartData();

  }

  addtowishtocart(h) {
    console.log("ID IS" + h)
    this.state.wishlisttocart.unshift(h)
    console.log(this.state.wishlisttocart)
  }

  deleteFromWishlist(h) {

    let authstring = `Bearer ${localStorage.getItem("auth_token")}`
    // console.log(authstring)
    let cartitem = {"ProductId" : h}
    // console.log(JSON.stringify(cartitem))
    fetch('http://localhost:5000/api/wishlist', {
          method: 'DELETE',
          body: JSON.stringify(cartitem),
          type: 'application/json',
          headers: {
            "Content-Type" : 'application/json',
            'Authorization' : authstring
          },
        }).then(results => console.log(results))
        this.fetchCartData();
        this.forceUpdate();
        window.location.reload();


  }

  convertWtoC() {
    let cartitem = {"ProductId" : this.state.wishlisttocart}
    let authstring = `Bearer ${localStorage.getItem("auth_token")}`

    fetch('http://localhost:5000/api/wishlist/tocart', {
          method: 'POST',
          body: JSON.stringify(cartitem),
          type: 'application/json',
          headers: {
            "Content-Type" : 'application/json',
            'Authorization' : authstring
          },
        }).then(results => console.log(results))
        this.fetchCartData();
        this.forceUpdate();
        window.location.reload();
  }


  listView() {
    let listViewList = []
                                                                                                                                                                                                                                                                                                                                                                                                            for (let j = 0; j < this.state.cartList.length; j++) {
      // var randomnbr = Math.floor((Math.random() * 10) + 1);
      listViewList.push(<div className="col-xs-12  text-right" style={{padding: "0px", margin: "0px"}}>{this.state.cartList[j]}</div>)
    }

    console.log(listViewList)
    this.state.listViewList1 = listViewList;

    return this.state.listViewList1;
  }

  render() {
    return(
      <div id="paginaCart" style={{marginTop: "150px"}}>
        <div className="row text-center" style={{minHeight: "100px"}}>
          <div className="col-sm-12">
            <h1  style={{margin: '50px 0'}}><i className="fas fa-heart" style={{color: "rgb(69, 69, 69)"}}></i></h1>
              <hr style={{border: "0px",
                height: "8px",
                width: "200px",
                backgroundColor: "rgb(69, 69, 69)"}} />
          </div>
        </div>

        <div className="container">

          {this.listView()}
        </div>

      </div>
    )
  }
}

export default Wishlist;
