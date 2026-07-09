import { Link } from 'react-router-dom';

function Navbar(prop) {
  return (
    <div>
        <Link to="/test">Test</Link>
        <h1>{prop.name}</h1>
    </div>
  )
}

export default Navbar
