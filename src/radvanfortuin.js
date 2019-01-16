import React, { Component } from 'react';
import './radvanfortuin.css'
import { Link, Redirect } from 'react-router-dom';
import CartWLI from './cartwishlistitem';
import CountUp from 'react-countup';


import $ from 'jquery';


class Radvanfortuin extends Component {

  constructor(props){
    super(props);




    this.state = {
      cartList: [
                ],
      listViewList1: [],
      wishlisttocart: [100],
      random: 1,
      redirect: false
    }

  }

componentWillMount() {
    if (localStorage.getItem("auth_token")) {
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

        let acciconupdate = myJson[0].id;
        this.setState({accSymbol: acciconupdate})
        $("#wishlistbutton").show()
        $("#loguitbutton").show()


      });

      this.setState({random: Math.floor(Math.random() * 20) + 1})
    }}

    componentDidMount() {
      $(".counter").hide()
        $(".spinbutton").on("click", async () => {
          await $(".spinbutton").fadeOut("fast", async () => {
            await $(".counter").slideDown("slow")
          })



        })

    }



    endfunction() {
      window.alert("Gefeliciteerd! U heeft " + this.state.random + "% korting gewonnen!") ;
      localStorage.setItem("kortingcode", this.state.random)
      this.state.redirect = true


      if(localStorage.getItem("kortingbinder")) {
        let kortingbinder = JSON.parse(localStorage.getItem("kortingbinder"))
      kortingbinder.push({
        [localStorage.getItem("user_id")]: localStorage.getItem("kortingcode")
      })

      localStorage.setItem("kortingbinder", JSON.stringify(kortingbinder))
    } else {
      let kortingbinder = []
    kortingbinder.push({
      [localStorage.getItem("user_id")]: localStorage.getItem("kortingcode")
    })

    localStorage.setItem("kortingbinder", JSON.stringify(kortingbinder))
    }

    this.forceUpdate()
    window.location.reload()
    }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/pagina1"></Redirect>
    } else {
    return(
      <div id="paginaRad" style={{marginTop: "100px"}}>
        <div className="row text-center" style={{minHeight: "100px"}}>
          <div className="col-sm-12">

                <h1  style={{margin: '30px 0', fontWeight: "500", color: "rgba(71, 73, 88, 0.93)"}}>Korting winnen!</h1>
                <hr style={{border: "0px",
                  height: "15px",
                  width: "50px",
                  backgroundColor: "rgba(71, 73, 88, 0.93)"}} />
          </div>
        </div>

        <div className="container">
                              <CountUp
                      start={0}
                      end={this.state.random}
                      duration={5}
                      separator=" "
                      decimals={0}
                      decimal=","
                      suffix="%"
                      onEnd={() => this.endfunction()}
                      onStart={() => console.log('Started! 💨')}
                    >
                      {({ countUpRef, start }) => (
                        <div>
                          <span className="counter" style={{fontSize: "140px", color: "rgb(254, 198, 101)"}} ref={countUpRef} />
                          <button  style={{border: "none", background: "rgb(254, 198, 101)",color: "white", borderRadius: "5px", fontSize: "100px", padding: "20px 30px"}} className="spinbutton" onClick={start}>Spin voor korting!</button>
                        </div>
                      )}
                    </CountUp>

        </div>

      </div>
    )}
  }
}

export default Radvanfortuin;
