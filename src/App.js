import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components';
import Forget from './components/Forget';
import Login from './components/Login';
import Register from './components/register';
import Layout from './components/layout/layout';
import NotFound from './components/Notfound';
function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={5}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}></Route>
            <Route path="Login" element={ <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                      <Login />
                </SnackbarProvider>}>
              </Route>
            <Route path="Register" element={<Register />}></Route>
            <Route path="Forget" element={<Forget />}></Route>
            </Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
