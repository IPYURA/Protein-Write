import "./App.css";
import AddItem from "./components/AddItem";
import Main from "./components/Main";
import Mark from "./components/Mark";
import Result from "./components/Result";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header>
        <Logo>CDG</Logo>
        <Title>섭취한 단백질 기록하기</Title>
      </Header>

      <Section>
        <article>
          <AddItem />
          <Main />
        </article>
        <article className="article2">
          <Mark />
          <Result />
        </article>
      </Section>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 30px;
  width: 1280px;
  height: 750px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 24px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1280px) {
    width: 100%;
    height: auto;
    margin: 0 auto;
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.softTextColor};
  }
  @media screen and (max-width: 769px) {
    width: 100vw;
    min-width: 320px;
    border: none;
  }
`;
const Header = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 769px) {
    height: 78px;
    margin-bottom: 40px;
  }
`;
const Section = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;
const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.softTextColor};
  @media screen and (max-width: 769px) {
    position: absolute;
    display: block;
    text-align: center;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`;
const Logo = styled(Title)`
  position: absolute;
  right: 0;
  @media screen and (max-width: 769px) {
    left: 0;
    top: 0;
    width: 0px;
  }
`;
