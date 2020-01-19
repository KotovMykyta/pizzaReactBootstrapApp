import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';

function Header(){
    return(
        <Row>
            <Col className="d-flex align-items-center">
                <div>
                    <h2>
                        +38(063)887-03-00
                    </h2>
                </div>
            </Col>
            <Col>
            <Image src= {require('../img/logopizza.jpg')} />
            </Col>
            <Col className="d-flex align-items-center flex-row-reverse">
                <div>
                    <h1>24/7</h1>
                </div>
            </Col>
        </Row>
    );
}

export default Header;