import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Error() {

  return (
    <div className="App">
      <div>
        <h1 style={{color: 'red'}}>Error Page!!</h1>
        <button><a href='/'>Goto Home</a></button>
      </div>
    </div>
  )
}

export default Error
