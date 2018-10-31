import React, { Component } from 'react';

class ProductInfoPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: props.location.state.pic
    }
  }

  componentDidMount() {
  }


  render() {

    return(
      <div className="container-fluid" id="productitempage"  style={{marginTop: "140px"}}>
        <div className="row">
          <div className="col-md-5 text-center" id="picturePP">
            <img src={"http://image.tmdb.org/t/p/w185/" + this.state.item.poster_path } style={{marginTop: "30px"}} width="300px"></img>
          </div>
            <div className="col-md-7" id="metaPP">
              <div className="row" style={{margin: '0 40px'}}>
                <div className="col-md-12">
                  <h1 style={{marginBottom: "50px", fontSize: '50px', color: 'rgb(61, 61, 61)'}}>{this.state.item.title}</h1>
                </div>
                <div className="col-md-6">
                  <ul style={{color: 'grey'}} >
                    <li>Spec 1</li>
                    <li>Spec 2</li>
                    <li>Spec 3</li>
                    <li>Spec 4</li>
                    <li>Spec 5</li>
                    <li>Spec 6</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <button  type="button" id="instock">In stock</button>
                  <h3 style={{color: 'grey'}} >{this.state.item.id + ',-'}</h3>
                </div>
                <div className="col-md-12" style={{marginTop: '20px'}}  >
                  <button type="button" id="addtocartbtn" class="btn">Add to cart </button>
                  <button type="button" id="addtowishlist" class="btn">Add to Wishlist </button>
                </div>
              </div>
            </div>

        </div>
        <div className="row" style={{margin: ' 40px 80px'}}>
          <div className="col-md-12">
            <h3 style={{color: 'rgb(61, 61, 61)'}} >Product description</h3>
          </div>
          <div className="col-md-12">
            <p style={{color: 'grey'}} >{this.state.item.overview}</p>
          </div>
        </div>
      </div>
    );
  };
}

export default ProductInfoPage;
