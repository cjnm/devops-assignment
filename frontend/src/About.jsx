import { Link } from 'react-router-dom';
import './App.css'

function About() {

  return (
    <div className="App">
      <div>
        <h1>About Page</h1>
        <button><Link to='/'>Goto Home</Link></button>
      </div>
    </div>
  )
}

export default About
