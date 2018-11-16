import React, { Component } from 'react';

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
      let temparray = [];
      temparray.push(pic)
      console.log(temparray)
      // this.setState({arrayInLocalStorage: temparray})
      localStorage.setItem('arrayInLocalStorageWishlist', JSON.stringify(temparray));
    }
    window.alert("Item added to Wishlist!");

  }


  render() {

    return(
      <div className="container-fluid" id="productitempage"  style={{marginTop: "80px"}}>
        <div className="row">
          <div className="col-md-5 text-center" id="picturePP">
            <img src={this.state.item.images[0] } style={{marginTop: "30px"}} width="300px"></img>
          </div>
            <div className="col-md-7" id="metaPP">
              <div className="row" style={{margin: '0 40px'}}>
                <div className="col-md-12">
                  <h1 style={{marginBottom: "50px", fontSize: '60px', color: 'rgb(61, 61, 61)'}}>{this.state.item.product.productName}</h1>
                </div>
                <div className="col-md-6">
                  <ul style={{color: 'grey'}} >
                    {this.state.item.product.productSpecification}
                  </ul>
                </div>
                <div className="col-md-6">
                  <button  type="button" id="instock">Op voorraad</button>
                  <h3 style={{color: 'grey', fontWeight: "300"}} >{"€" + this.state.item.product.productPrice + ',-'}</h3>
                </div>
                <div className="col-md-12" style={{marginTop: '20px'}}  >
                  <button  onClick={()=>{this.addToCartClicked(this.state.item)}}  style={{fontSize: '17px', fontWeight: "300", padding: "10px", marginRight: "10px"}} type="button" id="addtocartbtn" class="btn"><i class="fas fa-plus"></i> cart  <i className="fas fa-shopping-cart"></i></button>
                  <button onClick={()=>{this.addToWishlistClicked(this.state.item)}} style={{fontSize: '17px', fontWeight: "500", padding: "10px"}} type="button" id="addtowishlist" class="btn"><i class="fas fa-plus"></i> wenslijst <i className="fas fa-heart" ></i></button>
                </div>
              </div>
            </div>

        </div>
        <div className="row" style={{margin: ' 40px 80px'}}>
          <div className="col-md-12">
            <h3 style={{color: 'rgb(61, 61, 61)'}} >Product beschrijving</h3>
          </div>
          <div className="col-md-12">
            <p style={{color: 'grey'}} >{this.state.item.product.productDescription}</p>
          </div>
        </div>
      </div>
    );
  };
}

export default ProductInfoPage;
