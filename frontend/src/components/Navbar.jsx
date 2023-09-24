import PropTypes from 'prop-types';

export default function Navbar({ onCartClick }) {
  return (
    <nav>
      <h1>لوگو </h1>

      <ul>
        <li>
          <button onClick={onCartClick}>سبد خرید</button>
        </li>
        <li>
          <button>خاموش</button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  onCartClick: PropTypes.func,
};
