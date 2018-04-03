import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import './contact.sass'

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact">
        <Container className="py-15">
          <Row className="justify-content-around">
            <Col xs="false" md="4">
              Contact
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Contact
