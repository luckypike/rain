import React, { Component } from 'react'

import classNames from 'classnames'
import styles from './Team.module.css'
import page from '../Page.module.css'

class Team extends Component {
  render(){
  const { city, specialists } = this.props

    return(
      <div className={page.root}>
        <div className={styles.top}>
          <div className={styles.placeholder}></div>
          <div className={page.text}>
            <h1>
              Основа нашей магии
            </h1>
            <p>
              Отточенное профессиональное мастерство
            </p>
          </div>
        </div>

        <section className={classNames(styles.description, page.section)}>
          <p>
            Мы создаем не форму, покрытие или дизайн. Мы создаем настроение, с которым девушки будут жить ближайшие несколько недель.
            Мы любим пробовать неизведанное, не просто следовать моде, а обновлять, изменять её,
            создавать работу, которая расходится сотнями копий.
          </p>
        </section>

        <section className={classNames(styles.photo, page.section)}>
          <div className={styles.girls}></div>
        </section>

        <section className={classNames(styles.description, page.section)}>
          <div className={styles.txt}>
            <h2>
              Искусство можно только чувствовать
            </h2>
            <p>
              Мода, дизайн, архитектура, искусство, музыка и улица является вдохновляющим источником для нового.
              Идеи приходят с каждой из сторон. Они могут возникать из работы с командой.
              Мы видим больше, чем могли бы видеть работая в одиночку. В каждой работе есть такой момент. Это неописуемый восторг.
              Словно мы сотворили магию на секунду.
            </p>
          </div>
        </section>

        <section className={classNames(styles.team, page.section)}>
          <div className={styles.specialists}>
            {specialists.map((specialist, _) =>
              <div className={styles.list} key={_}>
                <div className={styles.specialist}>
                  <img src={specialist.photo} />
                </div>
                <div className={styles.service}>{specialist.service}</div>
                <div className={styles.name}>{specialist.name}</div>
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }
}

export default Team
