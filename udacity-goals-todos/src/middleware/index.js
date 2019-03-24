import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'
import checker from './checker'
import { applyMiddleWare } from 'redux'

export default applyMiddleWare(
  thunk,
  checker,
  logger
)