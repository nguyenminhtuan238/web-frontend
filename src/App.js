import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components';
import Forget from './components/auth/Forget';
import Login from './components/auth/Login';
import Register from './components/auth/register';
import Layout from './components/layout/layout';
import NotFound from './components/Notfound';
import Cart from './components/cart/cart';
import Thongtin from './components/thongtin';
import Admin from './components/admin';
import Them from './components/them';
import Product from './components/cart/products';
import ProductsPage from './components/cart/products';
import View from './components/cart/view';

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={5}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}>
                <Route path="/SP" element={<ProductsPage />}></Route>
              </Route>
              <Route path="/thongtin" element={<Thongtin />}></Route>

              <Route
                path="Login"
                element={
                  <SnackbarProvider
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  >
                    <Login />
                  </SnackbarProvider>
                }
              ></Route>
              <Route path="Register" element={<Register />}></Route>
              <Route
                path="Forget"
                element={
                  <SnackbarProvider
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  >
                    <Forget />
                  </SnackbarProvider>
                }
              ></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="Cart" element={<Cart />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/them" element={<Them />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/view" element={<View />}></Route>
       
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
