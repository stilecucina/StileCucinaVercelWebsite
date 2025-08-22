import './App.css';
import ProductList from './ProductList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import ProductPage from "./ProductPage";
import ContactPage from './ContactPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
