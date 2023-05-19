import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components';
import Forget from './components/Forget';
import Login from './components/Login';
import Register from './components/register';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';
import Search from './components/search'

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={5}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Footer" element={<Footer />}></Route>
            <Route path="/Header" element={<Header />}></Route>
            <Route path="/Login" element={ <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                      <Login />
                      </SnackbarProvider>}>
            </Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Forget" element={<Forget />}></Route>
            <Route path="/Content" element={<Content />}></Route>
            <Route path="/Search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
