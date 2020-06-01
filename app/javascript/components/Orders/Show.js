import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Show.module.css'
import page from '../Page.module.css'

Show.propTypes = {
  order: PropTypes.object
}

export default function Show ({ order }) {
  return (
    <div className={classNames(page.root, styles.top)}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1>Заказ №{order.id}</h1>
        </div>

        <div className={styles.desc}>
          Спасибо, {order.name}! Ваш заказ оправлен на электронную почту {order.email}.
        </div>
      </div>
    </div>
  )
}
