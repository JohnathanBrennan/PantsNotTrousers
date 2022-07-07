import './App.scss';
import HeaderMenu from './components/HeaderMenu';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// $pnt_blue: #4a64b8;
// $pnt_indigo: #2C4460;
// $pnt_yellow: #F0F090;
// $pnt_white: #F5E0F5;
// $pnt_coffee: #81523F;


export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#2C4460',
    },
    secondary: {
      main: '#4a64b8'
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <HeaderMenu />
          <h1>
            Pants Not Trousers
          </h1>
          <p>
            More than just a band. It's an idea.
          </p>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
