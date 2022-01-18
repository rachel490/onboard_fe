import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <Hero />
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.main`
  padding:0;
  padding-top: 75px;
  height: 500px;
`

