import { Component } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col>
        <Card className={this.state.selected ? "border-danger" : ""}>
          <Card.Img variant="top" src={this.props.book.img} onClick={() => this.setState({ selected: true })} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text>
              <Badge bg="info">${this.props.book.price}</Badge>
            </Card.Text>
            <Button variant="primary">Aggiungi al carrello</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
