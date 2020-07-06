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
                    <Button variant="secondary" value={["imperialUnit","miles"]} onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "miles") ? this.props.activeButton : null}>Miles</Button>

                    <Button variant="secondary" value={["imperialUnit","yards"]} onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "yards") ? this.props.activeButton : null}>Yards</Button>

                    <Button variant="secondary" value={["imperialUnit","feet"]}  onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "feet") ? this.props.activeButton : null}>Feet</Button>

                    <Button variant="secondary" value={["imperialUnit","inches"]}  onClick={this.props.handleClick}
                    style={(this.props.imperialUnit === "inches") ? this.props.activeButton : null}>Inches</Button>
                    
                </ButtonGroup>
                <div className="mt-2">
                <input type="text" name="userInputValue" disabled={false} value={this.props.imperialValue} onChange={this.props.handleChange} />
                <label for="userInputValue">{this.props.imperialUnit}</label>
                </div>
            </Col>
        )
    }
}
