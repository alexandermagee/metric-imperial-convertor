import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';

import {convertUserInput} from './HelperFunctions';

import {Length} from './Components/Length';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imperialUnit : "miles",
      metricUnit: "kilometres",
      imperialValue: "",
      metricValue: "",
      conversionType: "ImperialToMetric"
    }
  }

  updateRequestedUnits = (system,unit) => {
    this.setState({
      [system] : unit,
      metricValue: "",
      imperialValue: ""
    })
  }

  updateConversionDirection = () => {
    if(this.state.conversionType === "ImperialToMetric") {
    this.setState({
      conversionType: "MetricToImperial",
      metricValue: "",
      imperialValue: ""
    })
  } else {
    this.setState({
      conversionType: "ImperialToMetric",
      metricValue: "",
      imperialValue: ""
    })
  }
  }

  calculateConversion = (inputValue) => {
    let convertedValue = convertUserInput(this.state.conversionType,this.state.imperialUnit,this.state.metricUnit,inputValue);
    if(this.state.conversionType === "MetricToImperial"){
      console.log('converted value is:' +convertedValue)
      this.setState({
        metricValue: inputValue,
        imperialValue: convertedValue
      })
    } else {
      console.log('converted value is:' +convertedValue)
      this.setState({
        metricValue: convertedValue,
        imperialValue: inputValue
      })
    }

  }

  render() { 
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    <Row className="text-center my-5">
      <h1 className="mx-auto">{
      (this.state.conversionType === "ImperialToMetric") ? 
      <span className="capitalise">{(`${this.state.imperialUnit} to ${this.state.metricUnit}`)}</span> :
      <span className="capitalise">{(`${this.state.metricUnit} to ${this.state.imperialUnit}`)}</span> 
      }</h1>
    </Row>

    <Length 
      imperialUnit={this.state.imperialUnit}
      imperialValue={this.state.imperialValue}
      metricUnit={this.state.metricUnit}
      metricValue={this.state.metricValue}
      conversionType={this.state.conversionType}
      updateRequestedUnits={this.updateRequestedUnits}
      updateConversionDirection={this.updateConversionDirection}
      calculateConversion={this.calculateConversion}
    />

    <p>{this.state.conversionType}</p>
    <p>{this.state.imperialValue}</p>
    <p>{this.state.imperialUnit}</p>
    <p>{this.state.metricValue}</p>
    <p>{this.state.metricUnit}</p>

    </div>
  )
}
}

export default App;
