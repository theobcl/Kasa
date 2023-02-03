import { createGlobalStyle } from 'styled-components';
import RoutesPath from './routes/RoutesPath';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

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
