import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components';
import Forget from './components/auth/Forget';
import Register from './components/auth/register';
import Layout from './components/layout/layout';
import NotFound from './components/Notfound';
import Cart from './components/cart/cart';
import Thongtin from './components/thongtin';
import Admin from './components/admin/admin';
import Them from './components/admin/add';
import ProductsPage from './components/products/products';
import Chitiet from './components/products/chitietsp';
import UpdateBlog from './components/admin/update';
import Baiviet from './components/baiviet';
import Post from './components/post';
function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={5}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />}>
                <Route path="/SP" element={<ProductsPage />}></Route>
              </Route>
              <Route path="/thongtin" element={<Thongtin />}></Route>

              <Route path="Register" element={<Register />}></Route>
              <Route
                path="Forget"
                element={
                  <SnackbarProvider
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <Forget />
                  </SnackbarProvider>
                }
              ></Route>
              <Route path="Cart" element={<Cart />}></Route>
              <Route path="SP/chitietsp/:id" element={<Chitiet />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>

            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/add" element={<Them />}></Route>
            <Route path="/baiviet" element={<Baiviet />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/product" element={<ProductsPage />}></Route>
            <Route path="/update/:id" element={<UpdateBlog />}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
