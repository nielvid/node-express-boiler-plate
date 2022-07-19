import Exception from '../utils/exception.js'
import Msg from '../utils/resMsg.js'

export default function HomePage(req, res, next) {
  try {
    Msg(res, { data: 'homepage loaded' }, 'homepage')
  } catch (error) {
    next(new Exception(error.message, error.status))
  }
}
