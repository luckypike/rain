import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'
import PropTypes from 'prop-types'

import styles from './Subscription.module.css'

import Swipe from '!svg-react-loader!../../../images/sale/swipe.svg'

Subscription.propTypes = {
  city: PropTypes.string
}

export default function Subscription ({ city }) {
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
            <div className={classNames(styles.card, styles.cover1, { [styles.cover1nn]: city === 'nizhny' })}>
              <div className={styles.group}>
                <div className={styles.sale}>
                  -10%
                </div>

                <div className={styles.season}>
                  Абонемент на маникюр с покрытием к&nbsp;Топ&#8209;мастеру
                </div>

                <div className={styles.manicure}>
                  Маникюр и однотонное покрытие гелями Luxio у топ-мастера.
                </div>

                <div className={styles.visit}>
                  2 визита
                </div>

                <div className={styles.price}>
                  {city === 'moscow' &&
                    <>
                      <span className={styles.discount}>4680 ₽</span>
                      <span className={styles.origin}>5200 ₽</span>
                    </>
                  }

                  {city === 'nizhny' &&
                    <>
                      <span className={styles.discount}>3960 ₽</span>
                      <span className={styles.origin}>4400 ₽</span>
                    </>
                  }
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="/sales">
                <h3>Купить</h3>
              </a>
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.card, styles.cover2, { [styles.cover2nn]: city === 'nizhny' })}>
              <div className={styles.group}>
                <div className={styles.sale}>
                  -15%
                </div>

                <div className={styles.season}>
                  Абонемент на маникюр с покрытием к&nbsp;Топ&#8209;мастеру
                </div>

                <div className={styles.manicure}>
                  Маникюр и однотонное покрытие гелями Luxio у топ-мастера.
                </div>

                <div className={styles.visit}>
                  3 визита
                </div>

                <div className={styles.price}>
                  {city === 'moscow' &&
                    <>
                      <span className={styles.discount}>6630 ₽</span>
                      <span className={styles.origin}>7800 ₽</span>
                    </>
                  }

                  {city === 'nizhny' &&
                    <>
                      <span className={styles.discount}>5610 ₽</span>
                      <span className={styles.origin}>6600 ₽</span>
                    </>
                  }
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="/sales">
                <h3>Купить</h3>
              </a>
            </div>
          </div>

          <div className={classNames('glide__slide', styles.slide)}>
            <div className={classNames(styles.card, styles.cover3, { [styles.cover3nn]: city === 'nizhny' })}>
              <div className={styles.group}>
                <div className={styles.sale}>
                  -20%
                </div>

                <div className={styles.season}>
                  Абонемент на маникюр с покрытием к&nbsp;Топ&#8209;мастеру
                </div>

                <div className={styles.manicure}>
                  Маникюр и однотонное покрытие гелями Luxio у топ-мастера.
                </div>

                <div className={styles.visit}>
                  5 визитов
                </div>

                <div className={styles.price}>
                  {city === 'moscow' &&
                    <>
                      <span className={styles.discount}>10400 ₽</span>
                      <span className={styles.origin}>13000 ₽</span>
                    </>
                  }

                  {city === 'nizhny' &&
                    <>
                      <span className={styles.discount}>8800 ₽</span>
                      <span className={styles.origin}>11000 ₽</span>
                    </>
                  }
                </div>
              </div>
            </div>

            <div className={styles.pay}>
              <a href="/sales">
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
