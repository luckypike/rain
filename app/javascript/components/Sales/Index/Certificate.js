import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Glide from '@glidejs/glide'

import styles from './Certificate.module.css'

import Swipe from '!svg-react-loader!../../../images/sale/swipe.svg'

Certificate.propTypes = {
  city: PropTypes.string,
  sales: PropTypes.array
}

export default function Certificate ({ city, sales }) {
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
              <div className={classNames(styles.card, { [styles.cover1]: i === 0, [styles.cover2]: i === 1, [styles.cover3]: i === 2 })}>
                <div className={styles.group}>
                  <div className={styles.title}>
                    <h3>{sale.state}</h3>
                  </div>

                  <div className={styles.price}>
                    <h1>{sale.price_sale_msk} ₽</h1>
                  </div>
                </div>
              </div>

              <div className={styles.pay}>
                <a href={city === 'moscow' ? `/sales/${sale.id}` : `/nizhny/sales/${sale.id}` }>
                  <h3>Купить</h3>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.buttons} data-glide-el="controls[nav]">
        {sales.map((sale, i) =>
          <div key={i} className={classNames(styles.button, { [styles.active]: active === i })} data-glide-dir={`=${i}`}>
            {sale.price_sale_msk}
          </div>
        )}

        <div className={styles.swipe}>
          <Swipe />
        </div>
      </div>
    </div>
  )
}
