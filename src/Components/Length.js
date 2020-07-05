import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import switchIcon from '../Icons/switch-arrows-button.png';
import {ImperialSelection} from './ImperialSelection';
import {MetricSelection} from './MetricSelection';
import {SwitchButton} from './SwitchButton';



export class Length extends React.Component {
    render(){
        return (
            <Row className="text-center my-5">
           <MetricSelection />
            <SwitchButton />
            <ImperialSelection />
            </Row>
        )
    }
}


/*<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */