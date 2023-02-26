import { Link } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <h1>Home Page</h1>
        <button><Link to='/about'>Goto About</Link></button>
      </div>
    </div>
  )
}

export default App
