import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import styles from './Subscription.module.css'

export default function Subscription () {
  const [active, setActive] = useState(0)
  const mount = useRef()
  const slides = useRef()
  let glide = null

  useEffect(() => {
    const _onResize = e => {
      if (window.getComputedStyle(slides.current).getPropertyValue('display') === 'flex') {
        if (!glide) {
          glide = new Glide(mount.current, {
            type: 'carousel',
            gap: 0
          })

          glide.on(['mount.after', 'run'], () => {
            setActive(glide.index)
          })

          glide.mount()
        }
      } else {
        if (glide) {
          glide.destroy()
          glide = null
        }
      }
    }

    if (window) {
      window.addEventListener('resize', _onResize)
      _onResize()
    }
  }, [])

  return (
    <>
      <div className={classNames('glide', styles.slider)} ref={mount}>
        <div className={classNames('glide__track')} data-glide-el="track">
          <div className={classNames('glide__slides', styles.slides)} ref={slides}>
            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.card, styles.cover1)}>
                <div className={styles.group}>
                  <div className={styles.sale}>
                    <h1>-10%</h1>
                  </div>

                  <div className={styles.season}>
                    <h3>Абонемент на маникюр с покрытием к&nbsp;Топ&#8209;мастеру</h3>
                  </div>

                  <div className={styles.manicure}>
                    Маникюр и однотонное покрытие гелями Luxio у топ-мастера.
                  </div>

                  <div className={styles.visit}>
                    <h1>2 визита</h1>
                  </div>

                  <div className={styles.price}>
                    <h2>4680 ₽</h2><span className={styles.origin}>5200 ₽</span>
                  </div>
                </div>
              </div>

              <div className={styles.pay}>
                <h3>Купить</h3>
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.card, styles.cover2)}>
                <div className={styles.group}>
                  <div className={styles.sale}>
                    <h1>-15%</h1>
                  </div>

                  <div className={styles.season}>
                    <h3>Абонемент на маникюр с покрытием к&nbsp;Топ&#8209;мастеру</h3>
                  </div>

                  <div className={styles.manicure}>
                    Маникюр и однотонное покрытие гелями Luxio у топ-мастера.
                  </div>

                  <div className={styles.visit}>
                    <h1>3 визита</h1>
                  </div>

                  <div className={styles.price}>
                    <h2>6630 ₽</h2><span className={styles.origin}>7800 ₽</span>
                  </div>
                </div>
              </div>

              <div className={styles.pay}>
                <h3>Купить</h3>
              </div>
            </div>

            <div className={classNames('glide__slide', styles.slide)}>
              <div className={classNames(styles.card, styles.cover3)}>
                <div className={styles.group}>
                  <div className={styles.sale}>
                    <h1>-20%</h1>
                  </div>

                  <div className={styles.season}>
                    <h3>Абонемент на маникюр с покрытием к&nbsp;Топ&#8209;мастеру</h3>
                  </div>

                  <div className={styles.manicure}>
                    Маникюр и однотонное покрытие гелями Luxio у топ-мастера.
                  </div>

                  <div className={styles.visit}>
                    <h1>5 визитов</h1>
                  </div>

                  <div className={styles.price}>
                    <h2>10400 ₽</h2><span className={styles.origin}>13000 ₽</span>
                  </div>
                </div>
              </div>

              <div className={styles.pay}>
                <h3>Купить</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={classNames(styles.button, { [styles.active]: active === 0 })}>
          2 визита
        </button>

        <div className={classNames(styles.button, { [styles.active]: active === 1 })}>
          3 визита
        </div>

        <div className={classNames(styles.button, { [styles.active]: active === 2 })}>
          5  визитов
        </div>
      </div>
    </>
  )
}
