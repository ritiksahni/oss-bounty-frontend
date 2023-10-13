import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Theme>
      <Navbar />
    </Theme>
  );
}

export default App;