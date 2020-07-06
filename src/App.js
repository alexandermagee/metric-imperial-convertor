import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    console.log(system,unit)
    this.setState({
      [system] : unit
    })
    console.log(this.state.metricUnit, this.state.imperialUnit)
  }

  updateConversionDirection = () => {
    if(this.state.conversionType === "ImperialToMetric") {
    this.setState({
      conversionType: "MetricToImperial"
    })
  } else {
    this.setState({
      conversionType: "ImperialToMetric"
    })
  }
  console.log("New direction: " + this.state.conversionType)
  }

  calculateConversion = (inputValue) => {
    let convertedValue = convertUserInput(this.state.conversionType,this.state.imperialUnit,this.state.metricUnit,inputValue);
    if(this.state.conversionType === "MetricToImperial"){
      this.setState({
        metricValue: inputValue,
        imperialValue: convertedValue
      })
    } else {
      this.setState({
        metricValue: convertedValue,
        imperialValue: inputValue
      })
    }
    console.log(this.state.imperialValue, this.state.metricValue)

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

    </div>
  )
}
}

export default App;
