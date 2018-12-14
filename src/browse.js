import React, { Component } from 'react';
import './browse.css'
import Product from './product'
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';





class Browse extends Component {


  constructor(props){
    super(props);

    this.filterList = this.filterList.bind(this);
    this.resetItemsInBrowse = this.resetItemsInBrowse.bind(this);
    this.addToCartClicked = this.addToCartClicked.bind(this);
    this.addToWishlistClicked = this.addToWishlistClicked.bind(this);
    this.fetchData = this.fetchData.bind(this);




    this.state = {
      items: [],
      itemsInBrowse: 0,
      itemsClean: [],
      itemAmount: 9,
      initialPageAmount: 9,
      arrayInLocalStorage: [],
      arrayInLocalStorageWishlist: [],
      item: [],
      pagina: 1,
      hoeveelheid: 9,
      pagesintotal: 100,
      filters: []
      // token: "string"


    }
  }

  componentWillMount() {
    window.scrollTo(0, 0)
    this.fetchData()
    this.loaderFunction()
  }

  fetchData(pagina = this.state.pagina, hoeveelheid = this.state.hoeveelheid) {
      $(".spinner").show()
      $(".browsegridder").hide()

      fetch(`http://localhost:5000/api/product/${pagina}/${hoeveelheid}`,{
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
          console.log("RETRIEVED ITEMS SUCCES!")
          return results.json();
        }).then(data => {
          console.log(data)
          this.setState({pagesintotal: data.totalpages})
          let items = data.products.map((pic) => {
            console.log(pic)
            return(
              <div>
                <div style={{
                    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)", margin: "5px"}}>
                    <Link style={{padding: "0"}} to={{ pathname: '/productinfopage', state: { pic: pic } }}> <Product desc={pic.product.productDescription} name={pic.product.productName} price={"€" +pic.product.productPrice/100 + ",-"} image={pic.images[0]}/></Link>
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

            $(".spinner").fadeOut("fast");
            $(".browsegridder").fadeIn("fast");
            // console.log("ITEM SET IN STATE")
          })
      }


fetchDataFilter(filterarray) {
    $(".spinner").show()
    $(".browsegridder").hide()

    this.state.filters.unshift(filterarray)
    let filterstring = ""
    this.state.filters.map(filter => {

      if (filterstring == "") {
        filterstring = filterstring + "?" +filter;
      } else {
        filterstring = filterstring + "&" +filter;

      }

    })
    console.log(filterstring)


    fetch(`http://localhost:5000/api/product/filter/1/10${filterstring}`,{
      host: 'localhost',
      port: 5000,
      method: 'GET',
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
      },
        // agent: false
      })
    //   .then(function(b) {
    //     console.log(b);
    // }).catch(function(a) {
    //     console.log(a);
    // });
      .then(results => {
        console.log("RETRIEVED ITEMS SUCCES!FILTERED")
        return results.json();
      }).then(data => {
        this.setState({pagesintotal: data.totalpages})
          console.log(data.totalpages)
        let items = data.products.map((pic) => {
          return(
            <div>
              <div style={{
                  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)", margin: "5px"}}>
                  <Link style={{padding: "0"}} to={{ pathname: '/productinfopage', state: { pic: pic } }}> <Product desc={pic.product.productDescription} name={pic.product.productName} price={"€" +pic.product.productPrice/100 + ",-"} image={pic.images[0]}/></Link>
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

          $(".spinner").fadeOut("fast");
          $(".browsegridder").fadeIn("fast");
          // console.log("ITEM SET IN STATE")
          this.forceUpdate()
        })
    }

  browseGrid() {
    let table = []
    for (let j = 0; j < this.state.hoeveelheid; j++) {
      // var randomnbr = Math.floor((Math.random() * 10) + 1);
      table.push(<div className="col-xs-12 col-sm-6 col-md-4" style={{padding: "0px", margin: "0px", height: "300px"}}>{this.state.items[j]}</div>)
    }
    console.log("browseGRID LOADED")
    return table;
  }

  goToPage(h) {
    console.log("go to page" + h)
    this.state.pagina = h;
    window.scrollTo(0, 0);
    this.fetchData()
    this.forceUpdate();
  }


  addToCartClicked(pic) {


if(localStorage.getItem("auth_token")) {

  // console.log(pic.product.id)
  let authstring = `Bearer ${localStorage.getItem("auth_token")}`
  // console.log(authstring)
  let cartitem = {"ProductId" : `${pic.product.id}`, "CartQuantity": "1"}
  console.log(JSON.stringify(cartitem))
  fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        body: JSON.stringify(cartitem),
        type: 'application/json',
        headers: {
          "Content-Type" : 'application/json',
          'Authorization' : authstring
        },
      })
}

else {
  //if user is not logged in
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
  };

}





  }
//TODO

  addToWishlistClicked(pic) {

    let authstring = `Bearer ${localStorage.getItem("auth_token")}`
    // console.log(authstring)
    let cartitem = {"ProductId" : `${pic.product.id}`}
    console.log(JSON.stringify(cartitem))
    fetch('http://localhost:5000/api/wishlist', {
          method: 'POST',
          body: JSON.stringify(cartitem),
          type: 'application/json',
          headers: {
            "Content-Type" : 'application/json',
            'Authorization' : authstring
          },
        })

  }
//TODO

  pagination()  {
    let navigatorArray = []
    let totalPages = Math.ceil(100);

    navigatorArray.push(<li className="active" style={{cursor: "pointer"}}><a style={{color: 'white'}} onClick={() => {this.goToPage(this.state.pagina )}} >{this.state.pagina }</a></li>)
    if(this.state.pagina >= 2) {
      navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage(this.state.pagina - 1 )}} >{this.state.pagina - 1 }</a></li>)
      if(this.state.pagina >= 3) {
        navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage(this.state.pagina - 2 )}} >{this.state.pagina - 2 }</a></li>)
      }
    }
    if(this.state.pagina <= 99) {
      navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage(this.state.pagina + 1 )}} >{this.state.pagina + 1 }</a></li>)
      if(this.state.pagina <= 98) {
        navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage(this.state.pagina + 2)}} >{this.state.pagina + 2 }</a></li>)
      }
    }
    navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage( this.state.pagina - 1)}} >&laquo;</a></li>)
    navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage(1)}} >Eerste</a></li>)
    navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage(this.state.pagina + 1)}} >&raquo;</a></li>)
    navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'black'}} onClick={() => {this.goToPage(this.state.pagesintotal)}} >Laatste</a></li>)

    return navigatorArray;
  }


  filterList(n = '') {
    // console.log(this.state.name)
    this.resetItemsInBrowse();
    let filteredArray = []
    let lengthOfString = n.length;


    // console.log(this.state.items[0].props.children.props.children[0].props.children[1].props.name)

    for (let b = 0; b < this.state.items.length; b++) {
      const currentIteminLoop = this.state.items[b];
      if (currentIteminLoop.props.children.props.children[0].props.children[1].props.name) {
        if (currentIteminLoop.props.children.props.children[0].props.children[1].props.name.substr(0 , lengthOfString) === n) {
          filteredArray.push(currentIteminLoop)
        }
      }
    }
    this.state.itemAmount = this.state.initialPageAmount;
    console.log(filteredArray.length)

    this.state.items = filteredArray;
    this.buttonClicked(1)
  }

  filtersUpdated() {
    this.resetItemsInBrowse();

  }
