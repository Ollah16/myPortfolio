import './styles/darkmode.css';
import './styles/lightmode.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeContext } from './context/themeContext';
import Layout from '../src/pages/layout'
function App() {

  return (
    <ThemeContext>
      <Layout />
    </ThemeContext >);
}

export default App;
