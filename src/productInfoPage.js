import React, { Component } from 'react';
import $ from 'jquery';


class ProductInfoPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: props.location.state.pic
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    console.log(this.state.item)
    $(".stickything2").hide()
    $(".stickything3").hide()

    if(!localStorage.getItem("auth_token")) {
      $(".hidethisbtnwhennogli").hide()
    }

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
      let temparray = [];
      temparray.push(pic)
      console.log(temparray)
      // this.setState({arrayInLocalStorage: temparray})
      localStorage.setItem('arrayInLocalStorage', JSON.stringify(temparray));
    };
    $('.stickything2').show(0).delay(2000).fadeOut(500);

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
      let temparray = [];
      temparray.push(pic)
      console.log(temparray)
      // this.setState({arrayInLocalStorage: temparray})
      localStorage.setItem('arrayInLocalStorageWishlist', JSON.stringify(temparray));
    };

    $('.stickything3').show(0).delay(2000).fadeOut(500);

  }


  render() {

    return(
      <div className="container-fluid" id="productitempage"  style={{marginTop: "50px"}}>
        <div className="row">
          <div className="col-md-5 " id="picturePP">
            <img src={this.state.item.images[0] } style={{marginTop: "30px"}} width="140"></img>
          </div>
            <div className="col-md-7 text-right" id="metaPP">
              <div className="row" style={{margin: '120px 40px 0 '}}>
                <div className="col-md-12">
                  <h1 style={{marginBottom: "50px", fontSize: '40px', color: 'rgb(61, 61, 61)'}}>{this.state.item.product.productName}</h1>
                </div>
                <div className="col-md-12">
                  <button  type="button" id="instock">Op voorraad</button>
                  <h3 style={{color: 'grey', fontWeight: "300", fontSize: "25px"}} >{"€" + this.state.item.product.productPrice/100 }</h3>
                </div>
                <div className="col-md-12">
                  <ul style={{color: 'grey', fontSize: "13px"}} >
                    {this.state.item.product.productSpecification}
                  </ul>
                </div>
                <div className="col-md-12" style={{marginTop: '20px'}}  >
                  <button  onClick={()=>{this.addToCartClicked(this.state.item)}}  style={{fontSize: '13px', fontWeight: "300", padding: "10px", marginRight: "10px"}} type="button" id="addtocartbtn" class="btn"><i class="fas fa-plus"></i> cart  <i className="fas fa-shopping-cart"></i></button>
                  <button onClick={()=>{this.addToWishlistClicked(this.state.item)}} style={{fontSize: '13px', fontWeight: "500", padding: "10px"}} type="button" id="addtowishlist" class="btn hidethisbtnwhennogli"><i class="fas fa-plus"></i> wenslijst <i className="fas fa-heart" ></i></button>
                </div>
              </div>
            </div>

        </div>
        <div className="row" style={{margin: ' 80px 80px 40px'}}>
          <div className="col-md-12">
            <h3 style={{color: 'rgb(61, 61, 61)', marginBottom: "40px"}} >Product beschrijving</h3>
          </div>
          <div className="col-md-12">
            <p style={{color: 'grey', fontSize: "13px"}} >{this.state.item.product.productDescription}</p>
          </div>
        </div>
        <div className=" stickything2 footer navbar-fixed-bottom content-center" style={{width: "20%"}}>
          <div className="container-fluid" >
            <div className="row">
              <div className="col-sm-12" style={{background: "black"}}>
                <p style={{margin: "20px 0px", color: "white"}}>Toegevoeg aan cart!</p>
              </div>
              <div className="col-sm-12" style={{background: "white"}}>
                <img style={{margin: "5px"}} src={this.state.item.images[0]}></img>
              </div>
            </div>
          </div>
        </div>
        <div className=" stickything3 footer navbar-fixed-bottom content-center" style={{width: "20%"}}>
          <div className="container-fluid" >
            <div className="row">
              <div className="col-sm-12" style={{background: "black"}}>
                <p style={{margin: "20px 0px", color: "white"}}>Toegevoeg aan wishlist!</p>
              </div>
              <div className="col-sm-12" style={{background: "white"}}>
                <img style={{margin: "5px"}} src={this.state.item.images[0]}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default ProductInfoPage;
