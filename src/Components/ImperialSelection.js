import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';


export class ImperialSelection extends React.Component {

    /*handleChange = e => {
        this.props.calculateConversion(e.target.value)
    } */

    render(){
        return (
            <Col xs={{span: 12, order: 1}} md={{span: 5, order: 1}} className="border">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" value="miles" onClick={this.props.handleClick}>Miles</Button>
                    <Button variant="secondary" value="yards" onClick={this.props.handleClick}>Yards</Button>
                    <Button variant="secondary" value="feet" onClick={this.props.handleClick}>Feet</Button>
                    <Button variant="secondary" value="inches" onClick={this.props.handleClick}>Inches</Button>
                </ButtonGroup>
                <div className="mt-2">
                <input type="text" name="userInputValue" disabled={false} value={this.props.imperialValue} onChange={this.props.handleChange} />
                <label for="userInputValue">{this.props.imperialUnit}</label>
                </div>
            </Col>
        )
    }
}
