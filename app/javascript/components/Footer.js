import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './Footer.module.css'
import button from './Button.module.css'
import page from './Page.module.css'

class Footer extends Component {

  componentDidMount() {
    yWidget.init()
  }

  render() {
    const { city } = this.props

    return(
      <div className={styles.root}>
        <div className={styles.socials}>
          <div className={styles.socials_item}>
            <a href="//instagram.com/irina_rain" target="_blank">Instagram</a>
          </div>
          <div className={styles.socials_item}>
            <a href="//fb.com/rainnailbar" target="_blank">Facebook</a>
          </div>
          <div className={styles.socials_item}>
            <a href="//vk.com/irina.rain" target="_blank">Vkontakte</a>
          </div>
          <div className={styles.socials_item}>
            <a href="//pinterest.com/irina_rain" target="_blank">Pinterest</a>
          </div>
          <div className={styles.socials_item}>
            <a href="//youtube.com/channel/UCAqvSQ0oo9v-6jPQKu_vSGQ" target="_blank">YouTube</a>
          </div>
        </div>
        <div className={styles.book}>
          {city == "moscow" &&
            <a className={classNames("ms_booking", button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:95580">Записаться</a>
          }
          {city == "nizhny" &&
            <a className={classNames("ms_booking", button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:58259">Записаться</a>
          }
        </div>
        <div className={styles.l_ike}>
          <a href="//luckypike.com">L..IKE</a>
        </div>
      </div>
    )
  }
}

export default Footer
