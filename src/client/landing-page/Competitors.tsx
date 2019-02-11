import * as React from 'react'

const styles = require('./scss/Competitors.scss') // tslint:disable-line no-var-requires

interface Competitor {
  name: string
  criteria1: boolean
  criteria2: boolean
  criteria3: boolean
}

const competitors: Competitor[] = [
  {
    name: 'Amica',
    criteria1: true,
    criteria2: true,
    criteria3: true,
  },
  {
    name: 'Competitor 1',
    criteria1: true,
    criteria2: false,
    criteria3: false,
  },
  {
    name: 'Competitor 2',
    criteria1: true,
    criteria2: true,
    criteria3: false,
  },
  {
    name: 'Competitor 3',
    criteria1: false,
    criteria2: true,
    criteria3: true,
  },
]

const Competitors = () => (
  <div
    className={styles.competitors}>
    <h2 className={styles.competitors__title}>
      Competitors
    </h2>
    <p className={styles.competitors__text}>
      Still not convinced? Check out how we stack up to the competition in the table below.
    </p>
    <table className={styles.competitors__table}>
      <thead>
        <tr>
          {competitors.map(({ name }: Competitor) => (
            <th
              key={name}
              className={styles.competitors__table__cell}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {['criteria1', 'criteria2', 'criteria3'].map((criteria: keyof Competitor) => (
          <tr key={criteria}>
            {competitors.map((item: Competitor) => (
              <td
                key={item.name}
                className={styles.competitors__table__cell}>
                <span
                  className={item[criteria]
                    ? styles['competitors__criteria--hasFeature']
                    : ''}>
                  {item[criteria] ? 'X' : '' }
                </span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Competitors
