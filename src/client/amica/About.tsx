import * as React from 'react'

const styles = require('./scss/About.scss') // tslint:disable-line no-var-requires

const About = () => (
  <div
    className={styles.about}
    id='about'>
    <h2 className={styles.about__title}>
      Who We Are
    </h2>
    <p className={styles.about__text}>
      Hey parent! We are Amica, a revolutionary new company with a lofty goal: teach your kids how to behave online. Amica is the Latin word for friend, because we believe that people interacting on the web should be friendly and civil. We are working to build interactive games for elementary and middle schoolers that teach them the ins and outs of how to conduct themselves in all online interactions.
    </p>
  </div>
)

export default About
