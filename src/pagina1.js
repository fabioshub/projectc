import React, { Component } from 'react';
import './index.css'
import Product from './product'
import { Link } from 'react-router-dom';



class Pagina1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: []
    }
  }

  componentDidMount() {
  fetch('http://localhost:5000/api/product/1/10')
  .then(results => {
    return results.json();
  }).then(data => {
    let title = data.products.map((pic) => {
                    return(
                      <div>
                    <Product name={pic.product.productName} price={pic.product.productPrice + ",-"} onClick={ () => {console.log("PEIS")} } image={pic.images[1]}/>
                    </div>
                )
    })
    this.setState({title: title})

  })
}

carousel() {

   let table = []

       for (let j = 0; j < 3; j++) {
         var randomnbr = Math.floor((Math.random() * 10) );
         table.push(<div className="col-sm-4">{this.state.title[randomnbr]}</div>)
       }

     return table;
}



  render() {
    return(
      <div id="pagina1">
      <div id="jumbotron" className="jumbotron jumbotron-fluid">
          <div className="container-fluid text-center">
          <h1 id="btb" className="display-4">Back to Bag.</h1>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-12">
            <h1 id="trending">Populair</h1>
          </div>
          <div className="col-sm-12">
<hr style={{border: "0px", height: "8px", width: "200px", backgroundColor: "rgb(69, 69, 69)"}}/>
          </div>

        </div>
      </div>

      <div className="container-fluid text-center" id="carousel">
        <div className="row">
          <Link to="/browse">{this.carousel()}</Link>
        </div>
      </div>

    </div>




    );
  }
}

export default Pagina1;
