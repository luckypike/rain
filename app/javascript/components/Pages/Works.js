import React, { Component } from 'react'

import classNames from 'classnames'
import styles from './Works.module.css'

class Works extends Component {
  render() {
    return(
      <div className={styles.root}>
        <div className={styles.top}>
          <div className={styles.placeholder}></div>
          <div className={styles.text}>
            <h1>
              Восхитительный маникюр
            </h1>
            <p>
              Органично вписывается в образы и не теряет актуальность
            </p>
          </div>
        </div>

        <div className={styles.button}>
          <a href="#">Записаться</a>
        </div>

        <section className={styles.description}>
          <p>
            Мы любим делать геометричный дизайн, состоящий из простых фигур скомпонованных интересным образом.
            В большинстве случаев мы придумываем дизайн во время работы с гостьей.
            Да, мы собираем мудборды в Pinterest и сохранённые альбомы в телефоне, но чаще всего это импровизация.
          </p>
        </section>

        <section className={classNames(styles.images, styles.first)}>
          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>
        </section>
        <section className={styles.description}>
          <p>
            Все примеры работ, которые мы выкладываем на публичных площадках, может повторить любой мастер студии.
            Это часть тестового задания в ходе испытательного срока. Мастерам необходимо развивать способности,
            мыслить нестандартно, выходить из зоны комфорта и усердно работать изо дня в день.
          </p>
        </section>

        <section className={classNames(styles.images, styles.second)}>
          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>
        </section>

        <section className={styles.description}>
          <p>
            На маникюр с покрытием и дизайном мастер тратит не более 2 часов.
            Мы привлекаем на работу людей с современным мышлением, отличным вкусом, желанием работать и вкладывать свою энергию.
            Мы стремимся воплотить в работе наши ценности.
          </p>
        </section>
        <section className={classNames(styles.images, styles.third)}>
          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>
          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>

          <a href="#" className={styles.image}>

          </a>
        </section>
      </div>
    )
  }
}

export default Works
