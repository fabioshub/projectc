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

//   componentDidMount() {
//   fetch('http://localhost:5000/api/product/1/10')
//   .then(results => {
//     return results.json();
//   }).then(data => {
//     let title = data.products.map((pic) => {
//                     return(
//                       <div>
//                     </div>
//                 )
//     })
//     this.setState({title: title})
//
//   })
// }

carousel() {

   let table = []

       for (let j = 0; j < 3; j++) {
         var randomnbr = Math.floor((Math.random() * 10) );
         table.push(<div className="col-sm-4"><Product name="Harde koffer Salsa Air 75 cm blauw" price="429,-" onClick={ () => {console.log("PEIS")} } image="https://www.vanostassenenkoffers.nl/images/collection/middle/36671.508-3.jpg"/>

         </div>)
       }

     return table;
}



  render() {
    return(
      <div id="pagina1">
      <div id="jumbotron" className="jumbotron jumbotron-fluid">
          <div className="container-fluid text-center">
          <h1 id="btb" style={{color:"rgb(65, 65, 65)"}} className="display-4">Back <span  >to</span> Bag.</h1>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-12">
            <h1  style={{margin: '30px 0', fontWeight: "600", color: "rgba(71, 73, 88, 0.93)"}}>Willekeurige items</h1>
            <hr style={{border: "0px",
              height: "15px",
              width: "50px",
              backgroundColor: "rgba(71, 73, 88, 0.93)"}} />
          </div>

        </div>
      </div>

      <div className="container-fluid text-center" id="carousel">
        <div className="row">
          <Link to="/browse">
            <div className="col-sm-4">
            <Product name="Harde koffer Salsa Air 75 cm blauw" price="429,-" onClick={ () => {console.log("PEIS")} } image="https://www.vanostassenenkoffers.nl/images/collection/middle/36671.508-3.jpg"/>
          </div>
          <div className="col-sm-4">
          <Product name="Handbagage Topas 55 cm zilver" price="689,-" onClick={ () => {console.log("PEIS")} } image="https://www.vanostassenenkoffers.nl/images/collection/middle/36702.403-6.jpg"/>
        </div>
        <div className="col-sm-4">
        <Product name="Crossbodytas Soho L zwart" price="69.95" onClick={ () => {console.log("PEIS")} } image="https://www.vanostassenenkoffers.nl/images/collection/middle/36795.400-2.jpg"/>
      </div>

        </Link>
        <Link to="/browse"><button style={{margin: "50px 0 0 0", fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgb(254, 198, 101);", border: "none", fontWeight: "600", fontSize: "1.4rem", padding: "15px 10px"}} type="button" id="addtocartbtn" class="btn">Browse</button></Link>
        </div>
      </div>

    </div>




    );
  }
}

export default Pagina1;
