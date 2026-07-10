import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '16px', padding: '12px 24px', borderBottom: '1px solid #ccc' }}>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
