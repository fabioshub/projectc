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
      arrayInLocalStorageQuantity: [],
      arrayInLocalStorageWishlist: [],
      item: [],
      pagina: 1,
      hoeveelheid: 9,
      pagesintotal: 100,
      filters: [],
      filterarraylist: []
      // token: "string"


    }
  }

  componentWillMount() {
    window.scrollTo(0, 0)
    if (localStorage.getItem('pagina')) {
      let crrntpage = JSON.parse(localStorage.getItem('pagina'));
      console.log(crrntpage)
      this.setState({pagina: crrntpage})
    }
    if (localStorage.getItem('filters')) {
      let crrntpage = JSON.parse(localStorage.getItem('filters'));
      console.log(crrntpage)
      this.setState({filters: crrntpage})
    }
    if (localStorage.getItem('filterarraylist')) {
      let crrntpage = JSON.parse(localStorage.getItem('filterarraylist'));
      console.log(crrntpage)
      this.setState({filterarraylist: crrntpage})
    }


  }

  componentDidMount() {
    $(".filter-cat").hide()
    $(".filter-bra").hide()
    $(".filter-col").hide()
    $(".filter-typ").hide()
    $("#filterobject").css("pointer-events", "none");

    $(".stickything2").hide()
    $(".stickything3").hide()
    $(".pagination2").hide()

    if(!localStorage.getItem("auth_token")) {
      $(".hidethisbtnwhennogli").hide()
    }





    let crrntfilters = JSON.parse(localStorage.getItem('filters'));

  if(crrntfilters !== null){
    if (crrntfilters.length > 0 ) {
      this.fetchDataFilter()
      console.log("HIJ WERKT")

    } else {
      this.fetchData()
    }
  } else {
    this.fetchData()
  }
    // if (localStorage.getItem('filterarraylist')) {
    //   let crrntpage = JSON.parse(localStorage.getItem('filterarraylist'));
    //   console.log(crrntpage)
    //   this.setState({filterarraylist: crrntpage})
    // }

    this.loaderFunction()


    console.log(this.state.pagina)

  }

  componentWillUnmount() {
    // localStorage.setItem('filters', JSON.stringify(this.state.filters));
    localStorage.setItem('pagina', JSON.stringify(this.state.pagina));
    localStorage.setItem('filters', JSON.stringify(this.state.filters));
    localStorage.setItem('filterarraylist', JSON.stringify(this.state.filterarraylist));


  }



  async fetchData(pagina = this.state.pagina, hoeveelheid = this.state.hoeveelheid) {
    this.setState({filterarraylist: []})
    console.log(this.state.pagina)
    $(".spinner").show()
    $(".pagination2").hide()

    $(".browsegridder").hide()

    localStorage.removeItem('pagina');
    localStorage.removeItem('filters');
    localStorage.removeItem('filterarraylist');

    await fetch(`http://localhost:5000/api/product/${pagina}/${hoeveelheid}`,{
      host: 'localhost',
      port: 5000,
      path: '/',
      method: 'GET',
      type: 'application/json',

      rejectUnauthorized: false,
      requestCert: true,
      mode: "no-cors",
      headers:{
        "Access-Control-Allow-Credentials" : true,
      "Access-Control-Allow-Origin": true},
        agent: false
      }).then(results => {
        console.log("RETRIEVED ITEMS SUCCES!")
        return results.json();
      }).then(data => {
        console.log(data)
        let startvalue = 0
        this.setState({pagesintotal: data.totalpages})
        let items = data.products.map((pic) => {
          startvalue = startvalue + 1



          return(
            <div>
              <div style={{
                  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)", margin: "5px"}}>
                  <Link style={{padding: "0"}} to={{ pathname: '/productinfopage', state: { pic: pic } }}> <Product desc={pic.product.productDescription} name={pic.product.productName} price={"€" +Math.round(pic.product.productPrice / 100 * 100) /100} image={pic.images[0]}/></Link>
                  <div  style={{marginRight: "10px",paddingBottom: "10px"}} >

                    <button type="button"  onClick={()=>{this.addToWishlistClicked(pic)}} id="addtowishlist" className="btn hidethisbtnwhennogli " style={{border: "none"}} ><i style={{fontSize: "20px", color: "rgba(255, 86, 75, 0.933333);"}} className="fas fa-heart"></i></button>
                    <button type="button" style={{marginLeft: "10px"}} onClick={()=>{this.addToCartClicked(pic); }} id="addtocartbtn" class={"btn " +"addtocartbutton"+startvalue} ><i className="fas fa-shopping-cart"></i></button>
                  </div>
                </div>
              </div>
            )
          })

          // if (this.state.filters.length == 0) {

            this.setState({items: items})
            this.setState({itemsClean: items})

          // }




          // $(".turnedon").hide()

          $("#searchinput").val("")
          $(".spinner").fadeOut("fast");
          $(".browsegridder").fadeIn("fast");
          $("#filterobject").css("pointer-events", "auto");          $(".pagination2").fadeIn("fast");


          if(!localStorage.getItem("auth_token")) {
            $(".hidethisbtnwhennogli").hide()
          }
          // console.log("ITEM SET IN STATE")
          this.state.filters = []
        }).catch(error => {console.log(error)})

      }



      fetchDataFilter(filterkeyword, pagina = this.state.pagina, hoeveelheid = this.state.hoeveelheid) {


        $(".spinner").show()
        $(".pagination2").hide()

        $(".browsegridder").hide()

        if (this.state.filters.includes(filterkeyword)) {
          this.state.filters = $.grep(this.state.filters, value => {

                  return value != filterkeyword;
              });
        } else {
          this.state.filters.unshift(filterkeyword)

        }

        if (this.state.filters.length > 1) {
                      var i,
                  len = this.state.filters.length,
                  out = [],
                  obj = {};

              for (i = 0; i < len; i++) {
                obj[this.state.filters[i]] = 0;
              }
              for (i in obj) {
                out.push(i);
              }
              this.state.filters = out;
        }


        let filterstring = ""

        this.state.filters.map(filter => {
          // console.log()
          if (filterstring == "") {
            filterstring = filterstring + "?" +filter;
          } else {
            filterstring = filterstring + "&" +filter;

          }

        })
        // console.log(filterstring)

        if (this.state.filters.length > 0) {
        fetch(`http://localhost:5000/api/product/filter/${pagina}/${hoeveelheid}${filterstring}`,{
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
          // console.log("RETRIEVED ITEMS SUCCES!FILTERED")
          return results.json();
        }).then(data => {
          let temparray = []
          let filtershit = data.filtersList.map((filters) => {
            temparray.push(Object.values(filters[0])[0])
          })
          this.setState({filterarraylist: temparray})


          this.setState({pagesintotal: data.page.totalpages})
          let items = data.page.products.map((pic) => {

            return(
              <div>
                <div style={{
                    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)", margin: "5px"}}>
                    <Link style={{padding: "0"}} to={{ pathname: '/productinfopage', state: { pic: pic } }}> <Product desc={pic.product.productDescription} name={pic.product.productName} price={"€" +Math.round(pic.product.productPrice * 100) / 100/100 } image={pic.images[0]}/></Link>
                    <div  style={{marginRight: "10px",paddingBottom: "10px"}} >
                      <button type="button"  onClick={()=>{this.addToWishlistClicked(pic)}} id="addtowishlist" class="btn hidethisbtnwhennogli" style={{border: "none"}} ><i style={{fontSize: "20px", color: "rgba(255, 86, 75, 0.933333);"}} className="fas fa-heart" ></i></button>
                      <button type="button" style={{marginLeft: "10px"}} onClick={()=>{this.addToCartClicked(pic)}} id="addtocartbtn" class="btn " ><i className="fas fa-shopping-cart"></i></button>
                    </div>
                  </div>
                </div>
              )
            })


            this.setState({items: items})
            this.setState({itemsClean: items})

            $(".spinner").fadeOut("fast");
            $(".browsegridder").fadeIn("fast");
            $(".pagination2").fadeIn("fast");
            $("#filterobject").css("pointer-events", "auto");

            if(!localStorage.getItem("auth_token")) {
              $(".hidethisbtnwhennogli").hide()
            }

           $("#searchinput").val("")
            this.forceUpdate()
          })} else {
            $("#filterobject").css("pointer-events", "none");
            this.fetchData()
          }
        }


        highlightSelected() {


          // if this.state.filters contains
        }

        browseGrid() {
          let table = []
          for (let j = 0; j < this.state.hoeveelheid; j++) {
            // var randomnbr = Math.floor((Math.random() * 10) + 1);
            table.push(<div className="col-xs-12 col-sm-6 col-md-4" style={{padding: "0px", margin: "0px", height: "230px"}}>{this.state.items[j]}</div>)
          }
          console.log("browseGRID LOADED")
          return table;
        }

        goToPage(h) {
          this.state.pagina = h;
          window.scrollTo(0, 0);
          if (this.state.filters.length > 0 && $("#searchinput").val() == false) {
            this.fetchDataFilter()
          } else if (this.state.filters.length <= 0 && $("#searchinput").val() == false){
            this.fetchData()
          } if ($("#searchinput").val()) {
            this.formSubmitting()
          }
          this.forceUpdate();
        }


        addToCartClicked(pic) {



          if(localStorage.getItem("auth_token")) {


            console.log(pic.product.id)

            // console.log(pic.product.id)
            let authstring = `Bearer ${localStorage.getItem("auth_token")}`
            // console.log(authstring)
            let cartitem = {"ProductId" : `${pic.product.id}`, "CartQuantity": "1"}
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
          }

          else {
            //if user is not logged in
            if(localStorage.getItem('arrayInLocalStorage')) {
              let temparray = JSON.parse(localStorage.getItem('arrayInLocalStorage'))
              let quantityarray = JSON.parse(localStorage.getItem('arrayInLocalStorageQuantity'))

              console.log(temparray[0])
              console.log(pic)

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
                temparray.push(pic)
                quantityarray.push(1)
                localStorage.setItem('arrayInLocalStorageQuantity', JSON.stringify(quantityarray));
                localStorage.setItem('arrayInLocalStorage', JSON.stringify(temparray));
              } else {
                quantityarray[productindex] = quantityarray[productindex] + 1;
                localStorage.setItem('arrayInLocalStorageQuantity', JSON.stringify(quantityarray));

              }

              // console.log(temparray)
              // this.setState({arrayInLocalStorage: temparray})
            }
            else {
              let temparray = this.state.arrayInLocalStorage;
              let quantityarray = this.state.arrayInLocalStorageQuantity;

              temparray.push(pic)
              quantityarray.push(1)
              // this.setState({arrayInLocalStorage: temparray})
              localStorage.setItem('arrayInLocalStorageQuantity', JSON.stringify(quantityarray));
              localStorage.setItem('arrayInLocalStorage', JSON.stringify(temparray));
            };

          }

          $('.stickything2').show(0).delay(2000).fadeOut(500);
          console.log(pic.images[0])
          this.setState({lastitemaddtocart: pic.images[0]})


        }
        //TODO


        addToWishlistClicked(pic) {

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

          $('.stickything3').show(0).delay(2000).fadeOut(500);
          console.log(pic.images[0])
          this.setState({lastitemaddtowishtlist: pic.images[0]})

        }
        // TODO

        pagination()  {
          let navigatorArray = []
          let totalPages = Math.ceil(100);

          navigatorArray.push(<li className="active" style={{cursor: "pointer"}}><a style={{color: 'white'}} onClick={() => {this.goToPage(this.state.pagina )}} >{this.state.pagina }</a></li>)
          if(this.state.pagina >= 2) {
            navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {this.goToPage(this.state.pagina - 1 )}} >{this.state.pagina - 1 }</a></li>)
            if(this.state.pagina >= 3) {
              navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {this.goToPage(this.state.pagina - 2 )}} >{this.state.pagina - 2 }</a></li>)
            }
          }
          if(this.state.pagina <= this.state.pagesintotal -1) {
            navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {this.goToPage(this.state.pagina + 1 )}} >{this.state.pagina + 1 }</a></li>)
            if(this.state.pagina <= this.state.pagesintotal -2) {
              navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {this.goToPage(this.state.pagina + 2)}} >{this.state.pagina + 2 }</a></li>)
            }
          }
          navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {if(this.state.pagina <= 1) {} else {this.goToPage( this.state.pagina - 1)}}} >&laquo;</a></li>)
          navigatorArray.unshift(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {this.goToPage(1)}} >Eerste</a></li>)
          navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {this.goToPage(this.state.pagina + 1)}} >&raquo;</a></li>)
          navigatorArray.push(<li style={{cursor: "pointer"}}><a style={{color: 'rgba(71, 73, 88, 0.93)'}} onClick={() => {this.goToPage(this.state.pagesintotal)}} >Laatste</a></li>)

          return navigatorArray;
        }


        filtersOnline()  {
          let filtersArray = []

          this.state.filters.forEach(filter => {
            filtersArray.push(<li>{filter}</li>)
          })

          return filtersArray;
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
          // console.log(filteredArray.length)

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
          // console.log(this.state.initialPageAmount)

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

        formSubmitting(e, pagina = this.state.pagina, hoeveelheid = this.state.hoeveelheid) {
          var searchvalue = $("#searchinput").val()
          // e.preventDefault()

          $(".spinner").show()
          $(".pagination2").hide()

          $(".browsegridder").hide()
          if(!localStorage.getItem("auth_token")) {
            $(".hidethisbtnwhennogli").hide()
          }

          if ($("#searchinput").val() == "") {
            this.fetchData()

          } else {

            fetch(`http://localhost:5000/api/product/search/${pagina}/${hoeveelheid}/${searchvalue}`,{
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
              console.log("RETRIEVED ITEMS SUCCES!SEARCHED")
              return results.json();
            }).then(data => {
              this.setState({pagesintotal: data.totalpages})
              // console.log(data.totalpages)


              let items = data.products.map((pic) => {
                return(
                  <div>
                    <div style={{
                        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)", margin: "5px"}}>
                        <Link style={{padding: "0"}} to={{ pathname: '/productinfopage', state: { pic: pic } }}> <Product desc={pic.product.productDescription} name={pic.product.productName} price={"€" +Math.round(Math.round(pic.product.productPrice * 100) / 100 * 100) / 100 /100 } image={pic.images[0]}/></Link>
                        <div  style={{marginRight: "10px",paddingBottom: "10px"}} >
                          <button type="button"  onClick={()=>{this.addToWishlistClicked(pic)}} id="addtowishlist" class="btn" >  <i className="fas fa-heart" ></i></button>
                          <button type="button" style={{marginLeft: "10px"}} onClick={()=>{this.addToCartClicked(pic)}} id="addtocartbtn" class="btn" ><i className="fas fa-shopping-cart"></i></button>
                        </div>
                      </div>
                    </div>
                  )
                })

                if(!localStorage.getItem("auth_token")) {
                  $(".hidethisbtnwhennogli").hide()
                }

                this.setState({items: items})
                this.setState({itemsClean: items})

                $(".spinner").fadeOut("fast");
                $(".browsegridder").fadeIn("fast");
                $(".pagination2").fadeIn("fast");
                $("#filterobject").css("pointer-events", "auto");



                this.state.filterarraylist = []
                this.state.filters = []

                this.forceUpdate()


              })
          }


        }

        printFilters() {
          let filtersOnlinestring = ""
          this.state.filterarraylist.map((filteroption) => {
            filtersOnlinestring = filteroption  + "  " +  filtersOnlinestring
          })
          // console.log(filtersOnlinestring)
          return (filtersOnlinestring);
        }



        render() {
          return(
            <div id="paginaBrowse" style={{marginTop: "100px"}}>
              <div className="container-fluid ">
                <div className="row " style={{height: "100px"}}>
                  <div className="col-sm-12 ">
                    <h1  style={{margin: '30px 0', fontWeight: "500", color: "rgba(71, 73, 88, 0.93)"}}>Tassen browsen</h1>
                    <hr style={{border: "0px",
                      height: "15px",
                      width: "50px",
                      backgroundColor: "rgba(71, 73, 88, 0.93)"}} />
                      {this.printFilters()}

                  </div>
                  <div className="col-sm-12 text-center" style={{}}>
                    <div className="col-sm-4 text-center">

                    </div>
                    <div className="col-sm-4 text-center">
                    <nav aria-label="Page navigation">
                      <ul className="pagination" id="pagination">
                        {this.pagination()}

                      </ul>
                    </nav>
                    </div>
                    <div className="col-sm-4" style={{height: "100%"}}>

                  </div>

                  </div>
                </div>
                <div className="container">
                  <div className="spinner"></div>
                </div>
                <div className="row  browsercontent" style={{height: "500px"}}>

                  <div className="col-sm-3 hidden-xs" style={{marginTop:"70px"}}>
                    <form className="navbar-form hidden-xs text-left superform" style={{margin: "0", padding: "0", width: "100%"}}>
                      <div className="form-group" id="search" >
                        <input type="text" className="form-control border " style={{width: "100%"}} id="searchinput" placeholder="Zoeken... "/>
                      </div>
                      <button id="searchsubmitbutton" type="button" onClick={(e)=>{this.state.pagina = 1; this.formSubmitting(e); if(!localStorage.getItem("auth_token")) {
                        $(".hidethisbtnwhennogli").hide()
                      };}} className="btn btn-default"><i className="fas fa-search"></i></button>
                    </form>


                    </div>
                    <div className="col-sm-9 text-right browsegridder" style={{}}>
                      {this.browseGrid()}
                    </div>
                    <div className="col-sm-12 text-center" style={{}}>
                      <nav aria-label="Page navigation">
                        <ul className="pagination pagination2" id="pagination">
                          {this.pagination()}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div id="filterobject">
                <div className=" stickything4 footer navbar-fixed-bottom content-center" style={{width: "20%"}}>
                  <div className="container-fluid" >
                        <ul  style={{
                            boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)"}} className="list-group filterfloat text-left">
                            <li onClick={() => {$("#searchinput").val("");  this.state.pagina = 1; $("#filterobject").css("pointer-events", "none"); ;this.fetchData();}} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item" style={{"fontWeight":"600", color: "rgb(254, 198, 101)", backgroundColor: "white"}}>Reset filters</li>
                            <li onClick={()=>{$( ".filter-CATEGORIEN" ).click(function() {$( ".filter-cat" ).toggle();});}} className="list-group-item filter-CATEGORIEN" style={{"fontWeight":"600"}}>Categorien</li>
                            <li onClick={()=>{$( ".filter-BRANDS" ).click(function() {$( ".filter-bra" ).toggle();});}} className="list-group-item filter-BRANDS" style={{"fontWeight":"600"}}>Merken</li>
                            <li onClick={()=>{$( ".filter-COLOR" ).click(function() {$( ".filter-col" ).toggle();});}} className="list-group-item filter-COLOR" style={{"fontWeight":"600"}}>Kleur</li>
                          </ul>
                  </div>
                </div>
                <div className=" stickything4 footer navbar-fixed-bottom content-center text-right" style={{width: "20%", maxHeight: "80vh"}}>
                  <div className="container-fluid" >
                    <span onClick={()=>{ $( ".filter-col" ).hide(); $( ".filter-bra" ).hide(); $( ".filter-cat" ).hide();}} style={{cursor: "pointer",borderRadius: '0px', border: "none"}} className="list-group-item text-left filter-cat filter-bra filter-col"><i style={{color: "rgb(254, 198, 101)", fontSize: "20px"}} className="far fa-times-circle"></i> </span>

                    <ul  style={{
                        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.1)", backgroundColor: "rgb(254, 198, 101)"}} className="list-group filterfloatfilters text-left">
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=1"); }} className="list-group-item filter-cat">Koffers</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=2"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-cat">Reistassen</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=3"); }} style={{cursor: "pointer"}} className="list-group-item filter-cat">Werktassen</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=4"); }} style={{cursor: "pointer"}} className="list-group-item filter-cat">Tassen</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=5"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-cat">Portemonnees</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=7"); }} style={{cursor: "pointer"}} className="list-group-item filter-cat">Rugzakken</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=8"); }} style={{cursor: "pointer"}} className="list-group-item filter-cat">Schooltassen</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("CategoryId=6 "); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-cat">Overig</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=1"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">dR Amsterdam</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=2"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-bra">Rimowa</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=3"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">Tumi</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=4"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">By lin</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=5"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-bra">Castelijn en Beerens</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=6"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">Brics</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=7"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">Leonhard Heyden</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=8 "); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-bra">Dakine</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=9"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">Eastpak</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=10"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-bra">Gabol</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=11"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">Senz</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=12"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra"> Kipling</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=13"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-bra">The Bridge</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=14"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">My Lady</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=15"); }} style={{cursor: "pointer"}} className="list-group-item filter-bra">Knirps</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("BrandId=16"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-bra">Samsonite</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=goud"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Goud</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=oranje"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-col">Oranje</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=geel"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Geel</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=taupe"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Taupe</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=grijs"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-col">Grijs</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=rose"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Rose</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=cognac"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Cognac</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=rood"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-col">Rood</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=print"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Print</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=bruin"); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item filter-col">Bruin</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=brons"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Brons</li>
                        <li onClick={() => {$("#searchinput").val("");this.state.pagina = 1; this.fetchDataFilter("ProductColor=beige"); }} style={{cursor: "pointer"}} className="list-group-item filter-col">Beige</li>
                      </ul>
                  </div>
                </div>
              </div>
                <div className=" stickything2 footer navbar-fixed-bottom content-center" style={{width: "20%"}}>
                  <div className="container-fluid" >
                    <div className="row">
                      <div className="col-sm-12" style={{background: "rgb(254, 198, 101)"}}>
                        <p style={{margin: "20px 0px", color: "white"}}>Toegevoegd aan cart!</p>
                      </div>
                      <div className="col-sm-12" style={{background: "white"}}>
                        <img style={{margin: "5px"}} src={this.state.lastitemaddtocart}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" stickything3 footer navbar-fixed-bottom content-center" style={{width: "20%"}}>
                  <div className="container-fluid" >
                    <div className="row">
                      <div className="col-sm-12" style={{background: "rgb(254, 198, 101)"}}>
                        <p style={{margin: "20px 0px", color: "white"}}>Toegevoegd aan wishlist!</p>
                      </div>
                      <div className="col-sm-12" style={{background: "white"}}>
                        <img style={{margin: "5px"}} src={this.state.lastitemaddtowishtlist}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }


        }

        export default Browse;
