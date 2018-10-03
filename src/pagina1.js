import React, { Component } from 'react';
import './index.css'
import Product from './product'



class Pagina1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: []
    }
  }

  componentDidMount() {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=dbb619d6178c8ecdfc83dc6e69d51737&language=en-US&page=1')
  .then(results => {
    return results.json();
  }).then(data => {
    let title = data.results.map((pic) => {
                    return(
                      <div>
                    <Product name={pic.title} price={pic.id + ",-"} image={"http://image.tmdb.org/t/p/w185/" + pic.poster_path }/>
                    </div>
                )
    })
    this.setState({title: title})

  })
}

carousel() {

   let table = []

       for (let j = 0; j < 3; j++) {
         var randomnbr = Math.floor((Math.random() * 10) + 1);
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
            <h1 id="trending">Trending</h1>
          </div>
          <div className="col-sm-12">
            <hr style={{border: "0px",
                        height: "1px",
                        width: "400px",
    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"}} />
          </div>

        </div>
      </div>

      <div className="container-fluid text-center" id="carousel">
        <div className="row">
          {this.carousel()}
        </div>
      </div>

    </div>




    );
  }
}

export default Pagina1;
