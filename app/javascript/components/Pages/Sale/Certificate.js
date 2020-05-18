import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import styles from './Certificate.module.css'

export default function Certificate () {
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
                  <div className={styles.title}>
                    Сертификат
                  </div>

                  <div className={styles.price}>
                    <h1>3000 ₽</h1>
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
                  <div className={styles.title}>
                    Сертификат
                  </div>

                  <div className={styles.price}>
                    <h1>5000 ₽</h1>
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
                  <div className={styles.title}>
                    Сертификат
                  </div>

                  <div className={styles.price}>
                    <h1>7000 ₽</h1>
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
          3000 ₽
        </button>

        <div className={classNames(styles.button, { [styles.active]: active === 1 })}>
          5000 ₽
        </div>

        <div className={classNames(styles.button, { [styles.active]: active === 2 })}>
          7000 ₽
        </div>
      </div>
    </>
  )
}
