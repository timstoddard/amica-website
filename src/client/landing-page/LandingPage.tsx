import * as React from 'react'
import { Button, Card, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import About from './About'
import Competitors from './Competitors'
import Email from './Email'
import Games from './Games'
import Pricing from './Pricing'

const styles = require('./scss/LandingPage.scss') // tslint:disable-line no-var-requires

const LandingPage = () => (
    <Container>
        <Row>
            <Col>
                <Card body>
                    <CardTitle>
                        Learn to be internet awesome
                    </CardTitle>
                    <CardText>
                        It's the fastest and easiest way to learn.
                    </CardText>
                    <Button>View Free Demo</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col xs='6'>
                <img
                    src={'./../../media/images/monster3.png'}
                    alt='Logo'
                />
            </Col>
            <Col xs='6'>
                <h4 className={styles.game__boxTitle}>
                    Pick the perfect module
                </h4>
                <p>
                    We add simple game mechanics to make the learning process
                    fun and exciting. Gain XP, unlock achievements and level
                    up.
                </p>
            </Col>
        </Row>
        <Row>
            <Col xs='6'>
                <h4>
                    Students engage at their own pace
                </h4>
                <span>
                    Students play an interactive game and progress
                    independently.
                </span>
            </Col>
            <Col xs='6'>
                <img
                    src={'./../../media/images/monster2.png'}
                    alt='Logo'
                />
            </Col>
        </Row>
        <Row>
            <Col xs='6'>
                <img
                    src={'./../../media/images/monster1.png'}
                    alt='Logo'
                />
            </Col>
            <Col xs='6'>
                <div>
                <h4>
                    Put feedback to work, no grading required
                </h4>
                <span>
                    Students have a blast, we do the grading, and you see
                    what they know now and where you'll take them next.
                </span>
                </div>
            </Col>
        </Row>
    </Container>
    /*
  <>
    <Email />
    <About />
    <Games />
    <Pricing />
    <Competitors />
  </>
     */
)

export default LandingPage
