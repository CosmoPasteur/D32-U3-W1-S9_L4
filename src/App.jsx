import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/fantasy.json";
import romance from "./data/fantasy.json";
import scifi from "./data/scifi.json";
import { Component } from "react";
import { Button } from "react-bootstrap";
// import SingleBook from "./SingleBook";

class App extends Component {
  state = {
    books: scifi,
  };
  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <div className="d-flex gap-1 my-4 justify-content-center">
          <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
            fantasy
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: history })}>
            history
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: horror })}>
            horror
          </Button>
          <Button variant="success" onClick={() => this.setState({ books: romance })}>
            romance
          </Button>
          <Button variant="info" onClick={() => this.setState({ books: scifi })}>
            scifi
          </Button>
        </div>
        <BookList books={this.state.books} />
        <MyFooter />
      </>
    );
  }
}

export default App;
