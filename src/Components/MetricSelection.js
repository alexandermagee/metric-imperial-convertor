import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';


export class MetricSelection extends React.Component {
    render(){
        return (
            <Col xs={{span: 12}} md={{span: 5}}>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Kilometres</Button>
                <Button variant="secondary">Metres</Button>
                <Button variant="secondary">Centimetres</Button>
            </ButtonGroup>
            <div className="mt-2">
            <input type="text" name="userInputValue" disabled={false} />
            <label for="userInputValue">ml</label>
            </div>
        </Col>
        )
    }
}
