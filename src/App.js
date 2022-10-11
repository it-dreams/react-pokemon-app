import './App.css';
import Home from './pages/HomeComponent';
import { AppContainer } from './styledComponents/Pokemon.styled';

const baseURI = process.env.POKEDEX_BASE_API;

function App() {
  return (
    <AppContainer getByTestId="rootElement">
      <Home baseURI={baseURI} />
    </AppContainer>
  );
}

export default App;