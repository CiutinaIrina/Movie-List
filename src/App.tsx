
import { BrowserRouter } from 'react-router';
import './App.css'
import NavBar from './components/common/NavBar';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div>
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
