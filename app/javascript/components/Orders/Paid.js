import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Paid.module.css'
import page from '../Page.module.css'

Paid.propTypes = {
  order: PropTypes.object
}

export default function Paid ({ order }) {
  return (
    <div className={classNames(page.root, styles.top)}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1>Заказ №{order.id}</h1>
        </div>

        <div className={styles.desc}>
          Спасибо! Ваш заказ оправлен на электронную почту {order.email}.
        </div>
      </div>
    </div>
  )
}
