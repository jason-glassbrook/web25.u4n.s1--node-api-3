const $ro = require ('./tools/o')

const respondWithError = (code, ...args) => (ri, ro) => {
  ro
    .status (code)
    .json ($ro.errors[code] (...args) (ri, ro))
}

module.exports = respondWithError
