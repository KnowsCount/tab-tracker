console.log('hello')

/*
 * https://github.com/expressjs/express - express
 * https://github.com/expressjs/body-parser - body-parser
 * https://github.com/expressjs/cors -cors
 * https://github.com/expressjs/morgan - morgan
 */

const express = require('express') // express (web framework for node)
const bodyParser = require('body-parser') // process json data
const cors = require('cors') // Connect/Express middleware
const morgan = require('morgan') // HTTP request logger middleware

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