//TODO


  resetItemsInBrowse() {
    let resetArray = [];
    for (let b = 0; b < this.state.itemsClean.length; b++) {
      resetArray.push(this.state.itemsClean[b])
    }

    this.state.itemAmount = this.state.initialPageAmount;
    console.log(this.state.initialPageAmount)

    this.state.items = resetArray;
    this.buttonClicked(1)
  }

  // backupcode() {
  //   [<div className="col-sm-3 hidden-xs">
  //     <ul className="list-group">
  //       <li onClick={this.resetItemsInBrowse} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item"><span className="badge">392</span>Alle tassen weergeven</li>
  //       <li onClick={() => {this.filterList("Halstas")}} style={{cursor: "pointer"}} className="list-group-item"><span className="badge">392</span>Halster tassen</li>
  //       <li onClick={() => {this.filterList("Chris")}} style={{cursor: "pointer"}} className="list-group-item"><span className="badge">392</span>'Robin'</li>
  //       <li onClick={() => {this.filterList("The")}} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item"><span className="badge">392</span>'the'</li>
  //     </ul>
  //
  //   </div>]
  // }

  loaderFunction() {
    // $(".browsercontent").hide()
    // $(".browsercontent").fadeIn(1000)

    var executed = false;
    var loaded = function () {

    };
    $(window).on('load', loaded);


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
            <div className="col-sm-12 text-center" style={{}}>
              <nav aria-label="Page navigation">
                <ul className="pagination" id="pagination">
                  {this.pagination()}
                </ul>
              </nav>
            </div>
          </div>
          <div className="container">
            <div className="spinner"></div>
          </div>
          <div className="row text-center browsercontent" style={{height: "500px"}}>
            <div className="col-sm-3 hidden-xs" style={{marginTop:"70px", cursor: "not-allowed"}}>
              <ul style={{
                  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)", cursor: "not-allowed"}} className="list-group">
                <li onClick={() => {this.fetchData()}} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item">Alle tassen weergeven</li>
                <li onClick={() => {this.fetchDataFilter("BrandId=2")}} style={{cursor: "pointer"}} className="list-group-item">eastpack</li>
                <li onClick={() => {this.fetchDataFilter("BrandId=3")}} style={{cursor: "pointer"}} className="list-group-item">Gucci</li>
                <li onClick={() => {this.fetchDataFilter("BrandId=4 ")}} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item">Rains</li>
              </ul>

            </div>
            <div className="col-sm-9 text-right browsegridder" style={{}}>
              {this.browseGrid()}
            </div>
            <div className="col-sm-12 text-center" style={{}}>
              <nav aria-label="Page navigation">
                <ul className="pagination" id="pagination">
                  {this.pagination()}
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
