import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Button, Badge} from 'react-bootstrap';

function PizzaCard ({data}) {
    return(
        <Card style={{ width: '18rem', height: '28rem'}}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">
              {data.name}
            </Card.Title>
            <Badge pill variant="warning" style={{ fontSize: 16 }}>
              ₴{data.price}
            </Badge>
          </div>
          <Card.Text className="text-center">
            {data.desc}
          </Card.Text>
          <Button className="mb-auto" variant="success">Заказать🍕</Button>
          
        </Card.Body>
      </Card>
    );
}


export default PizzaCard;