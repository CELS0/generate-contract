import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: sans-serif;
  background-image: url("https://uploadnodejs.s3.amazonaws.com/lotes.png");
  background-repeat: no-repeat;
  display: flex;
  justify-content: right;
  align-items: center;

  background-size: cover;
  margin: auto;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const Main = styled.div`
  height: 900px;
  width: 350px;
  background-color: rgba(40, 42, 53, 0.7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-right: 120px;

  @media (max-width: 720px) {
    margin-right: 0px;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 8px;
  border-radius: 8px;
  border: 1px solid #ffff;
  font-size: 12px;
  margin-bottom: -10px;
  padding: 0.5em 0.5em 0.5em;
`;
const Title = styled.h3`
  color: #fec901;
  align-self: flex-start;
  font-size: 12px;
  margin-right: 86px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const Button = styled.button`
  width: 316px;
  height: 30px;
  background: #cc0001;
  cursor: pointer;
  font-weight: 700;
  border: 1px solid #cc0001;
  border-radius: 8px;
  color: #ffff;
  margin-bottom: 10px;
`;

export { Container, Main, Button, Input, Title, Content, ContentRow };
