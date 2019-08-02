import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Cookies from 'universal-cookie'

import styles from './Geo.module.css'
import Logo from '!svg-react-loader?!../images/logo.svg'

export default function Geo () {
  const cookies = new Cookies()
  const [moscow, setMoscow] = useState(false)
  const [nizhny, setNizhny] = useState(false)

  function handleMoscow (e) {
    e.preventDefault()
    setMoscow(true)
    document.body.classList.remove('geo_bg')
    cookies.set('geo', 'moscow', { path: '/'})
    if (typeof window !== 'undefined') window.location.href = '/'
  }

  function handleNizhny (e) {
    e.preventDefault()
    setNizhny(true)
    document.body.classList.remove('geo_bg')
    cookies.set('geo', 'nizhny', { path: '/' })
    if (typeof window !== 'undefined') window.location.href = '/nizhny'
  }

  return(
    <div className={styles.geo_bg}>
      <div className={styles.geo_sl}>

        <div className={styles.geo_logo}>
          <Logo />
        </div>

        <div className={styles.geo_q}>
          Выберите маникюрное пространство
        </div>

        <a href="#" className={styles.geo_moscow} onClick={handleMoscow}>
          в Москве
        </a>

        <div className={styles.geo_or}>или</div>

        <a href="#" className={styles.geo_nizhny} onClick={handleNizhny}>
          в Нижнем Новгороде
        </a>
      </div>
    </div>
  )
}
