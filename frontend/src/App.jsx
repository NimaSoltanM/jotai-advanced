import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className='light-mode'>
      <Navbar onCartClick={() => setOpen(true)} />

      <h2>لیست محصولات ...</h2>

      <Drawer open={open} onClose={() => setOpen(false)} />
    </main>
  );
}

export default App;
