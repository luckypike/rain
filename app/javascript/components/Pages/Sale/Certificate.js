import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import styles from './Certificate.module.css'

import Swipe from '!svg-react-loader!../../../images/sale/swipe.svg'

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
    <div className={classNames('glide', styles.slider)} ref={mount}>
      <div className={classNames('glide__track')} data-glide-el="track">
        <div className={classNames('glide__slides', styles.slides)} ref={slides}>
          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.card, styles.cover1)}>
              <div className={styles.group}>
                <div className={styles.title}>
                  <h3>Сертификат</h3>
                </div>

                <div className={styles.price}>
                  <h1>3000 ₽</h1>
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="/orders">
                <h3>Купить</h3>
              </a>
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.card, styles.cover2)}>
              <div className={styles.group}>
                <div className={styles.title}>
                  <h3>Сертификат</h3>
                </div>

                <div className={styles.price}>
                  <h1>5000 ₽</h1>
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="/orders">
                <h3>Купить</h3>
              </a>
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.card, styles.cover3)}>
              <div className={styles.group}>
                <div className={styles.title}>
                  <h3>Сертификат</h3>
                </div>

                <div className={styles.price}>
                  <h1>7000 ₽</h1>
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="/orders">
                <h3>Купить</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttons} data-glide-el="controls[nav]">
        <div className={classNames(styles.button, { [styles.active]: active === 0 })} data-glide-dir="=0">
          3000 ₽
        </div>

        <div className={classNames(styles.button, { [styles.active]: active === 1 })} data-glide-dir="=1">
          5000 ₽
        </div>

        <div className={classNames(styles.button, { [styles.active]: active === 2 })} data-glide-dir="=2">
          7000 ₽
        </div>

        <div className={styles.swipe}>
          <Swipe />
        </div>
      </div>
    </div>
  )
}
