import React, { useEffect } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'

import styles from './Slider.module.css'

export default function Slider () {
  const mount = React.createRef()
  const slides = React.createRef()
  let glide = null

  useEffect(() => {
    const _onResize = e => {
      if (window.getComputedStyle(slides.current).getPropertyValue('display') === 'flex') {
        if (!glide) {
          glide = new Glide(mount.current, {
            type: 'carousel',
            perView: 1.279
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
    <div className="glide" ref={mount}>
      <div className="glide__track" data-glide-el="track">
        <div className={classNames('glide__slides', styles.slides)} ref={slides}>
          <div className={classNames('glide__slide', styles.slide, styles.ss1)}></div>
          <div className={classNames('glide__slide', styles.slide, styles.ss2)}></div>
          <div className={classNames('glide__slide', styles.slide, styles.ss3)}></div>
          <div className={classNames('glide__slide', styles.slide, styles.ss4)}></div>
        </div>
      </div>
    </div>
  )
}
