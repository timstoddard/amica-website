import * as React from 'react'
import { Col, Container, Row } from 'reactstrap'

const styles = require('./scss/Footer.scss') // tslint:disable-line no-var-requires

/*
          <Row>
              <img
                  src={'./../../../media/svgicon/edsurge.svg'}
              />
              <img
                  src={'./../../../media/svgicon/forbes.svg'}
              />
              <img
                  src={'./../../../media/svgicon/tc.svg'}
              />
              <img
                  src={'./../../../media/svgicon/wsj.svg'}
              />
          </Row>
           */

const Footer: React.StatelessComponent<{}> = () => (
  <footer className={styles.footer}>
      <Container>
          <Row>
              &copy; Amica 2019
          </Row>
      </Container>
  </footer>
)

export default Footer
