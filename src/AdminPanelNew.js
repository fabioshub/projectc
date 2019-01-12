import React, { Component } from 'react';
import './adminpanelnew.css';
import Product from './product'
import { Link } from 'react-router-dom';
import AdminStatsHolder from './adminstatitem';
import AdminUserHolder from './adminuseritem';
import HistoryItemHolder from './historyitem';
import OrderItemHolder from './orderitem';




import $ from 'jquery';
import Chart from 'chart.js'



class adminPanelNew extends Component {
  constructor(props){
    super(props);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    // this.chartBuilder = this.chartBuilder.bind(this);


    this.state = {
      cartList: [],
      cartList2: [],
      cartList3: [],
      cartList4: [],
      pagina: 1,
      hoeveelheid: 1,
      CategoryId: "",
      CategoryName: "",
      TypeId: "",
      BrandId: "",
      CollectionId: "",
      TypeName: "",
      BrandName: "",
      CollectionName: "",
      Stock: "",
      ProductName: "",
      ProductNumber: "",
      ProductEAN: "",
      ProductInfo: "",
      ProductDescription: "",
      ProductSpecification: "",
      ProductPrice: "",
      ProductColor: "",
    }
  }

  onChangeCategoryId = (e) => {
    this.setState({ CategoryId: e.target.value });
  }
  onChangeCategoryName = (e) => {
    this.setState({ CategoryName: e.target.value });
  }
  onChangeTypeId = (e) => {
    this.setState({ TypeId: e.target.value });
  }
  onChangeBrandId = (e) => {
    this.setState({ BrandId: e.target.value });
  }
  onChangeCollectionId = (e) => {
    this.setState({ CollectionId: e.target.value });
  }
  onChangeTypeName = (e) => {
    this.setState({ TypeName: e.target.value });
  }
  onChangeBrandName = (e) => {
    this.setState({ BrandName: e.target.value });
  }
  onChangeCollectionName = (e) => {
    this.setState({ CollectionName: e.target.value });
  }
  onChangeStock = (e) => {
    this.setState({ Stock: e.target.value });
  }
  onChangeProductName = (e) => {
    this.setState({ ProductName: e.target.value });
  }
  onChangeProductNumber = (e) => {
    this.setState({ ProductNumber: e.target.value });
  }
  onChangeProductEAN = (e) => {
    this.setState({ ProductEAN: e.target.value });
  }
  onChangeProductInfo = (e) => {
    this.setState({ ProductInfo: e.target.value });
  }
  onChangeProductDescription = (e) => {
    this.setState({ ProductDescription: e.target.value });
  }
  onChangeProductSpecification = (e) => {
    this.setState({ ProductSpecification: e.target.value });
  }
  onChangeProductPrice = (e) => {
    this.setState({ ProductPrice: e.target.value });
  }
  onChangeProductColor = (e) => {
    this.setState({ ProductColor: e.target.value });
  }

  componentWillMount() {
    window.scrollTo(0, 0)
    this.fetchUserData()
    this.fetchData()
  }

  componentDidMount() {
    // this.chartBuilder()
    $(".outofstockadmin").hide()
    $(".gebruikersadmin").hide()
    $(".bestellingensadmin").hide()
    $(".productenadmin").hide()
    $("#contact").hide()
    $( ".filter-col" ).hide();




  }

