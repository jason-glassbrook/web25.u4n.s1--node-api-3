/***********************************************************
  logInit
***********************************************************/

const _ = require ('lodash/fp')
const log = require ('./log')

/***************************************
  definition
***************************************/

const logInit = (fun) =>
  _.flow ([
    log ('- init:'),
    fun,
  ])

/**************************************/

module.exports = logInit