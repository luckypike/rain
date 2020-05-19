import React from 'react'
import classNames from 'classnames'

import styles from './Works.module.css'
import page from '../Page.module.css'
import works from '../../video/works.mp4'

export default function Works () {
  return (
    <div className={page.root}>
      <div className={styles.top}>
        <div className={styles.video}>
          <video playsInline autoPlay loop muted>
            <source src={works} type="video/mp4"></source>
          </video>
        </div>
        <div className={styles.placeholder}></div>
        <div className={page.text}>
          <h1>
            Восхитительный маникюр
          </h1>
          <p>
            Органично вписывается в образы и не теряет актуальность
          </p>
        </div>
      </div>

      <section className={classNames(styles.description, page.section)}>
        <p>
          Мы любим делать геометричный дизайн, состоящий из простых фигур скомпонованных интересным образом.
          В большинстве случаев мы придумываем дизайн во время работы с гостьей.
          Да, мы собираем мудборды в Pinterest и сохранённые альбомы в телефоне, но чаще всего это импровизация.
        </p>
      </section>

      <section className={classNames(styles.images, styles.first, page.section)}>
        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B3qxKtzI6y5/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B1TIIZWCWAO/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B4g2AT-qWye/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B2gFKFnCyQY/" target="_blank" rel="noreferrer"></a>
        </div>
      </section>

      <section className={classNames(styles.description, page.section)}>
        <p>
          Все примеры работ, которые мы выкладываем на публичных площадках, может повторить любой мастер студии.
          Это часть тестового задания в ходе испытательного срока. Мастерам необходимо развивать способности,
          мыслить нестандартно, выходить из зоны комфорта и усердно работать изо дня в день.
        </p>
      </section>

      <section className={classNames(styles.images, styles.second, page.section)}>
        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B23Rdo-iwcZ/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B44AHxUKVm_/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B0Ace9pitGn/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/Bz2LAilieN-/" target="_blank" rel="noreferrer"></a>
        </div>
      </section>

      <section className={classNames(styles.description, page.section)}>
        <p>
          На маникюр с покрытием и дизайном мастер тратит не более 2 часов.
          Мы привлекаем на работу людей с современным мышлением, отличным вкусом, желанием работать и вкладывать свою энергию.
          Мы стремимся воплотить в работе наши ценности.
        </p>
      </section>

      <section className={classNames(styles.images, styles.third, page.section)}>
        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B4rNHQZo0_m/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B2Yh_7AiU8A/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/Bva6CkMnFsp/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B5HfdAlqegX/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B5ZijSZqchU/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B4l_tEOqCcA/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B5wqZfjqKr3/" target="_blank" rel="noreferrer"></a>
        </div>

        <div className={styles.image}>
          <a href="https://www.instagram.com/p/B4ZOZzpCTGv/" target="_blank" rel="noreferrer"></a>
        </div>
      </section>
    </div>
  )
}