  fetchUserData() {
    let authstring = `Bearer ${localStorage.getItem("auth_token")}`
    //console.log(authstring)
    fetch("http://localhost:5000/api/user/user",{
      host: 'localhost',
      port: 5000,
      method: 'GET',
      type: 'application/json',
      headers:{
        'Authorization' : authstring},
      }).then(response => {
        return response.json();
      }).then(myJson => {
        //console.log(myJson)
        let name = myJson[0].firstName;
        this.setState({name: name})
        let lastname = myJson[0].lastName;
        this.setState({lastname: lastname})
        let birth = myJson[0].birthDate;
        this.setState({birth: birth})
        let email = myJson[0].emailAddress;
        this.setState({email: email})
        let tel = myJson[0].phoneNumber;
        this.setState({tel: tel})
        let gender = myJson[0].gender;
        this.setState({gender: gender})
      });

      fetch("http://localhost:5000/api/address/",{
        host: 'localhost',
        port: 5000,
        method: 'GET',
        type: 'application/json',
        headers:{
          'Authorization' : authstring},
        }).then(response => {
          return response.json();
        }).then(myJson => {
          //console.log(myJson)
          // let street = myJson[0].Street;
          this.setState({street: myJson.street})
          // let city = myJson[0].City;
          this.setState({city: myJson.city})
          // let zipcode = myJson[0].ZipCode;
          this.setState({zipcode: myJson.zipCode})
          // let housenumber  = myJson[0].HouseNumber;
          this.setState({housenumber: myJson.houseNumber})
        });

        fetch(`http://localhost:5000/api/product/stat1`,{
          host: 'localhost',
          port: 5000,
          method: 'GET',
          headers:{
            'Authorization' : authstring
          },
          agent: false
        })
        .then(results => {
          //console.log("RETRIEVED ITEMS SUCCES!")
          //console.log(results)
          return results.json();
        }).then(data => {
          //console.log(data)
          this.setState({totalPrice: data.totalPrice})
          let cartList = data.map((pic) => {
            //console.log(pic)
            return(
              <div>
                <AdminStatsHolder orderid={pic.id} orderdatum={pic.productNumber} methode={pic.productName} ></AdminStatsHolder>
              </div>
            )
            //console.log(cartList)
            //console.log(this.state.cartList)

          })
          this.setState({cartList: cartList})
          $(".spinner").fadeOut("fast");
          $(".browsegridder").fadeIn("fast");
        })

        fetch(`http://localhost:5000/api/product/stat4`,{
          host: 'localhost',
          port: 5000,
          method: 'GET',
          headers:{
            'Authorization' : authstring
          },
          agent: false
        })
        .then(results => {
          //console.log("RETRIEVED ITEMS SUCCES!")
          //console.log(results)
          return results.json();
        }).then(data => {
          //console.log(data)
          this.setState({totalPrice: data.totalPrice})
          let cartList2 = data.map((pic) => {
            //console.log(pic)
            return(
              <div>
                <AdminStatsHolder orderid={pic.id} orderdatum={pic.productNumber} methode={pic.productName} ></AdminStatsHolder>
              </div>
            )
          })
          this.setState({cartList2: cartList2})
          $(".spinner").fadeOut("fast");
          $(".browsegridder").fadeIn("fast");
          // //console.log("ITEM SET IN STATE")
        })

        fetch(`http://localhost:5000/api/product/stat2`,{
          host: 'localhost',
          port: 5000,
          method: 'GET',
          headers:{
            'Authorization' : authstring
          },
          agent: false
        })
        .then(results => {
          //console.log("RETRIEVED ITEMS SUCCES!")
          //console.log(results)
          return results.json();
        }).then(data => {
          //console.log(data)

          this.setState({aantalusers: data})

        })

        fetch(`http://localhost:5000/api/product/stat3`,{
          host: 'localhost',
          port: 5000,
          method: 'GET',
          headers:{
            'Authorization' : authstring
          },
          agent: false
        })
        .then(results => {
          //console.log("RETRIEVED ITEMS SUCCES!")
          //console.log(results)
          return results.json();
        }).then(data => {
          //console.log(data)

          this.setState({totalinkomen: data})

        })

      }


