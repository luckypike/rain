import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import styles from './Subscription.module.css'

import Swipe from '!svg-react-loader!../../../images/sale/swipe.svg'

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
                  <h2>2 визита</h2>
                </div>

                <div className={styles.price}>
                  <h2>4680 ₽</h2><span className={styles.origin}>5200 ₽</span>
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="#">
                <h3>Купить</h3>
              </a>
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
                  <h2>3 визита</h2>
                </div>

                <div className={styles.price}>
                  <h2>6630 ₽</h2><span className={styles.origin}>7800 ₽</span>
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="#">
                <h3>Купить</h3>
              </a>
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
                  <h2>5 визитов</h2>
                </div>

                <div className={styles.price}>
                  <h2>10400 ₽</h2><span className={styles.origin}>13000 ₽</span>
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="#">
                <h3>Купить</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttons} data-glide-el="controls[nav]">
        <div className={classNames(styles.button, { [styles.active]: active === 0 })} data-glide-dir="=0">
          2 визита
        </div>

        <div className={classNames(styles.button, { [styles.active]: active === 1 })} data-glide-dir="=1">
          3 визита
        </div>

        <div className={classNames(styles.button, { [styles.active]: active === 2 })} data-glide-dir="=2">
          5  визитов
        </div>

        <div className={styles.swipe}>
          <Swipe />
        </div>
      </div>
    </div>
  )
}
