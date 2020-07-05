import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';


export class ImperialSelection extends React.Component {
    render(){
        return (
            <Col xs={{span: 12, order: 1}} md={{span: 5, order: 1}} className="border">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Miles</Button>
                    <Button variant="secondary">Yards</Button>
                    <Button variant="secondary">Feet</Button>
                    <Button variant="secondary">Inches</Button>
                </ButtonGroup>
                <div className="mt-2">
                <input type="text" name="userInputValue" disabled={false} />
                <label for="userInputValue">cm</label>
                </div>
            </Col>
        )
    }
}