      async fetchData(pagina = this.state.pagina, hoeveelheid = this.state.hoeveelheid) {
        let authstring = `Bearer ${localStorage.getItem("auth_token")}`

        await fetch(`http://localhost:5000/api/admin/users/${pagina}/${hoeveelheid}`,{
          host: 'localhost',
          port: 5000,
          method: 'GET',
          headers:{
            'Authorization' : authstring
          },
          agent: false
        })
        .then(results => {
          //console.log("RETRIEVED ITEMS SUCCES!")
          //console.log(results)
          return results.json();
        }).then(data => {
          //console.log(data)
          this.setState({totalPrice: data.totalPrice})
          let cartList3 = data.users.map((pic) => {
            //console.log(pic)
            return(
              <div>
                <AdminUserHolder userid={pic.userId} userfirstname={pic.userFirstName} userlastname={pic.userLastName} useremail={pic.userEmail} usergender={pic.userGender} userbirth={pic.userBirth} userphone={pic.userPhone} userrole={pic.userRole} addressid={pic.addressId} addressstreet={pic.addressStreet} addresscity={pic.addressCity}
                  addressnumber={pic.addressNumber}
                  addresszip={pic.addressZip}></AdminUserHolder>
              </div>
            )
          })
          this.setState({cartList3: cartList3})
          $(".spinner").fadeOut("fast");
          $(".browsegridder").fadeIn("fast");
          //console.log(this.state.cartList3)

        })

        await fetch(`http://localhost:5000/api/admin/orders/1/1`,{
          host: 'localhost',
          port: 5000,
          // path: '/',
          method: 'GET',

          // rejectUnauthorized: false,
          // requestCert: true,
          // mode: "no-cors",
          headers:{
            // "Access-Control-Allow-Credentials" : true,
            'Authorization' : authstring
          },
            agent: false
          })
          .then(results => {
            console.log("RETRIEVED ITEMS SUCCES!")
            console.log(results)
            return results.json();
          }).then(data => {
            console.log(data)
            this.setState({totalPrice: data.totalPrice})
            let cartList4 = data.orders.map((pic) => {
              console.log(pic)
              // if(false) {
              //   this.state.cartList = [<div className="text-center"><div style={{fontSize: "20px", color: "rgba(71, 73, 88, 0.93)", fontWeight: "500"}}>Je verlanglijstje is leeg :(</div> <br/>
              //             <Link to="/browse"><button style={{fontSize: '17px', fontWeight: "300", padding: "10px", backgroundColor: "rgba(71, 73, 88, 0.93)", border: "none"}} type="button" id="addtocartbtn" class="btn">Let's get shoppin <i className="fas fa-shopping-cart"></i></button></Link></div>
              //             ]
              // } else {
              //
              //
              // }

              return(
                  <div>
                    <OrderItemHolder orderid={pic.orderId} orderdatum={pic.orderDate} methode={pic.orderPayment} status={pic.orderStatus} name={pic.productName} ID={pic.id} productSpecification={pic.productSpecification} price={"€" + pic.productPrice/100 } image={pic.Images} itemsInOrder={pic.itemsInOrder} adressStreet={pic.adressStreet} adressCity={pic.adressCity} adressHouseNumber={pic.adressHouseNumber} adressZipCode={pic.adressZipCode}></OrderItemHolder>
                  </div>
                )

              })


              this.setState({cartList4: cartList4})

            })

      }





      listView() {
        let listViewList = []
        for (let j = 0; j < this.state.cartList.length; j++) {
          // var randomnbr = Math.floor((Math.random() * 10) + 1);
          listViewList.push(<div className="col-xs-12  text-right" style={{padding: "0px", margin: "0px"}}>{this.state.cartList[j]}</div>)
        }

        //console.log(listViewList)
        this.state.listViewList1 = listViewList;

        return this.state.listViewList1;
      }

      listView2() {
        let listViewList = []
        for (let j = 0; j < this.state.cartList.length; j++) {
          // var randomnbr = Math.floor((Math.random() * 10) + 1);
          listViewList.push(<div className="col-xs-12  text-right" style={{padding: "0px", margin: "0px"}}>{this.state.cartList2[j]}</div>)
        }

        //console.log(listViewList)
        this.state.listViewList2 = listViewList;

        return this.state.listViewList2;
      }

