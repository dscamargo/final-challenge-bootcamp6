import styled from "styled-components";

export const Container = styled.View`
  background: #e6e6e6;
  flex: 1;
`;

export const InnerContainer = styled.View`
  width: 85%;
  flex: 1;
  margin: 0 auto;
`;

export const OrderList = styled.View``;

export const Order = styled.View`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #000;
  elevation: 1;
  margin-bottom: 10px;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
`;

export const OrderView = styled.View`
  flex-direction: column;
`;

export const OrderTitle = styled.Text`
  font-size: 12px;
  color: #0b2031;
  text-align: left;
`;

export const OrderDate = styled.Text`
  font-size: 11px;
  color: #706e7b;
  text-align: left;
`;

export const OrderPrice = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
  text-align: left;
`;

export const IconView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 40%;
  padding: 5px;
  background: red;
  border-radius: 10px;
  align-items: center;
`;

export const LogoutTextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
