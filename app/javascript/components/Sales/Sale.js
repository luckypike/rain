import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'

import Index from './Index'
import Show from './Show'

Sale.propTypes = {
  city: PropTypes.string,
  specialists: PropTypes.array,
  sales: PropTypes.array,
  sale: PropTypes.object,
  locale: PropTypes.string
}

export default function Sale ({ city, specialists, sales, sale, locale }) {
  return (
    <Router>
      <Index
        path={city === 'moscow' ? 'sales' : 'nizhny/sales'}
        city={city}
        specialists={specialists}
        sales={sales}
        locale={locale}
      />

      <Show
        path={city === 'moscow' ? 'sales/:id' : 'nizhny/sales/:id'}
        city={city}
        sale={sale}
        locale={locale}
      />
    </Router>
  )
}
