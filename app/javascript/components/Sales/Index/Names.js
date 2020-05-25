import React from 'react'
import PropTypes from 'prop-types'

import styles from './Names.module.css'

Names.propTypes = {
  specialist: PropTypes.object
}

export default function Names ({ specialist }) {
  return (
    <div className={styles.names}>
      {specialist.name &&
        <div className={styles.name}>
          {specialist.name}
          <span className={styles.comma}>, </span>
        </div>
      }
    </div>
  )
}
