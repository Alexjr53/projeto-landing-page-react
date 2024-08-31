import './Global.css';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header/Header'

function App() {
  return (
    <HashRouter>
      <Header/>
      <AppRoutes></AppRoutes>
    </HashRouter>
  );
}

export default App;

