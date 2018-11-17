import React, { Component } from 'react';
import './browse.css'
import Product from './product'
import { Link } from 'react-router-dom';
import CartWLI from './cartwishlistitem';

class Cart extends Component {

  constructor(props){
    super(props);

    this.listView = this.listView.bind(this);
    this.deleteFromWishlist = this.deleteFromWishlist.bind(this);


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
          <CartWLI name={pic.product.productName} ID={pic.product.id} productSpecification={pic.product.productSpecification} price={"€" + pic.product.productPrice + ",-"} image={pic.images[0]}></CartWLI>
            <button onClick={()=>this.deleteFromWishlist(pic.product.productName)} style={{fontSize: '17px', fontWeight: "300", padding: "10px"}} type="button" id="addtowishlist" class="btn">Verwijder uit winkelmandje <i style={{color: "rgb(237, 86, 65)"}} className="far fa-times-circle"></i> </button>
              <hr style={{border: "0px", height: "1px", backgroundColor: "lightgrey"}} />
        </div>
      )
    })
    // this.setState({cartify: cartify})
    this.setState({cartList: cartList})


  } else{
    this.state.cartList = [<div className="text-center" style={{fontSize: "20px"}}>Je winkelmandje is leeg :(</div>]
  }

  }

  checkOut() {
    // let res = fetch('tester.json').then(results => {return results.json()})
    // console.log(res)
    // let orderObject = {}
    let productIDs = []
    let userID = null
    let AddressID = null
    for (var i = 0; i < this.state.cartList.length; i++) {
      console.log(this.state.cartList[i].props.children[0].props.ID)
      productIDs.push(this.state.cartList[i].props.children[0].props.ID)
    } 
    // orderObject.push({orderIDs})
    // orderObject.push({userID})
    // orderObject.push({AddressID})

    let orderObject = {orderObject: {productIDs: productIDs, userID: userID, AddressID: AddressID}}
    console.log(orderObject)
    // console.log(this.state.cartList[2].props.children[0].props.ID)
    // let checkOutCartArray = {this.state.cartList[0].props.children[0].props.ID}
    // console.log(checkOutCartArray)
    let checkoutCart = 10;
    console.log(checkoutCart)
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(checkoutCart)

    }

    fetch('API', options).then(function(pas) {console.log(pas)}).catch(function(error) {console.log(error)})
  }

  deleteFromWishlist(h) {

    let arrayInLocalStorage = JSON.parse(localStorage.getItem('arrayInLocalStorage'));
    let tempDeleteArray = [];


      for (let b = 0; b < arrayInLocalStorage.length; b++) {
        const crrentItem = arrayInLocalStorage[b]
        if(arrayInLocalStorage[b].product.productName !== h) {
          tempDeleteArray.push(crrentItem)
        } else {
          console.log("discard " + arrayInLocalStorage[b].productName)
        }

      }
      localStorage.setItem('arrayInLocalStorage', JSON.stringify(tempDeleteArray));
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
      <div id="paginaCart" style={{marginTop: "120px"}}>
        <div className="row text-center" style={{minHeight: "100px"}}>
          <div className="col-sm-12">
            <h1  style={{margin: '30px 0', fontWeight: "700"}}>winkelmandje</h1>
            <hr style={{border: "0px",
              height: "8px",
              width: "200px",
              backgroundColor: "rgb(69, 69, 69)"}} />
          </div>
        </div>

        <div className="container">
          {this.listView()}
          <div className="row">
            <div className="col-md-12 text-right">
              <button onClick={() => {this.checkOut()}}style={{fontSize: '17px', fontWeight: "300", padding: "10px"}} type="button" id="addtocartbtn" class="btn">Afrekenen</button>
              <p>Totaal: {this.state.totalPrice +  ",-"}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Cart;
