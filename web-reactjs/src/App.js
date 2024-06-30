import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import ProductPage from "./page/product/ProductPage";
import ProfilePage from "./page/profile/ProfilePage";
import MainLayout from './component/layout/MainLayout';
import MainLayoutLogin from './component/layout/MainLayoutLogin';
import LoginPage from './page/auth/LoginPage';
import RegisterPage from './page/auth/RegisterPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route element={<MainLayoutLogin />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
