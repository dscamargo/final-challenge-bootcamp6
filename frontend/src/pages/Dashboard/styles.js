import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const InnerContainer = styled.div`
  width: 900px;
`;

export const Title = styled.div`
  margin: 30px 0 30px 5px;
  font-size: 18px;
  color: #333333;
  font-weight: bold;
  display: flex;
  align-items: center;
  img {
    margin-left: 10px;
  }
`;

export const OrderContainer = styled.div`
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  -webkit-box-shadow: 3px 4px 17px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 3px 4px 17px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 3px 4px 17px 0px rgba(0, 0, 0, 0.6);
  background: #fff;
  strong {
    font-family: Helvetica;
    font-size: 14px;
    color: #706e7b;
    letter-spacing: 0;
    text-align: left;

    span {
      font-weight: normal;
    }
  }
`;
export const OrderList = styled.div``;
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;

  button {
    padding: 20px;
    background: #0b2031;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    border: 0;
    font-size: 14px;
  }

  h1 {
    font-family: Helvetica;
    font-size: 18px;
    color: #0b2031;
    text-align: left;
    margin-bottom: 5px;

    span {
      font-weight: bold;
    }
  }
  h2 {
    font-family: Helvetica;
    font-weight: bold;
    font-size: 16px;
    color: #0b2031;
    text-align: left;
  }

  h3 {
    font-family: Helvetica;
    font-size: 11px;
    color: #706e7b;
    line-height: 14px;
    text-align: left;
    font-weight: normal;
    margin-bottom: 5px;
  }
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewOrderContainer = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  background: #0b2031;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
`;

export const NewOrderNotification = styled.h1`
  font-size: 14px;
  color: #fff;
`;

export const MainList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const OrderTitle = styled.div`
  font-size: 18px;
  text-align: left;
  color: #010536;
  span {
    font-weight: bold;
  }
`;

export const OrderTime = styled.div`
  font-size: 14px;
  color: #706e7b;
  text-align: left;
  font-weight: normal;
`;
export const OrderPrice = styled.div`
  margin-top: 5px;
  font-weight: bold;
  color: #010536;
`;
export const ItemList = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  display: flex;
  justify-content: left;
`;

export const Item = styled.div`
  width: 32%;
  height: 100px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 20px;

  &:nth-child(-n + 3) {
    margin-top: 20px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  h2 {
    font-size: 16px;
    color: #0b2031;
    font-weight: normal;
  }

  h3 {
    font-size: 13px;
    color: #706e7b;
    font-weight: normal;
  }
`;

export const Obs = styled.div`
  font-size: 14px;
  color: #706e7b;
  font-weight: normal;
  margin-top: 20px;
  span {
    font-weight: bold;
  }
`;
