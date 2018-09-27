'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rematch.prod.min.js')
} else {
  module.exports = require('./rematch.dev.js')
}
