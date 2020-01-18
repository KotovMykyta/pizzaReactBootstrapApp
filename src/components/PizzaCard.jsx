import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Button, Badge} from 'react-bootstrap';

function PizzaCard () {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {require('../img/Peperoni.jpg')} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">Peperoni</Card.Title>
            <Badge pill variant="warning" style={{ fontSize: 16 }}>₴ 81</Badge>
          </div>
          <Card.Text className="text-center">
            Тесто, соус «Неаполитано», лук репчатый, 
            перец болгарский, перчики халапенью, пепперони, 
            сыр «Моцарелла», сыр «Филадельфия», орегано.
          </Card.Text>
          
          
          <Button variant="success">Заказать🍕</Button>

        </Card.Body>
        
      </Card>
    );
}


export default PizzaCard;