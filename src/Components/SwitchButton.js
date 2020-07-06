import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import switchIcon from '../Icons/SWITCH.png';

export const SwitchButton = props => {
    return (
        <Col xs={12} md={2} className="border">
                <Button className="btn-light border w-75"> <img src={switchIcon} className="w-50" onClick={props.updateConversionDirection} /> </Button>
            </Col>
    )
}