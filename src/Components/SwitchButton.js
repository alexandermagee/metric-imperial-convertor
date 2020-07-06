import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import switchIcon from '../Icons/SWITCH.png';

export const SwitchButton = props => {
    return (
        <Col xs={{span: 12, order: 2}} md={{span: 2, order: 2}}>
                <Button className="btn-light border w-75"> <img src={switchIcon} className="w-50" onClick={props.updateConversionDirection} /> </Button>
            </Col>
    )
}