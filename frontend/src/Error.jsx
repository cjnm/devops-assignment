import { Link } from 'react-router-dom';
import './App.css'

function Error() {

  return (
    <div className="App">
      <div>
        <h1 style={{color: 'red'}}>Error Page!!</h1>
        <button><Link to='/'>Goto Home</Link></button>
      </div>
    </div>
  )
}

export default Error
