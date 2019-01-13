import React, { Component } from 'react';
import './browse.css'
import Product from './product'
import { Link } from 'react-router-dom';
import CartWLI from './cartwishlistitem';
import $ from 'jquery';


class Cart extends Component {

  constructor(props){
    super(props);

    this.listView = this.listView.bind(this);
    this.deleteFromWishlist = this.deleteFromWishlist.bind(this);


    this.state = {
      cartList: [<div className="text-center"><div style={{fontSize: "20px", color: "rgba(71, 73, 88, 0.93)", fontWeight: "500"}}>Je winkelmandje is leeg :(</div> <br/>
                <Link to="/browse"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgba(71, 73, 88, 0.93)", border: "none"}} type="button" id="addtocartbtn" class="btn">Let's get shoppin <i className="fas fa-shopping-cart"></i></button></Link></div>
                ],
      totalPrice: 0,
      listViewList1: [],
      cartify : [],
      Doorgaanis: "/cart"
    }

  }

  componentWillMount() {



  }

  async fetchCartData() {


      $(".spinner").show()
      $(".browsegridder").hide()

      let authstring = `Bearer ${localStorage.getItem("auth_token")}`
      await fetch(`http://localhost:5000/api/cart/`,{
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
          this.setState({totalPrice: data.totalPrice / 100})
          let cartList = data.products.map((pic) => {
            console.log(pic)
            return(
                <div>
                  <CartWLI quantity={pic.product.itemsInCart} name={pic.product.productName} ID={pic.product.id} productSpecification={pic.product.productSpecification} price={"€" + Math.round(pic.product.productPrice * 100) / 100 / 100} image={pic.product.images}></CartWLI>
                    <button onClick={()=>this.deleteFromWishlist(pic.product.id)} style={{fontSize: '17px', fontWeight: "300", background: "white"}} type="button" id="" class="btn"><i style={{color: "rgb(232, 93, 56)", fontSize: "20px"}} className="far fa-times-circle"></i> </button>
                </div>
              )
            })

            this.setState({cartList: cartList})

            if (this.state.cartList.length > 0) {
              this.setState({"Doorgaanis": "/checkoutlogin"})
            }

            // if(this.state.cartList.length = 0) {
            //   this.setState({totalPrice: "0"})
            //
            // }


            $(".spinner").fadeOut("fast");
            $(".browsegridder").fadeIn("fast");
            // console.log("ITEM SET IN STATE")
          })
    }

  componentDidMount() {

    window.scrollTo(0, 0)

  if (localStorage.getItem("auth_token")) {
    console.log("LOGINCART")
    this.fetchCartData()
  }

 else{
       if(localStorage.getItem('arrayInLocalStorage') && localStorage.getItem('arrayInLocalStorage').length > 2) {

         this.setState({"Doorgaanis": "/checkoutlogin"})

       let arrayInLocalStorage = JSON.parse(localStorage.getItem('arrayInLocalStorage'))
       let cartify = (arrayInLocalStorage.map((pic) => {


         let amount = JSON.parse(localStorage.getItem('arrayInLocalStorageQuantity'))

         var foundproduct = false;
         var productindex = 0;
         for(var i = 0; i < arrayInLocalStorage .length; i++) {
             if (arrayInLocalStorage[i].product.id == pic.product.id) {
                 foundproduct = true;
                 productindex = i;
                 break;
             }
         }

         return Math.round(pic.product.productPrice * 100 * amount[productindex]) / 100 / 100


       }))

       function add(a, b) {
          return a + b;
        }

       this.state.totalPrice = cartify.reduce(add, 0);

       let cartList = arrayInLocalStorage.map((pic) => {
         let amount = JSON.parse(localStorage.getItem('arrayInLocalStorageQuantity'))

         var foundproduct = false;
         var productindex = 0;
         for(var i = 0; i < arrayInLocalStorage .length; i++) {
             if (arrayInLocalStorage[i].product.id == pic.product.id) {
                 foundproduct = true;
                 productindex = i;
                 break;
             }
         }
         return(
           <div>
             <CartWLI quantity={amount[productindex]} name={pic.product.productName} ID={pic.product.id} productSpecification={pic.product.productSpecification} price={"€" + Math.round(pic.product.productPrice * 100) / 100 /100} image={pic.images[0]}></CartWLI>
               <button onClick={()=>this.deleteFromWishlist(pic.product.id)} style={{fontSize: '17px', fontWeight: "300", background: "white"}} type="button" id="" class="btn"><i style={{color: "rgb(232, 93, 56)", fontSize: "20px"}} className="far fa-times-circle"></i> </button>

           </div>
         )
       })


       this.setState({cartify: cartify})
       this.setState({cartList: cartList})


     } else{
       console.log("WHAT?")
       this.state.cartList = [<div className="text-center"><div style={{fontSize: "20px", color: "rgba(71, 73, 88, 0.93)", fontWeight: "500"}}>Je winkelmandje is leeg :(</div> <br/>
                 <Link to="/browse"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgba(71, 73, 88, 0.93)", border: "none"}} type="button" id="addtocartbtn" class="btn">Let's get shoppin <i className="fas fa-shopping-cart"></i></button></Link></div>
                 ]
     }
 }


  }

  checkOut() {

    if (JSON.parse(localStorage.getItem('arrayInLocalStorage')).length > 2) {


    localStorage.removeItem('cartforcheckout');
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

    let orderObject = {productIDs: productIDs, userID: userID, AddressID: AddressID}
    console.log(orderObject)

    localStorage.setItem('cartforcheckout', JSON.stringify(orderObject));


  }

    // // console.log(this.state.cartList[2].props.children[0].props.ID)
    // // let checkOutCartArray = {this.state.cartList[0].props.children[0].props.ID}
    // // console.log(checkOutCartArray)
    // let checkoutCart = 10;
    // console.log(checkoutCart)
    // const headers = new Headers();
    // headers.append('content-type', 'application/json');
    // const options = {
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify(checkoutCart)
    //
    // }

    // fetch('API', options).then(function(pas) {console.log(pas)}).catch(function(error) {console.log(error)})
  }

  async deleteFromWishlist(h) {
    console.log(h)
    if (localStorage.getItem("auth_token")) {


      let authstring = `Bearer ${localStorage.getItem("auth_token")}`
      // console.log(authstring)
console.log(h)
      let cartitem = {"ProductId" : h, "CartQuantity": "1"}
      // console.log(JSON.stringify(cartitem))
      await fetch('http://localhost:5000/api/cart', {
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



    } else {



    let arrayInLocalStorage = JSON.parse(localStorage.getItem('arrayInLocalStorage'));
    let arrayInLocalStorageQuantity = JSON.parse(localStorage.getItem('arrayInLocalStorageQuantity'));
    let tempDeleteArray = [];
    let tempDeleteArrayQuantity = [];


    console.log(arrayInLocalStorage[0].product.productName)

      for (let b = 0; b < arrayInLocalStorage.length; b++) {
        const ccrtquan = arrayInLocalStorageQuantity[b]
        const crrentItem = arrayInLocalStorage[b]
        console.log(arrayInLocalStorage[b].product)
        console.log(h)
        if(arrayInLocalStorage[b].product.id !== h) {
          tempDeleteArrayQuantity.push(ccrtquan)
          tempDeleteArray.push(crrentItem)
        } else {

        }

      }



      localStorage.setItem('arrayInLocalStorage', JSON.stringify(tempDeleteArray));
      localStorage.setItem('arrayInLocalStorageQuantity', JSON.stringify(tempDeleteArrayQuantity));

      this.forceUpdate();
      window.location.reload();

  }
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

  async debuguser() {
    let authstring = `Bearer ${localStorage.getItem("auth_token")}`
    console.log(authstring)
    await fetch("http://localhost:5000/api/userinfo/user",{
      host: 'localhost',
      port: 5000,
      method: 'GET',
      type: 'application/json',
      headers:{
        'Authorization' : authstring},
      }).then(function(response) {
      return response.json();
      }).then(function(myJson) {
    console.log(myJson)});
  }

  render() {
    return(
      <div id="paginaCart" style={{marginTop: "100px", marginBottom: "150 px"}}>
        <div className="row text-center" style={{minHeight: "100px"}}>
          <div className="col-sm-12">
            <h1  style={{margin: '30px 0', fontWeight: "500", color: "rgba(71, 73, 88, 0.93)"}}>winkelmandje</h1>
            <hr style={{border: "0px",
              height: "15px",
              width: "50px",
              backgroundColor: "rgba(71, 73, 88, 0.93)"}} />
          </div>
        </div>

        <div className="container">
          {this.listView()}
          <div className="row">
            <div className="col-md-12 text-right">
              <Link onClick={() => {this.checkOut()}} to={this.state.Doorgaanis}><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", marginTop: "40px"}} type="button" id="addtocartbtn" class="btn">Afrekenen</button></Link>
              <p style={{marginTop: "10px", color: "rgba(71, 73, 88, 0.93)", fontWeight: "500"}}>Totaal: {"€" +  Math.round(this.state.totalPrice * 100) / 100}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Cart;
