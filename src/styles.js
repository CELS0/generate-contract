import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: sans-serif;
  background-image: url("../assets/lotes.png");
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  height: 60vh;
  width: 20vw;
  background-color: rgba(40,42,53,0.7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 850px;
`;

const Input = styled.input`
  width: 300px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #ffff;
  font-size: 12px;
  padding: 0.5em 0.5em 0.5em;
`;
const Title = styled.h3`
  color: #172044;
  align-self: flex-start;
  font-size: 15px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  background: #fec901;
  cursor: pointer;
  font-weight: 700;
  border: 1px solid #fec901;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export { Container, Main, Button, Input, Title, Content };
