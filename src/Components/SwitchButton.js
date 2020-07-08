import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import switchIcon from '../Icons/SWITCH.png';

export const SwitchButton = props => {
    return (
        <Col xs={{span: 12, order: 2}} lg={{span: 2, order: 2}} className="">
                <Button className="btn-light border rounded-circle switchButton"> <img src={switchIcon} className="w-100" onClick={props.updateConversionDirection} /> </Button>
            </Col>
    )
}