require('../style.scss')
import Mod from '../src/index'

var m = new Mod()
m.on('x', () => {
  console.log('called')
})
m.x()
console.log(22)

