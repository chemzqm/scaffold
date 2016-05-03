'use strict'
import Emitter from 'emitter'

class Mod extends Emitter {
  x() {
    let a = 1
    let b = 2
    return `${a} ${b}`
  }
  static y() {
    return 111
  }
}

export default Mod