      listView3() {
        let listViewList = []
        for (let j = 0; j < this.state.cartList.length; j++) {
          // var randomnbr = Math.floor((Math.random() * 10) + 1);
          listViewList.push(<div className="col-xs-6  text-right" style={{padding: "0px", margin: "0px"}}>{this.state.cartList3[j]}</div>)
        }

        //console.log(listViewList)
        this.state.listViewList3 = listViewList;

        return this.state.listViewList3;
      }

      listView4() {
        let listViewList = []
        for (let j = 0; j < this.state.cartList.length; j++) {
          // var randomnbr = Math.floor((Math.random() * 10) + 1);
          listViewList.push(<div className="col-xs-6  text-right" style={{padding: "0px", margin: "0px"}}>{this.state.cartList4[j]}</div>)
        }

        console.log(listViewList)
        this.state.listViewList4 = listViewList;

        return this.state.listViewList4;
      }

      goToPage(h) {
        this.state.pagina = h;
        window.scrollTo(0, 0);
        this.fetchUserData();
        this.fetchData();
        this.forceUpdate();
      }

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



//       chartBuilder() {
//         var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: this.state.chart1name,
//         datasets: [{
//             label: this.state.chart1name,
//             data: [1],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     },
//     responsive: true
// });
//       }

async postnewinfo() {
  //console.log($("#valueid").val())
  // console.log($("#valuekeyselect").val())
  //console.log($("#valuenew").val())

  let useridb = $("#valueid").val()
  let vksobject = $("#valuekeyselect").val()
  let valuenew = $("#valuenew").val()

  var putobject = { [vksobject] : valuenew}
  let authstring = `Bearer ${localStorage.getItem("auth_token")}`

console.log(putobject)


  await fetch(`http://localhost:5000/api/admin/userid=${useridb}`, {
    method: 'PUT',
    body: JSON.stringify(putobject),
    type: 'application/json',
    headers: {
      "Content-Type" : 'application/json',
      'Authorization' : authstring
    },
  }).then(function(response) {
    //console.log(response)
  })

  this.forceUpdate();
  window.location.reload();


}

postnewinfo2() {
  //console.log($("#valueid").val())
  // console.log($("#valuekeyselect").val())
  //console.log($("#valuenew").val())

  let useridb = $("#valueid2").val()
  let vksobject = $("#valuekeyselect2").val()
  let valuenew = $("#valuenew2").val()

  var putobject = { [vksobject] : valuenew}
  let authstring = `Bearer ${localStorage.getItem("auth_token")}`

console.log(putobject)


  fetch(`http://localhost:5000/api/product/${useridb}`, {
    method: 'PUT',
    body: JSON.stringify(putobject),
    type: 'application/json',
    headers: {
      "Content-Type" : 'application/json',
      'Authorization' : authstring
    },
  }).then(function(response) {
    //console.log(response)
  })

  // this.forceUpdate();
  // window.location.reload();


}

postnewinfo3() {
  //console.log($("#valueid").val())
  // console.log($("#valuekeyselect").val())
  //console.log($("#valuenew").val())

  let useridb = $("#valueid3").val()
  let vksobject = $("#valuekeyselect2").val()
  let valuenew = $("#valuenew2").val()

  var putobject = { [vksobject] : valuenew}
  let authstring = `Bearer ${localStorage.getItem("auth_token")}`

console.log(putobject)


  fetch(`http://localhost:5000/api/product/${useridb}`, {
    method: 'DELETE',
    // body: JSON.stringify(putobject),
    // type: 'application/json',
    headers: {
      // "Content-Type" : 'application/json',
      'Authorization' : authstring
    },
  }).then(function(response) {
    //console.log(response)
  })

  // this.forceUpdate();
  // window.location.reload();


}

handlePostNewItem = (e) => {

  e.preventDefault()

  let postobject = {
    "ProductName": this.state.ProductName,
     "ProductInfo": this.state.ProductInfo,
     "ProductDescription": this.state.ProductDescription,
     "ProductSpecification": this.state.ProductSpecification,
      "ProductPrice": this.state.ProductPrice,
      "ProductEAN": this.state.ProductEAN,
      "Stock": this.state.Stock,
    "ProductColor": this.state.ProductColor,
    "ProductNumber": this.state.ProductNumber,
    "CategoryId": this.state.CategoryId,
      "TypeName": this.state.TypeName,
      "TypeId": this.state.TypeId,

      "CollectionName": this.state.CollectionName,
      "BrandName": this.state.BrandName,
     }

    console.log(postobject)
  let authstring = `Bearer ${localStorage.getItem("auth_token")}`

  fetch('http://localhost:5000/api/product/create', {
    method: 'POST',
    body: JSON.stringify(postobject),
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : authstring},

    })
  }



      render() {
        return(
          <div className="container text-right" style={{marginTop: "100px"}}  >
            <div className="row text-right">
              <div className="col-sm-4">
              </div>
              <div className=" stickything4 footer navbar-fixed-bottom content-center" style={{width: "20%"}}>
                <div className="container-fluid" >
                      <ul  style={{
                          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)"}} className="list-group filterfloat text-left">
                          <li onClick={()=>{$(".gebruikersadmin").toggle();  $( ".filter-col" ).show(); }} style={{cursor: "pointer",borderRadius: '0px'}} className="list-group-item" style={{"fontWeight":"600"}}>Gebruikers</li>
                          <li onClick={()=>{$(".bestellingensadmin").toggle();  $( ".filter-col" ).show(); }} className="list-group-item filter-CATEGORIEN" style={{"fontWeight":"600"}}>Bestellingen</li>
                          <li onClick={()=>{$(".productenadmin").toggle();  $( ".filter-col" ).show(); }} className="list-group-item filter-BRANDS" style={{"fontWeight":"600"}}>Producten</li>
                          <li onClick={()=>{$(".outofstockadmin").toggle();  $( ".filter-col" ).show(); }} className="list-group-item filter-COLOR" style={{"fontWeight":"600"}}>Gegevens statistieken</li>
                        </ul>
                </div>
              </div>
              <div className="col-sm-8 text-center productenadmin">
                <form onSubmit={this.handlePostNewItem} >
                    <div class="form-group">
                      <input type="text" class="form-control hiddenvaltrigger" placeholder="Naam" onChange={this.onChangeProductName} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control hiddenvaltrigger" placeholder="EAN-code" onChange={this.onChangeProductEAN} required/>
                    </div>
                    <div class="hiddenval">
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Nummer" onChange={this.onChangeProductNumber} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Info" onChange={this.onChangeProductInfo} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Beschrijving" onChange={this.onChangeProductDescription} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Specificatie" onChange={this.onChangeProductSpecification} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Prijs" onChange={this.onChangeProductPrice} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Kleur" onChange={this.onChangeProductColor} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="voorraad" onChange={this.onChangeStock} required/>
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Type id" onChange={this.onChangeTypeId} />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Type naam" onChange={this.onChangeTypeName} />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Categorie id" onChange={this.onChangeCategoryId} />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Merk naam" onChange={this.onChangeBrandName} />
                    </div>

                    <div class="form-group">
                      <input type="text" class="form-control " placeholder="Collectie naam" onChange={this.onChangeCollectionName} />
                    </div>
                    </div>

                      <button type="submit" value="register" name="submit" className="btn btn-success btn-block">Nieuw item toevoegen</button>
                  </form>
                  <form className="navbar-form hidden-xs text-right productensadmin" style={{margin: "0", padding: "0", width: "100%"}}>
                    <div className="form-group" id="search" >
                      <input type="text" className="form-control border " style={{width: "100%"}} id="valueid3" placeholder="Delete product met ID "/>
                    </div>
                    <button id="searchsubmitbutton" type="button" onClick={()=>{this.state.pagina = 1; this.postnewinfo3();}} className="btn btn-default">DELETE</button>
                  </form>
                  <form className="navbar-form hidden-xs text-right productensadmin" style={{margin: "0", padding: "0", width: "100%"}}>
                    <div className="form-group" id="value" >
                      <input type="text" className="form-control border " style={{width: "100%"}} id="valueid2" placeholder="PRODUCTID"/>
                    </div><br/>
                  <select name="valuekey" id="valuekeyselect2">
                  <option value="ProductName">Naam</option>
                  <option value="ProductEAN">EAN-code</option>
                  <option value="ProductNumber">Productnummer</option>
                  <option value="ProductInfo">Info</option>
                  <option value="ProductDescription">Beschrijving</option>
                  <option value="ProductSpecification">Specifieke</option>
                  <option value="ProductPrice">Prijs</option>
                  <option value="ProductColor">Kleur</option>
                  <option value="_TypeId">Type ID</option>
                  <option value="CategoryId">Categorie</option>
                  <option value="CollectionId">Collectie</option>
                  <option value="BrandId">Merk</option>

                </select>
                <br/>
                    <div className="form-group" id="search" >
                      <input type="text" className="form-control border " style={{width: "100%"}} id="valuenew2" placeholder="Nieuwe waarde "/>
                    </div>
                    <button id="searchsubmitbutton" type="button" onClick={()=>{this.state.pagina = 1; this.postnewinfo2();}} className="btn btn-default">Update</button>
                  </form>
              </div>

              <div className="col-sm-8 text-center bestellingensadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">Bestellingen </h3>
                  {this.listView4()}
              </div>
              <div className="col-sm-8 text-center gebruikersadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">Gebruikers </h3>
                  <form className="navbar-form hidden-xs text-right " style={{margin: "0", padding: "0", width: "100%"}}>
                    <div className="form-group" id="value" >
                      <input type="text" className="form-control border " style={{width: "100%"}} id="valueid" placeholder="USERID"/>
                    </div>
                  <select name="valuekey" id="valuekeyselect">
                  <option value="FirstName">Voornaam</option>
                  <option value="LastName">Achternaam</option>
                  <option value="Email">Email</option>
                  <option value="Role">Rol</option>
                  <option value="Gender">Gender</option>
                  <option value="BirthDate">Geboortedatum</option>
                  <option value="PhoneNumber">Telefoonnummer</option>
                  <option value="Street">Straat</option>
                  <option value="City">Stad</option>
                  <option value="HouseNumber">Huisnummer</option>
                  <option value="ZipCode">Postcode</option>
                </select>

                    <div className="form-group" id="search" >
                      <input type="text" className="form-control border " style={{width: "100%"}} id="valuenew" placeholder="Nieuwe waarde "/>
                    </div>
                    <button id="searchsubmitbutton" type="button" onClick={()=>{this.state.pagina = 1; this.postnewinfo();}} className="btn btn-default">Update</button>
                  </form>
                  {this.listView3()}

              </div>

              <div className="col-sm-12 text-left outofstockadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">Overige info</h3>

                    Totaal aantal gebruikers: {this.state.aantalusers} <br/>
                    Totale inkomen: {this.state.totalinkomen}

              </div>
              <div className="col-sm-4 outofstockadmin"></div>

              <div className="col-sm-4 outofstockadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">Out of stock</h3>

                    {this.listView()}
              </div>
              <div className="col-sm-4 outofstockadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">top 10 duurste items</h3>

                    {this.listView2()}
              </div>
            </div>
            </div>
          );
        };
      }

      export default adminPanelNew;
