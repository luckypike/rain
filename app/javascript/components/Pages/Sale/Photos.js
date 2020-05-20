import React from 'react'
import PropTypes from 'prop-types'

import styles from './Photos.module.css'

Photos.propTypes = {
  specialist: PropTypes.object
}

export default function Photos ({ specialist }) {
  return (
    <div className={styles.masters}>
      <div className={styles.photos}>
        <div className={styles.image}>
          {specialist.photo &&
            <div className={styles.photo}>
              <img src={specialist.photo} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
