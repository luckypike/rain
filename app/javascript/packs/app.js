// require('@rails/ujs').start()

// import '../styles/app.css';
import '../images/og.jpg'
import 'normalize.css/normalize'
import '@glidejs/glide/dist/css/glide.core'

var componentRequireContext = require.context('components', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
ReactRailsUJS.mountComponents()
