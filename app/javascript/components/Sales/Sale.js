import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'

import Index from './Index'
import Show from './Show'

Sale.propTypes = {
  city: PropTypes.string,
  specialists: PropTypes.array,
  sales: PropTypes.array,
  sale: PropTypes.object
}

export default function Sale ({ city, specialists, sales, sale }) {
  return (
    <Router>
      <Index path={city === 'moscow' ? 'sales' : 'nizhny/sales'} city={city} specialists={specialists} sales={sales} />
      <Show path={city === 'moscow' ? 'sales/:id' : 'nizhny/sales/:id'} sale={sale} />
    </Router>
  )
}
