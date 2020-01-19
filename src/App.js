import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaCard from './components/PizzaCard';

import { Container, Row, Col} from 'react-bootstrap';
import pizzas from './data';

function App() {
  return (
    <Container>
      <Row>
        {pizzas.map(data => (
          <Col>
            <PizzaCard data={data} />  
          </Col>
        ))} 
      </Row>
    </Container>
  );
}

export default App;
