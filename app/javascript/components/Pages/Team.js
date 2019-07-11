import React, { Component } from 'react'

import classNames from 'classnames'
import styles from './Team.module.css'

class Team extends Component {
  render(){
  const { city, specialists } = this.props

  console.log(specialists);

    return(
      <div className={styles.root}>
        <div className={styles.top}>
          <div className={styles.placeholder}></div>
          <div className={styles.text}>
            <h1>
              Основа нашей магии
            </h1>
            <p>
              Отточенное профессиональное мастерство
            </p>
          </div>
        </div>

        <section className={styles.description}>
          <p>
            Мы создаем не форму, покрытие или дизайн. Мы создаем настроение, с которым девушки будут жить ближайшие несколько недель.
            Мы любим пробовать неизведанное, не просто следовать моде, а обновлять, изменять её,
            создавать работу, которая расходится сотнями копий.
          </p>
        </section>

        <section className={styles.photo}>
          <div className={styles.girls}></div>
        </section>

        <section className={styles.description}>
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

        <section className={styles.team}>
          <div className={styles.specialists}>
            <div>
              <div className={styles.specialist}></div>
              <div className={styles.service}>Nail Artist</div>
              <div className={styles.name}>Яна</div>
            </div>

            <div>
              <div className={styles.specialist}></div>
              <div className={styles.service}>Nail Artist</div>
              <div className={styles.name}>Вероника</div>
            </div>

            <div>
              <div className={styles.specialist}></div>
              <div className={styles.service}>CEO RAIN</div>
              <div className={styles.name}>Ирина</div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Team
