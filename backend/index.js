const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

let products = [
  {
    id: '1',
    title: 'MacBook Pro',
    price: 145000000,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/3a6f118edd9a654d427ad4c022cd6cb6d54f18e2_1671293430.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
    available: false,
  },
  {
    id: '2',
    title: 'Alienware X17',
    price: 200000000,
    imageUrl: 'https://cdnfa.com/powerbank360/2cdc/files/3874613.jpg',
    available: true,
  },
  {
    id: '3',
    title: 'MSI Crosshair 15',
    price: 88000000,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/20cc22642b109659942c2a8d783f25d2ac23500d_1675840446.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
    available: true,
  },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
