import React, { Component } from 'react'

import classNames from 'classnames'
import styles from './Works.module.css'

class Works extends Component {
  render() {
    const { city } = this.props

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
          {city == "nizhny" &&
            <a href="https://n81206.yclients.com/company:58259">Записаться</a>
          }
          {city == "moscow" &&
            <a href="https://n81206.yclients.com/company:95580">Записаться</a>
          }
        </div>

        <section className={styles.description}>
          <p>
            Мы любим делать геометричный дизайн, состоящий из простых фигур скомпонованных интересным образом.
            В большинстве случаев мы придумываем дизайн во время работы с гостьей.
            Да, мы собираем мудборды в Pinterest и сохранённые альбомы в телефоне, но чаще всего это импровизация.
          </p>
        </section>

        <section className={classNames(styles.images, styles.first)}>
          <div className={styles.image}>
            <a href="https://www.instagram.com/p/Bva6CkMnFsp/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BuSztvOndV8/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BuX9ktEHmEg/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BvI40tmno0v/" target="_blank"></a>
          </div>
        </section>

        <section className={styles.description}>
          <p>
            Все примеры работ, которые мы выкладываем на публичных площадках, может повторить любой мастер студии.
            Это часть тестового задания в ходе испытательного срока. Мастерам необходимо развивать способности,
            мыслить нестандартно, выходить из зоны комфорта и усердно работать изо дня в день.
          </p>
        </section>

        <section className={classNames(styles.images, styles.second)}>
          <div className={styles.image}>
            <a href="https://www.instagram.com/p/Bw_VQD4nVhn/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BvQm4hOHvgP/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/Byrf4oui6WA/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/ByUTzXnisQN/" target="_blank"></a>
          </div>
        </section>

        <section className={styles.description}>
          <p>
            На маникюр с покрытием и дизайном мастер тратит не более 2 часов.
            Мы привлекаем на работу людей с современным мышлением, отличным вкусом, желанием работать и вкладывать свою энергию.
            Мы стремимся воплотить в работе наши ценности.
          </p>
        </section>

        <section className={classNames(styles.images, styles.third)}>
          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BuxxCyOH7tz/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BwgdKG5HMGh/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BwL2fLzHmGl/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/Byo64Qri08I/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/Busi4i9HUhp/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BxRXSGPHfPG/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BxrGg45C5xK/" target="_blank"></a>
          </div>

          <div className={styles.image}>
            <a href="https://www.instagram.com/p/BzAJLPkiEyN/" target="_blank"></a>
          </div>
        </section>
      </div>
    )
  }
}

export default Works
