import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #010a2a;
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const InnerContainer = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  span {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
`;
export const RightSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;

  span {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
  button {
    color: #999;
    font-size: 14px;
    background: transparent;
    text-align: right;
    border: 0;
  }
`;
