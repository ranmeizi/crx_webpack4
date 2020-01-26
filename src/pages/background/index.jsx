import React from 'react'
import ReactDOM from 'react-dom'

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}
let App = function () {
  return <div>background</div>
}
render(App)