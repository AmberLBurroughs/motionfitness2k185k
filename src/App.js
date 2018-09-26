import React, { Component } from 'react';

import { ControlLabel, FormGroup, FormControl, Grid, Row, Col, Button } from 'react-bootstrap';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import axios from 'axios';

import {Tooltip} from 'react-lightweight-tooltip';

import 'react-accessible-accordion/dist/fancy-example.css';

import './App.css';

class App extends Component {
 constructor(props) {
    super(props)
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handInputClick = this.handInputClick.bind(this);

  }
  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    const test = re.test(email);
    if(!test){
      return false;
    }
    return true
  }

  handleSubmit(e){
    e.preventDefault();

    let first = document.querySelector("#firstName").value
    let last  = document.querySelector("#lastName").value
    let email      = document.querySelector("#email").value
    let contact    = document.querySelector("#contact").value
    let choice     = document.querySelector("#choice").value

    //console.log("test", this.validateEmail(email))
    if(this.validateEmail(email) === true){
      var formData = new FormData();
      formData.append('entry.1702211798', first)
      formData.append('entry.1128348519', last)
      formData.append('entry.736773742', email)
      formData.append('entry.733811361', contact)
      formData.append('entry.702291966', choice)
      
      //console.log(document.querySelector("#nameValue").value)

      const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdkazkmSlwGaT2BeP2pED82wh6DHmmvu0pvPGJXDQNTCO8Lyg/formResponse";
      // Content-Type: application/x-www-form-urlencoded
      axios.post(FORM_URL, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(conact=>{
        alert("message sent")
      })
      // this form submit will always error out but the message is sent
      .catch(err => {
        console.log(err);
        alert("message sent")
        document.querySelector("#firstName").value = ""
        document.querySelector("#lastName").value = ""
        document.querySelector("#email").value = ""
        document.querySelector("#contact").value = ""
        document.querySelector("#choice").value = ""

        document.querySelector("#email").classList.remove("error");

      })
    } else {
      document.querySelector("#email").classList.add("error");
      alert("please input your email address")
    }
  }

  handInputClick(e){
    e.target.classList.remove("error");
  }

  render() {
    const stylez = {
      content: {
        color: '#fff',
        backgroundColor: 'black'
      },
      tooltip: {
        backgroundColor: 'black',
        borderRadius: '0px',
        width: '350px',
        padding: '10px',
        textAlign: 'center',
        display: 'block'
      },
      arrow: {
        borderTop: 'solid black 5px',
      },
    };

    return (
      <div className="App">
       <div className="wrap">
        <img className="header lg" src="/img/HeaderImage2.png" alt="running"/>
         <img className="header sm" src="/img/HeaderImagesm1.png" alt="running"/>
        <div className="content">
          <div className="containers">
            <h3>06.02.2018</h3>

            <p>register by 05.12.18</p>
            <p>$28 per participant</p>
            <div className="tt">
              <Tooltip content='Please register under the Team Registration, 5k Teams 10+ Members and join our team "Motion Fitness".  Please contact Amber or Michael with any concerns. Looking forward to seeing you there. Thank you!' styles={stylez}>
                <p>register at <a href="https://endurancecui.active.com/new/events/51876652/select-race?regnow=awe-regnow&_p=28233513169457325"> www.endurancecui.active.com</a>
                </p>
              </Tooltip>
            </div>
            <div className="tt">
              <Tooltip content="Don’t forget to let us know your shirt size" styles={stylez}>
                <Accordion>
                  <AccordionItem>
                    <AccordionItemTitle>
                      <p>click here for your free Motion fitness team shirt</p> <div className="accordion__arrows" role="presentation"></div>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <form>
                          <FormGroup>
                            <ControlLabel>FIRST NAME</ControlLabel>
                            <FormControl
                              id="firstName"
                              type="text"
                              placeholder="your first name"
                              

                            />
                          </FormGroup>

                          <FormGroup>
                            <ControlLabel>LAST NAME</ControlLabel>
                            <FormControl
                              id="lastName"
                              type="text"
                              placeholder="your last name"
                            />
                          </FormGroup>

                          <FormGroup>
                            <ControlLabel>EMAIL</ControlLabel>
                            <FormControl
                              id="email"
                              type="email"
                              placeholder="your email"
                              onChange={this.handInputClick}
                            />
                          </FormGroup>

                          <FormGroup>
                            <ControlLabel>PHONE NUMBER</ControlLabel>
                            <FormControl
                              id="contact"
                              type="text"
                              placeholder="your number (xxx-xxx-xxxx)"
                              onChange={this.handInputClick}
                            />
                          </FormGroup>

                          
                          <FormGroup >
                          <ControlLabel>SHIRT CHOICE</ControlLabel>
                            <FormControl id="choice" componentClass="select" placeholder="select">
                              <option >SELECT YOUR SHIRT</option>
                              <option value="WSmallTankTop">W Small Tank Top</option>
                              <option value="WMediumTankTop">W Medium Tank Top</option>
                              <option value="WLargeTankTop">W Large Tank Top</option>
                              <option value="WExtraLargeTankTop">W Extra Large Tank Top</option>
                              <option value="MSmallTeeShirt">M Small Tee Shirt</option>
                              <option value="MMediumTeeShirt">M Medium Tee Shirt</option>
                              <option value="MLargeTeeShirt">M Large Tee Shirt</option>
                              <option value="MExtraLargeTeeShirt">M Extra Large Tee Shirt</option>
                            </FormControl>
                          </FormGroup>
                          <Button className="emailCapBt" onClick={this.handleSubmit}>SUBMIT</Button>
                        </form>
                    </AccordionItemBody>
                  </AccordionItem>
                </Accordion>
              </Tooltip>
            </div>
            <div className="details">
              <h4>Contact your motion fitness enthusiasts with any questions</h4>
              <p>
                <span className="group">
                <a href="http://ambermcdonough.com">amber mcdonough</a>&nbsp;
                <a className="phone" href="tel:19495007510"> 949.500.7510</a>
                </span>
       
                <span className="span">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  
                <span className="group">
                <a href="http://michaeltsamoudakis.com">Michael Tsamoudakis</a>
                  &nbsp;
                <a className="phone" href="tel:17144013037"> 714.401.3037</a>
                </span>
              </p>
            </div>
          </div>
          <div className="icon-wrap">
            <Grid>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} className="logo">
               <img src="img/unnamed.png" alt=""/>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} className="logo">
                <img src="img/SGLogoo.png" alt=""/>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} className="logo">
                <img src="img/CBLogo.png" alt=""/>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={4} lg={4} className="logo">
                <img src="img/Blueray-Logo.png" alt=""/>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} className="logo">
                <img src="img/GBLogo.png" alt=""/>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className="logo">
                <img src="img/motion-logo.png" alt=""/>
              </Col>
            </Row>
            </Grid>
          </div>
        </div>
       </div>

      </div>
    );
  }
}

export default App;
