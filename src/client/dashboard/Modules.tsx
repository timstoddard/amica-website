import * as React from 'react'
import { Button, Col, Container, Row} from 'reactstrap'

const styles = require('./scss/modules.scss') // tslint:disable-line no-var-requires

const Module = () => (
  <div className={styles.module}>
      <h2 className={styles.module__title}>
          Module Home
      </h2>
      <Container classname={styles.module__buttons}>
          <Row>
              <Col>
                  <Button color='primary'>
                    M1
                  </Button>
              </Col>
              <Col>
                  <Button color='primary'>
                      M2
                  </Button>
              </Col>
              <Col>
                  <Button color='primary'>
                      M3
                  </Button>
              </Col>
              <Col>
                  <Button color='primary'>
                      M4
                  </Button>
              </Col>
          </Row>
          <Row>
              <Col>
                  <Button color='primary'>
                      M5
                  </Button>
              </Col>
              <Col>
                  <Button color='primary'>
                      M6
                  </Button>
              </Col>
              <Col>
                  <Button color='primary'>
                      M7
                  </Button>
              </Col>
              <Col>
                  <Button color='primary'>
                      M8
                  </Button>
              </Col>
          </Row>
          <Row>
              <Col xs='6' sm='4'>
                  <Button color='primary'>
                      Messages
                  </Button>
              </Col>
              <Col xs='6' sm='4'>
                  <Button color='primary'>
                      Email
                  </Button>
              </Col>
              <Col sm='4'>
                  <Button color='primary'>
                      Social Media
                  </Button>
              </Col>
          </Row>
      </Container>
  </div>
)

export default Module
