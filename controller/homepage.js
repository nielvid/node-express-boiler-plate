import Exception from '../utils/exception.js'
import Msg from '../utils/resMsg.js'

export default function HomePage(req, res, next) {
  try {
    Msg(res, { data: 'App homepage' }, 'homepage fetch successful')
  } catch (error) {
    next(new Exception(error.message, error.status))
  }
}
