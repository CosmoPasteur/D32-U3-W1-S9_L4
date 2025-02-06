import { Alert } from "react-bootstrap";

function Welcome() {
  return (
    <Alert variant="info" className="mt-3">
      <Alert.Heading>Hey, Welcome</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
        that you can see how spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">Buona lettura.</p>
    </Alert>
  );
}

export default Welcome;
