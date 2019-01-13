import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import $ from 'jquery';
import './product.css'


class ProductInfoPage extends Component {
  constructor(props){
    super(props);


    this.state = {
      item: props.location.state.pic,
      QuantityProduct: 1,
      currentimage: 0
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    console.log(this.state.item)
    $(".stickything2").hide()
    $(".stickything3").hide()
    // $("#addtocartbtn").hide()

    if(!localStorage.getItem("auth_token")) {
      $(".hidethisbtnwhennogli").hide()
    }

  }


  addToCartClicked(pic) {

    var quanquan = $("#quantity").val()
    this.state.QuantityProduct = quanquan;

    if(localStorage.getItem("auth_token")) {

      // console.log(pic.product.id)
      let authstring = `Bearer ${localStorage.getItem("auth_token")}`
      // console.log(authstring)
      let cartitem = {"ProductId" : `${pic.product.id}`, "CartQuantity": `${this.state.QuantityProduct}`}
      console.log(cartitem)
      // console.log(JSON.stringify(cartitem))
      fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        body: JSON.stringify(cartitem),
        type: 'application/json',
        headers: {
          "Content-Type" : 'application/json',
          'Authorization' : authstring
        },
      })
    } else {
      if(localStorage.getItem('arrayInLocalStorage')) {



        let temparray = JSON.parse(localStorage.getItem('arrayInLocalStorage'))
        let temparrayQuantity = JSON.parse(localStorage.getItem('arrayInLocalStorageQuantity'))

        var foundproduct = false;
        var productindex = 0;
        for(var i = 0; i < temparray.length; i++) {
            if (temparray[i].product.id == pic.product.id) {
                foundproduct = true;
                productindex = i;
                break;
            }
        }

        if (!foundproduct) {
          temparrayQuantity.push(this.state.QuantityProduct)
          temparray.push(pic)
          console.log(temparray)
          // this.setState({arrayInLocalStorage: temparray})
          localStorage.setItem('arrayInLocalStorage', JSON.stringify(temparray));
          localStorage.setItem('arrayInLocalStorageQuantity', JSON.stringify(temparrayQuantity));
        } else {
          console.log(localStorage.getItem("arrayInLocalStorage"))
          temparrayQuantity[productindex] = parseInt(temparrayQuantity[productindex]) + parseInt(this.state.QuantityProduct);
          localStorage.setItem('arrayInLocalStorageQuantity', JSON.stringify(temparrayQuantity));

        }

        console.log(temparray)


      }
      else {
        let temparray = [];
        let QuantityArray = [];
        QuantityArray.push(this.state.QuantityProduct)
        temparray.push(pic)
        console.log(temparray)
        // this.setState({arrayInLocalStorage: temparray})
        localStorage.setItem('arrayInLocalStorageQuantity', JSON.stringify(QuantityArray));
        localStorage.setItem('arrayInLocalStorage', JSON.stringify(temparray));
      };
    }



    $('.stickything2').show(0).delay(2000).fadeOut(500);

  }

  addToWishlistClicked(pic) {



    if(localStorage.getItem("auth_token")) {

      // console.log(pic.product.id)
      let authstring = `Bearer ${localStorage.getItem("auth_token")}`
      // console.log(authstring)
      let cartitem = {"ProductId" : `${pic.product.id}`}
      // console.log(JSON.stringify(cartitem))
      fetch('http://localhost:5000/api/wishlist', {
        method: 'POST',
        body: JSON.stringify(cartitem),
        type: 'application/json',
        headers: {
          "Content-Type" : 'application/json',
          'Authorization' : authstring
        },
      })
    } else {


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

  }

    $('.stickything3').show(0).delay(2000).fadeOut(500);

  }

  goToPage(h) {
    this.state.pagina = h;
    window.scrollTo(0, 0);
    this.forceUpdate();
  }

  quanchange() {
    console.log("...")
  }

  // backupcode2() {
  //   let i = {
  //     <div className="row">
  //       <div className="col-md-12 text-left">
  //         <h1 style={{fontSize: '40px', color: 'rgb(61, 61, 61)'}}>{this.state.item.product.productName}</h1>
  //       </div>
  //       <div className="col-md-5 text-right" id="picturePP">
  //         <img src={this.state.item.images[0] } style={{ width: "400px"}} ></img>
  //       </div>
  //         <div className="col-md-7 text-left" id="metaPP">
  //           <div className="row" style={{margin: '  0 '}}>
  //
  //             <div className="col-md-12" style={{margin: '30px 0'}}>
  //               <h3 style={{color: 'grey', fontWeight: "300", fontSize: "40px"}} >{"€" + this.state.item.product.productPrice/100 }</h3>
  //
  //               <button  type="button" id="instock">Op voorraad</button>
  //             </div>
  //             <div className="col-md-12">
  //               <ul style={{color: 'grey', fontSize: "13px"}} >
  //                 {this.state.item.product.productSpecification}
  //               </ul>
  //               <input id="quantity" className="searchinputpi" value="1"></input>
  //               <button className="searchsubmitbuttonpi" onClick={()=>{ if (  $("#quantity").val() > 1 )  { $("#quantity").val($("#quantity").val() - 1)}}}> - </button><button className="searchsubmitbuttonpi" onClick={()=>{ $("#quantity").val( parseInt($("#quantity").val()) + 1) }}> + </button><br/>
  //             </div>
  //             <div className="col-md-12" style={{marginTop: '20px'}}  >
  //               <button onClick={()=>{this.addToWishlistClicked(this.state.item)}} style={{fontSize: '13px', fontWeight: "500", padding: "10px", marginRight: "10px"}} type="button" id="addtowishlist" class="btn hidethisbtnwhennogli"><i class="fas fa-plus"></i> wenslijst <i className="fas fa-heart" ></i></button>
  //               <button  onClick={()=>{this.addToCartClicked(this.state.item)}}  style={{fontSize: '13px', fontWeight: "300", padding: "10px"}} type="button" id="addtocartbtn" class="btn"><i class="fas fa-plus"></i> cart  <i className="fas fa-shopping-cart"></i></button>
  //             </div>
  //           </div>
  //         </div>
  //
  //     </div>
  //     <div className="row" style={{margin: ' 80px 80px 40px'}}>
  //       <div className="col-md-12 text-left">
  //         <h3 style={{color: 'rgb(61, 61, 61)', marginBottom: "40px"}} >Product beschrijving</h3>
  //       </div>
  //       <div className="col-md-12 text-left">
  //         <p style={{color: 'grey', fontSize: "13px"}} >{this.state.item.product.productDescription}</p>
  //       </div>
  //     </div>
  //
  //   }
  // }



