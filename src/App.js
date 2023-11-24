import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductList from './components/Products/productsList';
import ViewCart from './components/Cart/view';
import SearchResults from './components/Search/searchResults';
import theme from './styles/theme';
import { useDispatch } from "react-redux"
import { Route, Routes } from 'react-router-dom';
import { setSessionID } from './store/auth';

function App() {

  const dispatch = useDispatch();
  const getSessionId = async () => {
    const { data } = await axios.get(`https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession`);
    dispatch(setSessionID(data));
  };

  useEffect(() => {
    getSessionId();        
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Routes>
        <Route path='/' Component={ProductList}></Route>
        <Route path='cart' Component={ViewCart}></Route>
        <Route path='search' Component={SearchResults}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
