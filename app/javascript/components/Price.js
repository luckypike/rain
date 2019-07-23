import React, { Component } from 'react'

import button from './Button.module.css'
import styles from './Price.module.css'
import classNames from 'classnames'

class Price extends Component {
  render() {
    const { city, prices } = this.props

    return(
      <div className={styles.root}>
        <div className={styles.text}>
          <h2>Цены</h2>
          <p>Изо дня в день и от сезона к сезону мы создаем nail art, подчеркиваем вашу внутреннюю и внешнюю красоту.</p>
        </div>
        <div className={styles.left}>
          {city == "moscow" &&
            <>
              {prices.filter(p => p.position == 'left').map((price,_) =>
                <div key={_}>
                  <div className={styles.price_row} key={_}>
                    <div className={styles.prices_row}>
                      <div className={styles.title}>{price.title}</div>
                      <div className={styles.price}>{price.price_msk} <i>₽</i></div>
                    </div>
                  </div>
                  <div className={styles.desc}>{price.description}</div>
                </div>
              )}
            </>
          }
          {city == "nizhny" &&
            <>
              {prices.filter(p => p.position == 'left').map((price,_) =>
                <div key={_}>
                  <div className={styles.price_row} key={_}>
                    <div className={styles.prices_row}>
                      <div className={styles.title}>{price.title}</div>
                      <div className={styles.price}>{price.price_nn} <i>₽</i></div>
                    </div>
                  </div>
                  <div className={styles.desc}>{price.description}</div>
                </div>
              )}
            </>
          }
        </div>
        <div className={styles.right}>
          {city == "moscow" &&
            <>
              {prices.filter(p => p.position == 'right').map((price,_) =>
                <div key={_}>
                  <div className={styles.price_row} key={_}>
                    <div className={styles.prices_row}>
                      <div className={styles.title}>{price.title}</div>
                      <div className={styles.price}>{price.price_msk} <i>₽</i></div>
                    </div>
                  </div>
                  <div className={styles.desc}>{price.description}</div>
                </div>
              )}
            </>
          }
          {city == "nizhny" &&
            <>
              {prices.filter(p => p.position == 'right').map((price,_) =>
                <div key={_}>
                  <div className={styles.price_row} key={_}>
                    <div className={styles.prices_row}>
                      <div className={styles.title}>{price.title}</div>
                      <div className={styles.price}>{price.price_nn} <i>₽</i></div>
                    </div>
                  </div>
                  <div className={styles.desc}>{price.description}</div>
                </div>
              )}
            </>
          }
        </div>
        <div className={styles.under}>
          {city == "moscow" &&
            <a className={classNames("ms_booking", button.sign_up)} href="#" data-url="https://n81206.yclients.com/company:95580">Записаться</a>
          }
          {city == "nizhny" &&
            <a className={classNames("ms_booking", button.sign_up)} href="#" data-url="https://n81206.yclients.com/company:58259">Записаться</a>
          }
        </div>
      </div>
    )
  }
}

export default Price
