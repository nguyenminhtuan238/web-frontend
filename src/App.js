import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components';
import Forget from './components/Forget';
import Login from './components/Login';
import Register from './components/register';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Forget" element={<Forget />}></Route>
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
    </div>
  );
}

export default App;
