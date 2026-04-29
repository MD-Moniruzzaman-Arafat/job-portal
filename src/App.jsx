import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
