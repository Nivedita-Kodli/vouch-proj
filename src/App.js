import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './pages/Loginpage';
import AdminPage from './pages/AdminPage';
import AddClientPage from './pages/AddClientPage';
import PaymentPage from './pages/PaymentPage';
import ThemePage from './pages/ThemePage';
import ModulesPage from './pages/ModulesPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/add-client/create-profile' element={<AddClientPage />} />
          <Route path='/add-client/payment-setup' element={<PaymentPage />} />
          <Route path='/add-client/theme-setup' element={<ThemePage />} />
          <Route path='/add-client/modules-setup' element={<ModulesPage />} />
          {/* <Route path='/add-client/success' element={<SuccessPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
