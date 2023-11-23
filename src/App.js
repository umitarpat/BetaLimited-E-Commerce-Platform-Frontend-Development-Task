import { Button, Container, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
