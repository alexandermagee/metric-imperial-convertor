import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';

export class MetricSelection extends React.Component {
    render(){
        return (
            <Col xs={{span: 12}} md={{span: 5}}>
            <ButtonGroup aria-label="Basic example">

                <Button variant="secondary" value={["metricUnit","kilometres"]} onClick={this.props.handleClick} 
                    style={(this.props.metricUnit === "kilometres") ? this.props.activeButton : null}>Kilometres</Button>

                <Button variant="secondary" value={["metricUnit","metres"]} onClick={this.props.handleClick}
                    style={(this.props.metricUnit === "metres") ? this.props.activeButton : null}>Metres</Button>

                <Button variant="secondary" value={["metricUnit","centimetres"]} onClick={this.props.handleClick}
                    style={(this.props.metricUnit === "centimetres") ? this.props.activeButton : null}>Centimetres</Button>

            </ButtonGroup>
            <div className="mt-2">
            <input type="text" name="userInputValue" disabled={false} />
            <label for="userInputValue">{this.props.metricUnit}</label>
            </div>
        </Col>
        )
    }
}
