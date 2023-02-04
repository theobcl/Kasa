import { createGlobalStyle } from 'styled-components';
import RoutesPath from './routes/RoutesPath';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesPath />
    </>
  );
}

export default App;
