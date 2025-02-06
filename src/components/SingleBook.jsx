import { Component } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

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
            <Card.Title>{this.props.book.Title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text>
              <Badge bg="info">${this.props.book.price}</Badge>
            </Card.Text>
            <Button variant="primary">Aggiungi al carrello</Button>
            {/* PER LA VISIONE DEI COMMENTI SE è TRUE */}
            {this.state.selected && <CommentArea />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
