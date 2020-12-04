import React from "react";
import {
  Button,
  Container,
  Row,
  Form,
  Col,
  ListGroup,
  Accordion,
  Card,
} from "react-bootstrap";

function Note() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={styles.heading}>
            <Accordion>
              <Card>
                <Card.Header style={styles.cardHeader}>Notes</Card.Header>
              </Card>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Button variant="dark" block style={styles.newNote}>
              New note
            </Button>
            <ListGroup>
              <ListGroup.Item action>Cras justo odio</ListGroup.Item>
              <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item action>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control as="input" placeholder="hello" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Note</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" style={styles.saveButton}>
              Save
            </Button>
            <Button variant="danger">Delete</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Note;

const styles = {
  cardHeader: {
    fontSize: 40,
  },

  heading: {
    marginBottom: 25,
    marginTop: 25,
  },
  newNote: {
    marginBottom: 25,
  },
  saveButton: {
    marginRight: 15,
  },
};
