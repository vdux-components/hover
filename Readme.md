
# hover

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Hover component for vdux

## Installation

    $ npm install vdux-hover

## Usage

`<Hover />` accepts both normal children and 'function children'. If you pass a function child to hover, it will call that child with a bool indicating whether or not the mouse is currently over your element. Example:

```javascript
function render () {
  return (
    <Hover>
      <MenuItem />
      {
        hover => hover && <Tooltip message='Use MenuItem to menu your items!!' />}
      }
    </Hover>
  )
}
```

That's all there is to it.

## License

MIT
