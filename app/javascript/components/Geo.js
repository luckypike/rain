import React, { Component } from 'react'

import styles from './Geo.module.css'
import Logo from '!svg-react-loader?!../images/logo.svg'

class Geo extends Component {
  render() {
    return(
      <div className={styles.geo_bg}>
        <div className={styles.geo_sl}>

          <div className={styles.geo_logo}>
            <Logo />
          </div>

          <div className={styles.geo_q}>
            Выберите маникюрное пространство
          </div>

          <a href="/" className={styles.geo_moscow}>в Москве</a>
          
          <div className={styles.geo_or}>или</div>

          <a href="/nizhny" className={styles.geo_nizhny}>в Нижнем Новгороде</a>
        </div>
      </div>
    )
  }
}

export default Geo
