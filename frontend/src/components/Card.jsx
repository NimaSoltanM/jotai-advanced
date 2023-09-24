import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

function Card({ product }) {
  return (
    <div className='card'>
      <img src={product.imageUrl} />

      <div className='card-content'>
        <p>{product.title}</p>
        <h4>{formatPrice(product.price)}</h4>
      </div>

      <button>اضافه کردن به سبد خرید</button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  product: PropTypes.object,
};
