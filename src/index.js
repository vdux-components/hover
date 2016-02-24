/**
 * Imports
 */

import element from 'vdux/element'
import maybeOver from '@f/maybe-over'
import createAction from '@f/create-action'
import handleActions from '@f/handle-actions'

/**
 * initialState
 */

function initialState () {
  return {
    hovering: false
  }
}

/**
 * Hover component
 */

function render ({state, children, local}) {
  return (
    <span onMouseOver={local(hoverOver)} onMouseOut={local(hoverOut)}>
      {
        maybeOver(state.hovering, children)
      }
    </span>
  )
}

/**
 * Actions
 */

const hoverOver = createAction('<Hover /> component: hover over')
const hoverOut = createAction('Hover /> component: hover out')

/**
 * Reducer
 */

const reducer = handleActions({
  [hoverOver]: state => ({...state, hovering: true}),
  [hoverOut]: state => ({...state, hovering: false})
})

/**
 * Exports
 */

export default {
  initialState,
  render,
  reducer
}
