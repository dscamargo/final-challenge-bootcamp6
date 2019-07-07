import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #e6e6e6;
`;

export const ItemList = styled.View`
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
`;

export const Item = styled.View`
  width: 100%;
  padding: 15px;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  box-shadow: 10px 10px 10px #000;
  elevation: 1;
  /* border: 0.5px solid #bfbfbf; */
  margin-top: 10px;
`;

export const ItemContainerLeft = styled.View`
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
`;

export const ItemContainerRight = styled.View`
  flex-direction: column;
  width: 50%;
`;

export const ItemImage = styled.Image`
  width: 70px;
  height: 70px;
`;
export const ItemName = styled.Text`
  font-size: 12px;
  color: #0b2031;
  text-align: left;
`;

export const ItemSize = styled.Text`
  font-size: 11px;
  color: #706e7b;
  text-align: left;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
  text-align: left;
`;

export const OrderButton = styled.TouchableOpacity`
  background: red;
  border-radius: 20px;
  padding: 10px 30px;
  align-items: center;
  margin-right: 5px;
`;

export const TextOrderButton = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
`;
export const HeaderImage = styled.Image`
  position: absolute;
  z-index: -1;
`;

export const HeaderInnerView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const HeaderPrice = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 3px;
`;

export const OrderInfo = styled.View`
  width: 90%;
  background: #fff;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 20px 20px 20px #000;
  elevation: 1;
`;

export const OrderInfoFirstContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Informations = styled.View`
  margin-top: 15px;
`;

export const Address = styled.Text`
  font-size: 14px;
  color: #0b2031;
  font-weight: bold;
`;

export const Obs = styled.Text`
  color: #0b2031;
  font-size: 13px;
  font-weight: bold;
`;

export const RepeatOrderButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: red;
  font-size: 16px;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-top: 10px;
  align-items: center;
`;

export const RepeatOrderText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
