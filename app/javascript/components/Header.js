import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Cookies from 'universal-cookie'

import button from './Button.module.css'
import styles from './Header.module.css'
import Logo from '!svg-react-loader?!../images/logo.svg'

Header.propTypes = {
  city: PropTypes.string,
  sale: PropTypes.bool,
  order: PropTypes.bool
}

export default function Header ({ city, sale, order }) {
  const [toggle, setToggle] = useState(false)
  const [cities, setCities] = useState(false)

  const cookies = new Cookies()

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleChange = () => {
    setCities(!cities)
  }

  const handleMoscow = () => {
    cookies.set('geo', 'moscow', { path: '/' })
    window.location.href = '/'
  }

  const handleNizhny = () => {
    cookies.set('geo', 'nizhny', { path: '/' })
    window.location.href = '/nizhny'
  }

  useEffect(() => {
    const path = window.location.pathname

    if (cookies.get('geo') === 'nizhny' && path === '/') {
      window.location.href = '/nizhny'
    }
    if (cookies.get('geo') === 'moscow' && path === '/nizhny') {
      window.location.href = '/'
    }
  }, [])

  return (
    <div className={classNames(styles.header, { [styles.toggled]: toggle, [styles.sale]: sale || order })}>
      <div className={styles.header_container}>
        <div className={styles.header_burger} onClick={handleToggle}>
          <svg viewBox="0 0 24 24">
            <rect height="1" width="24" x="0" y="8"></rect>
            <rect height="1" width="24" x="0" y="15"></rect>
          </svg>
        </div>

        <div className={styles.header_logo}>
          {city === 'moscow' &&
            <a href="/"><Logo /></a>
          }

          {city === 'nizhny' &&
            <a href="/nizhny"><Logo /></a>
          }

          <div className={styles.city}>
            <div className={styles.current} onClick={handleChange}>
              <span>{city}</span>
              <svg>
                <polygon points="0 0 7 0 3.5 6 0 0"></polygon>
              </svg>
            </div>

            <div className={classNames(styles.switch, { [styles.active]: cities })}>
              {city === 'moscow' &&
                <a onClick={handleNizhny}>nizhny</a>
              }
              {city === 'nizhny' &&
                <a onClick={handleMoscow}>moscow</a>
              }
            </div>
          </div>
        </div>

        <div className={styles.header_menu}>
          {/* <div className={styles.header_menu_item}>
            {city === 'moscow' &&
              <a href="/sales">Акции</a>
            }
            {city === 'nizhny' &&
              <a href="/nizhny/sales">Акции</a>
            }
          </div> */}
          <div className={styles.header_menu_item}>
            {city === 'moscow' &&
              <a href="/about">Пространство</a>
            }
            {city === 'nizhny' &&
              <a href="/nizhny/about">Пространство</a>
            }
          </div>
          <div className={classNames(styles.in, styles.header_menu_item)}>
            <a>Услуги</a>
          </div>
          <div className={styles.header_menu_item}>
            {city === 'moscow' &&
              <a href="/works">Работы</a>
            }
            {city === 'nizhny' &&
              <a href="/nizhny/works">Работы</a>
            }
          </div>
          <div className={styles.header_menu_item}>
            {city === 'moscow' &&
              <a href="/team">Команда</a>
            }
            {city === 'nizhny' &&
              <a href="/nizhny/team">Команда</a>
            }
          </div>
          <div className={styles.header_menu_item}>
            {city === 'moscow' &&
              <a href="/career">Вакансии</a>
            }
            {city === 'nizhny' &&
              <a href="/nizhny/career">Вакансии</a>
            }
          </div>
          <div className={classNames(styles.in, styles.header_menu_item)}>
            <a>Ценности</a>
          </div>
        </div>

        <div className={styles.header_book}>
          {city === 'moscow' &&
            <a className={classNames('ms_booking', button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:95580">
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
          {city === 'nizhny' &&
            <a className={classNames('ms_booking', button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:58259">
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
