/**
 * Imports
 */

import test from 'tape'
import Hover from '../src'
import vdux from 'vdux/dom'
import element from 'vdux/element'

/**
 * Tests
 */

test('should work', t => {
  const {stop} = run(() => <Hover>{hovering => <span attr={t.ok(!hovering)}></span>}</Hover>)

  t.plan(1)
  t.end()
  stop()
})

/**
 * Helpers
 */

function run (app) {
  return vdux({
    app,
    reducer: state => state,
    initialState: {}
  })
}
