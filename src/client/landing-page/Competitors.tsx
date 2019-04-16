import * as React from 'react'
import { Table } from 'reactstrap'

const styles = require('./scss/Competitors.scss') // tslint:disable-line no-var-requires

enum Rating {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

enum Criteria {
  IS_ENGAGING = 'Is Engaging',
  VARIETY_OF_CONTENT = 'Variety of Content',
  QUALITY_OF_CONTENT = 'Quality of Content',
}

interface Competitor {
  name: string
  [Criteria.IS_ENGAGING]: boolean
  [Criteria.VARIETY_OF_CONTENT]: Rating
  [Criteria.QUALITY_OF_CONTENT]: Rating
}

const competitors: Competitor[] = [
  {
    name: 'Amica',
    [Criteria.IS_ENGAGING]: true,
    [Criteria.VARIETY_OF_CONTENT]: Rating.HIGH,
    [Criteria.QUALITY_OF_CONTENT]: Rating.HIGH,
  },
  {
    name: 'Common Sense Media',
    [Criteria.IS_ENGAGING]: false,
    [Criteria.VARIETY_OF_CONTENT]: Rating.MEDIUM,
    [Criteria.QUALITY_OF_CONTENT]: Rating.MEDIUM,
  },
  {
    name: 'Interland',
    [Criteria.IS_ENGAGING]: true,
    [Criteria.VARIETY_OF_CONTENT]: Rating.LOW,
    [Criteria.QUALITY_OF_CONTENT]: Rating.MEDIUM,
  },
]

const criteria = [
  Criteria.IS_ENGAGING,
  Criteria.VARIETY_OF_CONTENT,
  Criteria.QUALITY_OF_CONTENT,
]

const formatScore = (score: boolean | Rating) => {
  switch (score) {
    case true:
      return 'Yes'
    case false:
      return 'No'
    case Rating.LOW:
      return 'Low'
    case Rating.MEDIUM:
      return 'Medium'
    case Rating.HIGH:
      return 'High'
  }
}

const formatScoreClass = (score: boolean | Rating, baseClass: string) => {
  switch (score) {
    case true:
      return `${baseClass}--yes`
    case false:
      return `${baseClass}--no`
    case Rating.LOW:
      return `${baseClass}--low`
    case Rating.MEDIUM:
      return `${baseClass}--medium`
    case Rating.HIGH:
      return `${baseClass}--high`
  }
}

const Competitors = () => (
  <div
    className={styles.competitors}>
    <h2 className={styles.competitors__title}>
      Competitors
    </h2>
    <p className={styles.competitors__text}>
      Still not convinced? Check out how we stack up to the competition in the table below.
    </p>
    <Table bordered>
      <thead>
        <tr>
          <th />
          {competitors.map(({ name }: Competitor) => (
            <th key={name}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {criteria.map((criterion: Criteria) => (
          <tr key={criterion}>
            <td>
              {criterion}
            </td>
            {competitors.map((item: Competitor) => (
              <td key={item.name}>
                <span className={styles[formatScoreClass(item[criterion], 'competitors__criterion')]}>
                  {formatScore(item[criterion])}
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

export default Competitors