stockHelper()  {
  if (this.state.item.stock[0] == 0) {

    return (<button  type="button" id="instock" style={{color: "rgb(215, 72, 72)", borderColor: "rgb(215, 72, 72)"}}>Niet op voorraad</button>)
  } else {
    return  (<button  type="button" id="instock" style={{}}>Op voorraad</button>)

  }
}

imageHelper()  {
  let images = this.state.item.images.map((image, index) => {
    console.log(index)
    return (<img className="smallimages" src={image} onClick={()=>{this.setState({currentimage: index}); this.forceUpdate(); console.log(this.state.currentimage)}} style={{ width: "100px", margin: "0 20px", cursor: "pointer"}} ></img>)
;
  })
  return images;
}


  render() {

    return(
      <div className="container" id="productitempage"  style={{marginTop: "100px"}}>

        <div className="row">

          <div className="col-sm-6 text-center">
            <h3 style={{color: 'rgb(57, 57, 57)', fontWeight: "700", fontSize: "30px"}} className="text-left">{this.state.item.product.productName}</h3>
            <hr/>
            <img src={this.state.item.images[this.state.currentimage] } style={{ width: "400px", marginBottom: "20px"}} ></img>
            <br/>
              {this.imageHelper()}

            </div>
          <div className="col-sm-6 text-left">
            <h3 style={{color: 'rgb(46, 46, 46)', fontWeight: "500", fontSize: "30px"}} >{"€" + this.state.item.product.productPrice/100 }</h3>
            <hr/>
            {this.stockHelper()}
            <br/>
            <p style={{color: "rgb(57, 57, 57)", margin: "30px 0"}}>
              {ReactHtmlParser(this.state.item.product.productSpecification)}
            </p>
            <input id="quantity" className="searchinputpi" value="1"></input>
            <button className="searchsubmitbuttonpi" onClick={()=>{ if (  $("#quantity").val() > 1 )  { $("#quantity").val($("#quantity").val() - 1)}}}> - </button><button className="searchsubmitbuttonpi" onClick={()=>{ $("#quantity").val( parseInt($("#quantity").val()) + 1) }}> + </button><br/>
            <div style={{margin: "30px 0"}}>
            <button onClick={()=>{this.addToWishlistClicked(this.state.item)}} style={{fontSize: '13px', fontWeight: "500", padding: "10px", marginRight: "10px"}} type="button" id="addtowishlist" class="btn hidethisbtnwhennogli"><i class="fas fa-plus"></i> <i className="fas fa-heart" ></i></button>
            <button  onClick={()=>{this.addToCartClicked(this.state.item)}}  style={{fontSize: '13px', fontWeight: "300", padding: "10px"}} type="button" id="addtocartbtn" class="btn addtocartpip"><i class="fas fa-plus"></i> <i className="fas fa-shopping-cart"></i></button>
            <hr style={{margin: "30px 0"}}/>
              <h3 style={{color: 'rgb(61, 61, 61)', marginBottom: "16px", fontSize: "30px"}} >Product beschrijving</h3>
              <p style={{color: 'grey', fontSize: "13px"}} >{ReactHtmlParser(this.state.item.product.productDescription)}</p>
            </div>
          </div>
        </div>
        <div className=" stickything2 footer navbar-fixed-bottom content-center" style={{width: "20%"}}>
          <div className="container-fluid" >
            <div className="row">
              <div className="col-sm-12" style={{background: "black"}}>
                <p style={{margin: "20px 0px", color: "white"}}>Toegevoegd aan cart!</p>
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
                <p style={{margin: "20px 0px", color: "white"}}>Toegevoegd aan wishlist!</p>
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
