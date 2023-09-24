import CartFooter from './CartFooter';
import propTypes from 'prop-types';

export default function Drawer({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <>
      <div className='drawer-backdrop ' onClick={onClose}></div>
      <div
        className={`drawer ${open ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className='drawer-header'>
            <h3>سبد خرید</h3>
            <button onClick={onClose}>X</button>
          </div>
          <div className='products'>
            <h2>لیست محصولات در سبد خرید</h2>
          </div>
        </div>

        <CartFooter />
      </div>
    </>
  );
}

Drawer.propTypes = {
  open: propTypes.bool,
  onClose: propTypes.func,
};
