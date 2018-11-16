import React, { Component } from 'react';
import './browse.css'
import Product from './product'
import { Link } from 'react-router-dom';
import axios from 'axios';




class Browse extends Component {


  constructor(props){
    super(props);

    this.buttonClicked = this.buttonClicked.bind(this);
    this.filterList = this.filterList.bind(this);
    this.resetItemsInBrowse = this.resetItemsInBrowse.bind(this);
    this.addToCartClicked = this.addToCartClicked.bind(this);
    this.addToWishlistClicked = this.addToWishlistClicked.bind(this);




    this.state = {
      items: [],
      itemsInBrowse: 0,
      itemsClean: [],
      itemAmount: 9,
      initialPageAmount: 9,
      arrayInLocalStorage: [],
      arrayInLocalStorageWishlist: []

    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.fetchData()
  }

   fetchData() {
     fetch('http://localhost:5000/api/product/1/10',{
      host: 'localhost',
      // port: 5000,
      // path: '/',
      method: 'GET',
      type: 'application/json',
      // rejectUnauthorized: false,
      // requestCert: false,
      mode: "no-cors",
headers:{
"Access-Control-Allow-Credentials" : true},
      agent: false
    }).then(result => {return result.json()}).then(data => {let items = data.products.map((pic) => {console.log(pic)})})


    fetch('http://localhost:5000/api/product/1/10',{
      host: 'localhost',
      port: 5000,
      path: '/',
      method: 'GET',
      type: 'application/json',

      rejectUnauthorized: false,
      requestCert: true,
      mode: "no-cors",
headers:{
"Access-Control-Allow-Credentials" : true},
      agent: false
    }).then(results => {
      return results.json();
    }).then(data => {
      let items = data.products.map((pic) => {
        console.log(pic)
        return(
          <div>
            <div style={{
                boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)", margin: "5px"}}>
            <Link style={{padding: "0"}} to={{ pathname: '/productinfopage', state: { pic: pic } }}> <Product desc={pic.product.productDescription} name={pic.product.productName} price={"€" +pic.product.productPrice + ",-"} image={pic.images[0]}/></Link>
            <div  style={{marginRight: "10px",paddingBottom: "10px"}} >
              <button type="button"  onClick={()=>{this.addToWishlistClicked(pic)}} id="addtowishlist" class="btn" >  <i className="fas fa-heart" ></i></button>
              <button type="button" style={{marginLeft: "10px"}} onClick={()=>{this.addToCartClicked(pic)}} id="addtocartbtn" class="btn" ><i className="fas fa-shopping-cart"></i></button>

            </div>

          </div>
          </div>
        )
      })
      this.setState({items: items})
      this.setState({itemsClean: items})
    })
  }

  browseGrid(h, p) {
    let table = []
    for (let j = h * p; j < h * (p + 1); j++) {
      // var randomnbr = Math.floor((Math.random() * 10) + 1);
      table.push(<div className="col-xs-12 col-sm-4 " style={{padding: "0px", margin: "0px", height: "400px"}}>{this.state.items[j]}</div>)
    }
    return table;
  }

  buttonClicked(h) {
    this.state.itemsInBrowse = h - 1;
    this.forceUpdate();
  }

  addToCartClicked(pic) {

    if(localStorage.getItem('arrayInLocalStorage')) {
      let temparray = JSON.parse(localStorage.getItem('arrayInLocalStorage'))
      console.log(temparray)
      temparray.push(pic)
      console.log(temparray)
      // this.setState({arrayInLocalStorage: temparray})
      localStorage.setItem('arrayInLocalStorage', JSON.stringify(temparray));
    }
    else {
      let temparray = this.state.arrayInLocalStorage;
      temparray.push(pic)
      // this.setState({arrayInLocalStorage: temparray})
      localStorage.setItem('arrayInLocalStorage', JSON.stringify(temparray));
    }
    window.alert("Item added to cart!");

  }

  addToWishlistClicked(pic) {

    if(localStorage.getItem('arrayInLocalStorageWishlist')) {
      let temparray = JSON.parse(localStorage.getItem('arrayInLocalStorageWishlist'))
      console.log(temparray)
      temparray.push(pic)
      console.log(temparray)
      // this.setState({arrayInLocalStorage: temparray})
      localStorage.setItem('arrayInLocalStorageWishlist', JSON.stringify(temparray));
    }
    else {
      let temparray = this.state.arrayInLocalStorageWishlist;
      temparray.push(pic)
      // this.setState({arrayInLocalStorage: temparray})
      localStorage.setItem('arrayInLocalStorageWishlist', JSON.stringify(temparray));
    }
    window.alert("Item added to Wishlist!");

  }


  navigator(h) {
    let navigatorArray = []
    let totalPages = Math.ceil(this.state.items.length / h);
    for (let j = 1; j < totalPages + 1; j++){
      navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.buttonClicked(j)}} >{j}</a></li>)
    }
    return navigatorArray;
  }

  filterList(n = '') {
    // console.log(this.state.name)
    this.resetItemsInBrowse();
    let filteredArray = []
    let lengthOfString = n.length;


    console.log(this.state.items[0].props.children.props.children[0].props.children[1].props.name)

    for (let b = 0; b < this.state.items.length; b++) {
      const currentIteminLoop = this.state.items[b];
      if (currentIteminLoop.props.children.props.children[0].props.children[1].props.name) {
        if (currentIteminLoop.props.children.props.children[0].props.children[1].props.name.substr(0 , lengthOfString) === n) {
          filteredArray.push(currentIteminLoop)
        }
      }
    }
    this.state.itemAmount = filteredArray.length
    this.state.items = filteredArray;
    this.buttonClicked(1)
  }

  resetItemsInBrowse() {
    let resetArray = [];
    for (let b = 0; b < this.state.itemsClean.length; b++) {
      resetArray.push(this.state.itemsClean[b])
    }
    this.state.itemAmount = this.state.initialPageAmount;
    this.state.items = resetArray;
    this.buttonClicked(1)
  }

  backupcode() {
    [<div className="col-sm-3 hidden-xs">
      <ul className="list-group">
        <li onClick={this.resetItemsInBrowse} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item"><span className="badge">392</span>Alle tassen weergeven</li>
        <li onClick={() => {this.filterList("Incr")}} style={{cursor: "pointer"}} className="list-group-item"><span className="badge">392</span>'Incr'</li>
        <li onClick={() => {this.filterList("Chris")}} style={{cursor: "pointer"}} className="list-group-item"><span className="badge">392</span>'Robin'</li>
        <li onClick={() => {this.filterList("The")}} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item"><span className="badge">392</span>'the'</li>
      </ul>

    </div>]
  }

  render() {
    return(
      <div id="paginaBrowse" style={{marginTop: "120px"}}>
        <div className="container-fluid ">
          <div className="row text-center" style={{height: "100px"}}>
            <div className="col-sm-12">
              <h1  style={{margin: '30px 0', fontWeight: "700"}}>Tassen browsen</h1>
              <hr style={{border: "0px",
                height: "8px",
                width: "200px",
                backgroundColor: "rgb(69, 69, 69)"}} />
            </div>
          </div>
          <div className="row text-center" style={{height: "500px"}}>


            <div className="col-sm-12 text-right" style={{}}>
              {this.browseGrid(this.state.itemAmount , this.state.itemsInBrowse)}
            </div>
            <div className="col-sm-12 text-center" style={{marginTop: "100px"}}>
              <nav aria-label="Page navigation">
                <ul className="pagination" id="pagination">
                  {this.navigator(this.state.itemAmount)}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Browse;
