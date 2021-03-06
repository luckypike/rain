import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'
import PropTypes from 'prop-types'

import styles from './Subscription.module.css'

import { useI18n } from '../../I18n'

import Swipe from '!svg-react-loader!../../../images/sale/swipe.svg'

Subscription.propTypes = {
  city: PropTypes.string,
  sales: PropTypes.array,
  locale: PropTypes.string
}

export default function Subscription ({ city, sales, locale }) {
  const I18n = useI18n(locale)
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
          {sales.map((sale, i) =>
            <div className={classNames('glide__slide', styles.slide)} key={i}>
              <div className={classNames(styles.card, {
                [styles.cover1]: i === 0,
                [styles.cover2]: i === 1,
                [styles.cover3]: i === 2,
                [styles.cover1nn]: city === 'nizhny' && i === 0,
                [styles.cover2nn]: city === 'nizhny' && i === 1,
                [styles.cover3nn]: city === 'nizhny' && i === 2
              })}
              >
                <div className={styles.group}>
                  <div className={styles.sale}>
                    -{sale.discount}%
                  </div>

                  <div className={styles.season}>
                    {sale.state} на маникюр с покрытием к&nbsp;Топ&#8209;мастеру
                  </div>

                  <div className={styles.manicure}>
                    Маникюр и однотонное покрытие гелями Luxio у топ-мастера.
                  </div>
                </div>

                <div className={styles.info}>
                  <div className={styles.visit}>
                    {I18n.t('sales.quantity', { count: sale.quantity })}
                  </div>

                  <div className={styles.price}>
                    {city === 'moscow' &&
                      <>
                        <span className={styles.discount}>{sale.price_sale_msk} ₽</span>
                        <span className={styles.origin}>{sale.price_origin_msk} ₽</span>
                      </>
                    }

                    {city === 'nizhny' &&
                      <>
                        <span className={styles.discount}>{sale.price_sale_nn} ₽</span>
                        <span className={styles.origin}>{sale.price_origin_nn} ₽</span>
                      </>
                    }
                  </div>
                </div>
              </div>

              <a href={city === 'moscow' ? `/sales/${sale.id}` : `/nizhny/sales/${sale.id}` }>
                <div className={styles.pay}>
                  <h3>Купить</h3>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={styles.buttons} data-glide-el="controls[nav]">
        {sales.map((sale, i) =>
          <div key={i} className={classNames(styles.button, { [styles.active]: active === i })} data-glide-dir={`=${i}`}>
            {sale.quantity}
          </div>
        )}

        <div className={styles.swipe}>
          <Swipe />
        </div>
      </div>
    </div>
  )
}
