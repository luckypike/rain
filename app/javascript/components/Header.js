import React, { Component } from 'react'
import classNames from 'classnames'

import button from './Button.module.css'
import styles from './Header.module.css'
import Logo from '!svg-react-loader?!../images/logo.svg'

class Header extends Component {
  state = {
    toggle: false,
    cities: false
  }

  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }

  handleChange = () => {
    this.setState(prevState => ({
      cities: !prevState.cities
    }))
  }

  render() {
    const { toggle, cities } = this.state
    const { city } = this.props

    return(
      <div className={classNames(styles.header, {[styles.toggled]: toggle})}>
        <div className={styles.header_container}>
          <div className={styles.header_burger} onClick={this.handleToggle}>
            <svg viewBox="0 0 24 24">
              <rect height="1" width="24" x="0" y="8"></rect>
              <rect height="1" width="24" x="0" y="15"></rect>
            </svg>
          </div>

          <div className={styles.header_logo}>
            {city == "moscow" &&
              <a href="/"><Logo /></a>
            }
            {city == "nizhny" &&
              <a href="/nizhny"><Logo /></a>
            }
            <div className={styles.city}>
              <div className={styles.current} onClick={this.handleChange}>
                <span>{city}</span>
                <svg>
                  <polygon points="0 0 7 0 3.5 6 0 0"></polygon>
                </svg>
              </div>
              <div className={classNames(styles.switch, {[styles.active]: cities})}>
                {city == "moscow" &&
                  <a href="/nizhny">nizhny</a>
                }
                {city == "nizhny" &&
                  <a href="/">moscow</a>
                }
              </div>
            </div>
          </div>

          <div className={styles.header_menu}>
            <div className={styles.header_menu_item}>
              {city == "moscow" &&
                <a href="/about">Пространство</a>
              }
              {city == "nizhny" &&
                <a href="/nizhny/about">Пространство</a>
              }
            </div>
            <div className={classNames(styles.in, styles.header_menu_item)}>
              <a>Услуги</a>
            </div>
            <div className={styles.header_menu_item}>
              {city == "moscow" &&
                <a href="/works">Работы</a>
              }
              {city == "nizhny" &&
                <a href="/nizhny/works">Работы</a>
              }
            </div>
            <div className={styles.header_menu_item}>
              {city == "moscow" &&
                <a href="/team">Команда</a>
              }
              {city == "nizhny" &&
                <a href="/nizhny/team">Команда</a>
              }
            </div>
            <div className={styles.header_menu_item}>
              {city == "moscow" &&
                <a href="/career">Вакансии</a>
              }
              {city == "nizhny" &&
                <a href="/nizhny/career">Вакансии</a>
              }
            </div>
            <div className={classNames(styles.in, styles.header_menu_item)}>
              <a>Ценности</a>
            </div>
          </div>

          <div className={styles.header_book}>
            {city == "moscow" &&
              <a className={classNames("ms_booking", button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:95580">
                <>
                  <div className={styles.icon}>
                    <svg viewBox="0 0 38 38">
                      <rect height="2" width="8" x="15" y="18"></rect>
                      <rect height="8" width="2" x="18" y="15"></rect>
                    </svg>
                  </div>
                  <div className={styles.text}>Записаться</div>
                </>
              </a>
            }
            {city == "nizhny" &&
              <a className={classNames("ms_booking", button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:58259">
                <>
                  <div className={styles.icon}>
                    <svg viewBox="0 0 38 38">
                      <rect height="2" width="8" x="15" y="18"></rect>
                      <rect height="8" width="2" x="18" y="15"></rect>
                    </svg>
                  </div>
                  <div className={styles.text}>Записаться</div>
                </>
              </a>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Header
