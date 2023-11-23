import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductList from './components/Products/productsList'
import theme from './styles/theme';

function App() {

  const getSessionId = async () => {
    const { data } = await axios.get(`https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession`);
    localStorage.setItem('sessionId', data);
  };

  useEffect(() => {
    getSessionId();        
  },[]);
  
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <ProductList/>
    </ThemeProvider>
  );
}

export default App;
