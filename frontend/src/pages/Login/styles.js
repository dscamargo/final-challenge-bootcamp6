import styled from "styled-components";
import fundo from "../../assets/images/fundo_wallpaper2.jpg";

export const Container = styled.div`
  background: #000 url(${fundo}) no-repeat center top fixed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: inset 30px 9px 180px 129px rgba(0, 0, 0, 1);
  -moz-box-shadow: inset 30px 9px 180px 129px rgba(0, 0, 0, 1);
  box-shadow: inset 30px 9px 180px 129px rgba(0, 0, 0, 1);
`;

export const Login = styled.div`
  width: 300px;
  height: 500px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  img {
    width: 72px;
    height: 72px;
  }

  input {
    width: 350px;
    padding: 13px;
    border-radius: 10px;
    border: 0.5px solid #888;
    margin-bottom: 10px;
    font-family: Helvetica;
    font-size: 15px;
    color: #999999;
    letter-spacing: 0;
    text-align: left;
  }

  button {
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: left;
    background: red;
    border: 0;
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
  }
`;
