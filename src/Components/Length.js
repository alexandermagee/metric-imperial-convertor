import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import switchIcon from '../Icons/switch-arrows-button.png';
import {ImperialSelection} from './ImperialSelection';
import {MetricSelection} from './MetricSelection';
import {SwitchButton} from './SwitchButton';

const activeButton =  {
    backgroundColor: "goldenrod",
    color: "black"
}



export class Length extends React.Component {


    handleChange = e => {
        console.log('hc take: '+e.target.value)
        this.props.calculateConversion(e.target.value)
    }

    handleClick = e => {
        let clickedData = (e.target.value.split(','))
        console.log(clickedData[0],clickedData[1])
    }

    render(){
        return (
            <Row className="text-center align-items-center mainArea">
           <MetricSelection 
           metricUnit={this.props.metricUnit}
           metricValue={this.props.metricValue}
           handleChange={this.handleChange}
           handleClick={this.handleClick}
           conversionType={this.props.conversionType}
           activeButton={activeButton}
           />
            <SwitchButton 
            updateConversionDirection={this.props.updateConversionDirection}
            />
            <ImperialSelection 
            imperialUnit={this.props.imperialUnit}
            imperialValue={this.props.imperialValue}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            conversionType={this.props.conversionType}
            activeButton={activeButton}
            />
            </Row>
        )
    }
}


/*<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */