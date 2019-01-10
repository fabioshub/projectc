import React, { Component } from 'react';
import './adminpanelnew.css';
import Product from './product'
import { Link } from 'react-router-dom';
import AdminStatsHolder from './adminstatitem';
import $ from 'jquery';
import Chart from 'chart.js'



class adminPanelNew extends Component {
  constructor(props){
    super(props);
    this.fetchUserData = this.fetchUserData.bind(this);
    // this.chartBuilder = this.chartBuilder.bind(this);


    this.state = {
      cartList: [],
      cartList2: [],
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0)
    this.fetchUserData()
  }

  componentDidMount() {
    // this.chartBuilder()
    $(".outofstockadmin").hide()
    $(".inkomstenadmin").hide()


  }

  fetchUserData() {
    let authstring = `Bearer ${localStorage.getItem("auth_token")}`
    console.log(authstring)
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
        console.log(myJson)
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
          console.log(myJson)
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
          console.log("RETRIEVED ITEMS SUCCES!")
          console.log(results)
          return results.json();
        }).then(data => {
          console.log(data)
          this.setState({totalPrice: data.totalPrice})
          let cartList = data.map((pic) => {
            console.log(pic)
            return(
              <div>
                <AdminStatsHolder orderid={pic.id} orderdatum={pic.productNumber} methode={pic.productName} ></AdminStatsHolder>
              </div>
            )
            console.log(cartList)
            console.log(this.state.cartList)

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
          console.log("RETRIEVED ITEMS SUCCES!")
          console.log(results)
          return results.json();
        }).then(data => {
          console.log(data)
          this.setState({totalPrice: data.totalPrice})
          let cartList2 = data.map((pic) => {
            console.log(pic)



            return(
              <div>
                <AdminStatsHolder orderid={pic.id} orderdatum={pic.productNumber} methode={pic.productName} ></AdminStatsHolder>
              </div>
            )


          })



          this.setState({cartList2: cartList2})



          $(".spinner").fadeOut("fast");
          $(".browsegridder").fadeIn("fast");
          // console.log("ITEM SET IN STATE")
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
          console.log("RETRIEVED ITEMS SUCCES!")
          console.log(results)
          return results.json();
        }).then(data => {
          console.log(data)

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
          console.log("RETRIEVED ITEMS SUCCES!")
          console.log(results)
          return results.json();
        }).then(data => {
          console.log(data)

          this.setState({totalinkomen: data})

        })

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

      listView2() {
        let listViewList = []
        for (let j = 0; j < this.state.cartList.length; j++) {
          // var randomnbr = Math.floor((Math.random() * 10) + 1);
          listViewList.push(<div className="col-xs-12  text-right" style={{padding: "0px", margin: "0px"}}>{this.state.cartList2[j]}</div>)
        }

        console.log(listViewList)
        this.state.listViewList2 = listViewList;

        return this.state.listViewList2;
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


      render() {
        return(
          <div className="container" style={{marginTop: "130px"}}  >
            <div className="row">
              <div className="col-sm-2">
                <ul  style={{
                    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.04), 0 9px 26px 0 rgba(0, 0, 0, 0.04)"}} className="list-group adminfilter text-left">
                    <li className="list-group-item filter-CATEGORIEN" style={{"fontWeight":"300", "color":"rgba(71, 73, 88, 0.93)"}}>Gebruikers</li>
                      <li  className="list-group-item filter-CATEGORIEN" style={{"fontWeight":"300", "color":"rgba(71, 73, 88, 0.93)"}}>Bestellingen</li>

                    <li className="list-group-item filter-BRANDS" style={{"fontWeight":"300", "color":"rgba(71, 73, 88, 0.93)"}}>Producten</li>

                    <li className="list-group-item filter-COLOR" onClick={()=>{$(".outofstockadmin").toggle()}} style={{"fontWeight":"300", "color":"rgba(71, 73, 88, 0.93)"}}>Statistiekeninformatie</li>




                  </ul>
              </div>
              <div className="col-sm-10 text-left outofstockadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">Overige info</h3>

                    Totaal aantal gebruikers: {this.state.aantalusers} <br/>
                    Totale inkomen: {this.state.totalinkomen}

              </div>
              <div className="col-sm-5 outofstockadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">Out of stock</h3>

                    {this.listView()}
              </div>
              <div className="col-sm-5 outofstockadmin">
                <h3 style={{margin: "40px 0", color: "rgba(71, 73, 88, 0.93)"}} className="text-left">top 10 duurste items</h3>

                    {this.listView2()}
              </div>
            </div>
            </div>
          );
        };
      }

      export default adminPanelNew;
