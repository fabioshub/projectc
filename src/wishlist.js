import React, { Component } from 'react';
import './browse.css'
import Product from './product'
import { Link } from 'react-router-dom';
import CartWLI from './cartwishlistitem';

class Wishlist extends Component {

  constructor(props){
    super(props);

    this.listView = this.listView.bind(this);
    this.deleteFromWishlist = this.deleteFromWishlist.bind(this);


    this.state = {
      cartList: [<div className="text-center"><div style={{fontSize: "20px"}}>Je verlanglijstje is leeg :(</div> <br/>
                <Link to="/browse"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgb(45, 82, 163)"}} type="button" id="addtocartbtn" class="btn">Breng me naar de tassen! <i className="fas fa-shopping-cart"></i></button></Link></div>
                ],
      listViewList1: []
    }

  }

  componentWillMount() {



  }

  componentDidMount() {

    window.scrollTo(0, 0)


    if(localStorage.getItem('arrayInLocalStorageWishlist') && localStorage.getItem('arrayInLocalStorageWishlist').length > 2) {


    let arrayInLocalStorageWishlist = JSON.parse(localStorage.getItem('arrayInLocalStorageWishlist'))
    let cartList = arrayInLocalStorageWishlist.map((pic) => {
      this.state.totalPrice  = this.state.totalPrice + pic.id;
      // this.setState({totalPrice: totalPrice});
      return(
        <div>
          <CartWLI name={pic.title} price={"€" + pic.id + ",-"} image={"http://image.tmdb.org/t/p/w185/" + pic.poster_path}></CartWLI>
            <button onClick={()=>this.deleteFromWishlist(pic.title)} style={{fontSize: '17px', fontWeight: "300", padding: "10px"}} type="button" id="addtowishlist" class="btn">Delete from wishlist <i style={{color: "rgb(237, 86, 65)"}} className="far fa-times-circle"></i> </button>
              <hr style={{border: "0px", height: "1px", backgroundColor: "lightgrey"}} />
        </div>
      )
    })
    this.setState({cartList: cartList})

  } else{
    this.state.cartList = [<div className="text-center" style={{fontSize: "20px"}}>Your wishlist is empty :(</div>]
  }

  }

  deleteFromWishlist(h) {

    let arrayInLocalStorageWishlist = JSON.parse(localStorage.getItem('arrayInLocalStorageWishlist'));
    let tempDeleteArray = [];


      for (let b = 0; b < arrayInLocalStorageWishlist.length; b++) {
        const crrentItem = arrayInLocalStorageWishlist[b]
        if(arrayInLocalStorageWishlist[b].title !== h) {
          tempDeleteArray.push(crrentItem)
        } else {
          console.log("discard " + arrayInLocalStorageWishlist[b].title)
        }

      }
      localStorage.setItem('arrayInLocalStorageWishlist', JSON.stringify(tempDeleteArray));
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
      <div id="paginaCart" style={{marginTop: "130px"}}>
        <div className="row text-center" style={{minHeight: "100px"}}>
          <div className="col-sm-12">
            <h1  style={{margin: '50px 0'}}><i className="fas fa-heart" style={{color: "red"}}></i></h1>
            <hr style={{border: "0px",
              height: "1px",
              width: "400px",
              backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"}} />
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
