import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

export default function CartProduct({ product }) {
  return (
    <div className='product' key={product.id}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <img src={product.imageUrl} alt='' />
        <button className='remove'>حذف</button>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2.25rem',
        }}
      >
        <div className='product-name-price'>
          <h3>{product.title}</h3>
          <span>{formatPrice(product.quantity * product.price)}</span>
        </div>

        <div className='product-base-quantity'>
          <div className='quantity'>
            <p>
              {formatPrice(product.price)} * {formatPrice(product.quantity)}
            </p>
            <div className='buttons'>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.object,
};
