import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';


export class ImperialSelection extends React.Component {

    colOrder = () => {
        if(this.props.conversionType === "ImperialToMetric"){
            return 1
        } else {
            return 3
        }
    }

    inputDisabled = () => {
        if(this.props.conversionType === "MetricToImperial"){
            return true
        } else {
            return false
        }
    }


    render(){
        return (
            <Col xs={{span: 12, order: this.colOrder()}} lg={{span: 5, order: this.colOrder()}} className="my-1">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" size="lg" value={["imperialUnit","miles"]} onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "miles") ? this.props.activeButton : null}>Miles</Button>

                    <Button variant="secondary" size="lg" value={["imperialUnit","yards"]} onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "yards") ? this.props.activeButton : null}>Yards</Button>

                    <Button variant="secondary" size="lg" value={["imperialUnit","feet"]}  onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "feet") ? this.props.activeButton : null}>Feet</Button>

                    <Button variant="secondary" size="lg" value={["imperialUnit","inches"]}  onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "inches") ? this.props.activeButton : null}>Inches</Button>
                    
                </ButtonGroup>
                <div className="mt-2">
                <input type="text" name="userInputValue" disabled={this.inputDisabled()} className="userInputForm" value={this.props.imperialValue} onChange={this.props.handleChange} placeholder={(this.inputDisabled()) ? null : "Enter here"} />
                <label for="userInputValue"><small className="mx-2">{this.props.imperialUnit}</small></label>
                </div>
            </Col>
        )
    }
}
