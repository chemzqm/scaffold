/*global describe, it, beforeEach, afterEach*/
var assert = require('assert')
var scaffold = require('..')

var el
beforeEach(function () {
  el = document.createElement('div')
  document.body.appendChild(el)
})

afterEach(function () {
  document.body.removeChild(el)
})

describe('works', function() {
  it('should works', function () {
    assert(/can/.test(document.body.textContent))
  })
})
